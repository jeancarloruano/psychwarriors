"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BASE_PATH } from "@/lib/basePath";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn More" },
  { href: "/book", label: "Book A Session" },
  { href: "/contact", label: "Contact Me" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/20 bg-gradient-brand-transparent backdrop-blur-sm">
      <nav className="flex min-h-[4.5rem] w-full items-center justify-between px-6 py-5 md:min-h-[5rem] md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-10 md:justify-stretch md:py-6 lg:gap-x-16">

        {/* Logo */}
        <div className="flex items-center gap-2 md:justify-self-start">
          <Image
            src={`${BASE_PATH}/favicon.ico`}
            alt="Psychological Warfare Logo"
            width={32}
            height={32}
          />

          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-charcoal/90 hover:text-cream transition-colors"
          >
            Psychological Warfare
          </Link>
        </div>

        {/* Desktop Menu - centered */}
        <ul className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-medium transition-colors group ${active ? "text-cream" : "text-charcoal/90 hover:text-cream"}`}
                >
                  {link.label}
                  {/* underline: always on when active, hover animation when not */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-cream transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Button - right on mobile; hidden on desktop */}
        <div className="flex justify-end md:justify-self-end">
        <button
          className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-charcoal/20 bg-earth px-6">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li
                  key={link.href}
                  className="border-b border-cream/10 last:border-none py-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-lg font-medium transition-colors ${active ? "text-cream underline underline-offset-4" : "text-cream/80 hover:text-cream"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}