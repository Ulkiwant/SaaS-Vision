"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#approche", label: "Approche" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#a-propos", label: "À propos" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Navigation principale"
      >
        <Link href="/" aria-label="SaaS Vision — Accueil" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[15px] font-medium text-body transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-leaf px-5 py-2.5 text-[15px] font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift md:inline-block"
        >
          M&apos;écrire
        </a>

        {/* Burger */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-5 rounded-full bg-ink transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-ink transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-ink transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-28 transition-all duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-4 font-serif text-3xl text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-8 rounded-full bg-leaf px-6 py-4 text-center text-lg font-semibold text-white"
        >
          M&apos;écrire
        </a>
      </div>
    </header>
  );
}
