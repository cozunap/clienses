import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Provide a dummy key if not found so the local build doesn't crash, 
// but warn the user that they must provide a real one
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_fallback');

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, intent } = body;

        // Basic validation
        if (!name || !email || !phone || !intent) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        // Si no hay API KEY válida, detenemos la simulación y lanzamos error
        if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_dummy_fallback') {
            return NextResponse.json(
                { error: 'RESEND_API_KEY no configurada. Debes crear una cuenta en resend.com y colocar tu llave en el archivo .env.' },
                { status: 500 }
            );
        }

        // Internal Notification to the Firm
        const internalEmail = resend.emails.send({
            from: 'Clienses Notificaciones <onboarding@resend.dev>',
            to: 'hi@clienses.com',
            subject: `NUEVA CONSULTA: ${name}`,
            text: `
Has recibido una nueva solicitud confidencial a través del portal clienses.com.

DETALLES DE LA ORGANIZACIÓN:
- Nombre / Empresa: ${name}
- Email: ${email}
- Teléfono: ${phone}

INTENCIÓN ESTRATÉGICA:
${intent}

---
Este es un mensaje automático del sistema de arquitectura estratégica de Clienses.
            `,
        });

        // Confirmation Email to the Client
        const clientEmail = resend.emails.send({
            from: 'Clienses <onboarding@resend.dev>',
            to: email,
            subject: 'CONFIRMACIÓN: Solicitud de Arquitectura Estratégica',
            text: `
Estimado/a ${name},

Confirmamos la recepción de su solicitud de consulta estratégica en Clienses. 

Nuestro equipo de directores revisará la información proporcionada bajo nuestro estricto protocolo de confidencialidad y se pondrá en contacto con usted a la brevedad para estructurar los siguientes pasos.

Atentamente,

Clienses Strategic Group
Poder Silencioso.
            `,
        });

        await Promise.all([internalEmail, clientEmail]);

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        console.error("Error detailed:", error);
        return NextResponse.json(
            { error: "Error sending email" },
            { status: 500 }
        );
    }
}
