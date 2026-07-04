import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StrategicIntelligence } from "@/components/sections/StrategicIntelligence";
import { AuthorityWithoutNoise } from "@/components/sections/AuthorityWithoutNoise";
import { MethodFramework } from "@/components/sections/MethodFramework";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <StrategicIntelligence />
            <AuthorityWithoutNoise />
            <MethodFramework />
            <Footer />
        </main>
    );
}
