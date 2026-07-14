// src/components/layout/footer/Footer.tsx
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

export default function Footer() {
  console.log("[Footer] Rendering Server Component Layout");

  // ডাটা ম্যাপস
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Books", href: "/books" },
    { label: "Add Book", href: "/books/add" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  const resourcesLinks = [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-[#35858E] border-t border-white/10 w-full font-sans">
      {/* টপ সেকশন: ফোর-কলাম গ্রিড লেআউট */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

          {/* কলাম ১: ব্র্যান্ড */}
          <FooterBrand />

          {/* কলাম ২: কুইক লিঙ্কস */}
          <FooterLinks title="Quick Links" links={quickLinks} />

          {/* কলাম ৩: রিসোর্সেস */}
          <FooterLinks title="Resources" links={resourcesLinks} />

          {/* কলাম ৪: কন্টাক্ট ও সোশাল */}
          <FooterContact />

        </div>
      </div>

      {/* বটম বার: কপিরাইট ও টেক স্ট্যাক */}
      <div className="border-t border-white/10 bg-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C2D099]">
          <p className="text-center sm:text-left">
            &copy; 2026 BookBridge. Built for educational purposes.
          </p>
          <p className="text-center sm:text-right font-medium">
            Made with <span className="text-[#F6CE71]">Next.js 16</span> &amp; <span className="text-[#7DA78C]">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}