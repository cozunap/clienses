import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_fallback');

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { revenue, bottleneck, employees, email } = body;

        if (!revenue || !bottleneck || !employees || !email) {
            return NextResponse.json({ error: 'Faltan datos obligatorios para el diagnóstico.' }, { status: 400 });
        }

        if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_dummy_fallback') {
            return NextResponse.json(
                { error: 'RESEND_API_KEY no configurada. Debes configurar tu llave en el servidor.' },
                { status: 500 }
            );
        }

        const internalEmail = resend.emails.send({
            from: 'Clienses Diagnósticos <onboarding@resend.dev>',
            to: 'hi@clienses.com',
            subject: `NUEVO DIAGNÓSTICO: Lead Calificado (${revenue})`,
            text: `
Se ha completado un nuevo Diagnóstico de Escalabilidad Empresarial en la plataforma.

DETALLES DEL PROSPECTO:
- Correo Corporativo: ${email}
- Facturación Anual: ${revenue}
- Tamaño de Organización: ${employees} empleados
- Cuello de Botella Principal: ${bottleneck}

Este lead fue capturado a través del flujo interactivo premium.
            `,
        });

        const clientEmail = resend.emails.send({
            from: 'Clienses <onboarding@resend.dev>',
            to: email,
            subject: 'Recepción de Datos: Diagnóstico de Escalabilidad',
            text: `
Estimado Director/a,

Confirmamos la recepción de los datos de su organización. Nuestro equipo de consultores estratégicos está analizando su estructura de facturación y cuellos de botella operativos.

Nos pondremos en contacto con usted a la brevedad con un plan estructurado y confidencial.

Atentamente,

Clienses Strategic Group
Poder Silencioso.
            `,
        });

        await Promise.all([internalEmail, clientEmail]);

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        console.error("Error en assessment API:", error);
        return NextResponse.json(
            { error: "Ocurrió un error al procesar el diagnóstico. Intente nuevamente." },
            { status: 500 }
        );
    }
}
