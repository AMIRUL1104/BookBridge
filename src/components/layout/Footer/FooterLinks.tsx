// src/components/layout/footer/FooterLinks.tsx
import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white font-semibold text-lg tracking-wide">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="text-[#C2D099] text-sm hover:text-[#FCDE70] focus-visible:text-[#FCDE70] focus-visible:outline-2 focus-visible:outline-[#35858E] rounded transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}