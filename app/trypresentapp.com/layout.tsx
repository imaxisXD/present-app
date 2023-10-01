import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";


export default function LandingPageLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-background bg-page-gradient flex min-h-screen flex-col justify-between selection:bg-purple-500 selection:text-white">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}