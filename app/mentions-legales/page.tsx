import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — SaaS Vision",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 md:px-8">
        <Link href="/" className="text-[14px] font-semibold text-pine hover:text-leaf">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink">
          Mentions légales
        </h1>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-body">
          <section>
            <h2 className="text-lg font-bold text-ink">Éditeur du site</h2>
            <p className="mt-2">
              SaaS Vision — Entreprise individuelle (micro-entreprise)<br />
              Quentin Celette<br />
              18 rue Jean Baptiste Dupré, 42530 Saint-Genest-Lerpt, France<br />
              SIRET : 107 141 764 00012<br />
              APE : 6201Z — Programmation informatique<br />
              E-mail : contact@saasvision.fr
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Directeur de la publication</h2>
            <p className="mt-2">Quentin Celette</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Hébergement</h2>
            <p className="mt-2">
              Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble du contenu de ce site (textes, visuels, logo) est
              la propriété de SaaS Vision, sauf mention contraire. Toute
              reproduction sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Contact</h2>
            <p className="mt-2">
              Pour toute question relative au site :{" "}
              <a href="mailto:contact@saasvision.fr" className="font-semibold text-pine">
                contact@saasvision.fr
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
