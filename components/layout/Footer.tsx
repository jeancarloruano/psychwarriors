import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn More" },
  { href: "/book", label: "Book A Session" },
  { href: "/contact", label: "Contact Me" },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal/20 bg-gradient-brand mt-auto">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 px-6 py-8 md:flex-nowrap md:gap-6 md:py-10">
        <div className="min-w-0 shrink-0">
          <p className="font-display text-base font-semibold text-charcoal md:text-lg">
            Psychological Warfare
          </p>
          <p className="mt-0.5 text-xs text-charcoal/80 md:text-sm">
            Guidance and supportive consultation services · *<a href="/book#disclaimer" className="underline hover:text-cream/100">Disclaimer</a>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-4 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal/90 hover:text-cream font-medium transition-colors md:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="shrink-0 text-right text-xs text-charcoal/70 md:text-sm">
          © {new Date().getFullYear()} Psychological Warfare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
