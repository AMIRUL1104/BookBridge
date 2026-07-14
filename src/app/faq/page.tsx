// src/app/faq/page.tsx
import FAQContainer from "@/components/faq/FAQContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | BookBridge",
    description: "Find answers to frequently asked questions about buying, selling, and donating books on BookBridge.",
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD]">
            <FAQContainer />
        </main>
    );
}