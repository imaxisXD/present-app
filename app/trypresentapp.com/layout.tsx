import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";


export default function LandingPageLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-background flex min-h-screen flex-col justify-between">
            <Navbar />
            {children}
        </div>
    );
}