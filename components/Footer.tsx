import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-body">
              La puissance d&apos;un logiciel sur mesure, sans la complexité ni
              le prix d&apos;une agence.
            </p>
          </div>

          <nav aria-label="Navigation pied de page">
            <p className="text-[13px] font-bold uppercase tracking-widest text-muted">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px]">
              <li><a href="#services" className="text-body transition-colors hover:text-ink">Services</a></li>
              <li><a href="#approche" className="text-body transition-colors hover:text-ink">Approche</a></li>
              <li><a href="#tarifs" className="text-body transition-colors hover:text-ink">Tarifs</a></li>
              <li><a href="#a-propos" className="text-body transition-colors hover:text-ink">À propos</a></li>
            </ul>
          </nav>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-widest text-muted">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px]">
              <li>
                <a href="mailto:contact@saasvision.fr" className="text-body transition-colors hover:text-ink">
                  contact@saasvision.fr
                </a>
              </li>
              <li className="text-body">Réponse sous 24–48 h</li>
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-widest text-muted">
              Légal
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px]">
              <li>
                <Link href="/mentions-legales" className="text-body transition-colors hover:text-ink">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-body transition-colors hover:text-ink">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-center text-[13px] text-muted">
          © 2026 SaaS Vision — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
