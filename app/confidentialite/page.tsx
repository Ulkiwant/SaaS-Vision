import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — SaaS Vision",
  robots: { index: false },
};

export default function Confidentialite() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 md:px-8">
        <Link href="/" className="text-[14px] font-semibold text-pine hover:text-leaf">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink">
          Politique de confidentialité
        </h1>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-body">
          <section>
            <h2 className="text-lg font-bold text-ink">Données collectées</h2>
            <p className="mt-2">
              Le formulaire de contact collecte : nom, adresse e-mail, nom
              d&apos;entreprise (facultatif) et le message décrivant votre
              projet. Ces données servent uniquement à répondre à votre
              demande de devis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Base légale et durée de conservation</h2>
            <p className="mt-2">
              Le traitement repose sur votre consentement et sur les mesures
              précontractuelles (demande de devis). Les données sont
              conservées au maximum 3 ans après le dernier contact, puis
              supprimées.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Destinataires</h2>
            <p className="mt-2">
              Les données sont transmises via le service Formspree (traitement
              du formulaire) et ne sont ni vendues ni partagées avec des
              tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Cookies</h2>
            <p className="mt-2">
              Ce site n&apos;utilise pas de cookies de suivi publicitaire.
              Seuls des cookies techniques strictement nécessaires peuvent
              être déposés.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Vos droits</h2>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification, d&apos;effacement et d&apos;opposition sur vos
              données. Pour l&apos;exercer, écrivez à{" "}
              <a href="mailto:contact@saasvision.fr" className="font-semibold text-pine">
                contact@saasvision.fr
              </a>
              . Vous pouvez également saisir la CNIL (cnil.fr).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink">Responsable du traitement</h2>
            <p className="mt-2">
              SaaS Vision — Quentin Celette, entreprise individuelle, 18 rue
              Jean Baptiste Dupré, 42530 Saint-Genest-Lerpt, France (SIRET
              107 141 764 00012).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
