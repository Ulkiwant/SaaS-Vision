import Reveal from "./Reveal";

const cas = [
  {
    titre: "Votre besoin est 100 % standard",
    texte:
      "Si un outil du marché bien choisi couvre votre besoin tel quel, il coûtera moins cher qu'un développement. Je vous le dirai.",
  },
  {
    titre: "Votre façon de travailler change encore chaque semaine",
    texte:
      "Un outil fige des habitudes. Si elles ne sont pas stabilisées, mieux vaut attendre — et je peux vous aider à cadrer d'abord.",
  },
  {
    titre: "Votre budget est en dessous de 1 500 €",
    texte:
      "À ce niveau, un tableur bien construit est souvent la bonne étape. Revenez me voir quand l'activité aura grandi.",
  },
  {
    titre: "Vous cherchez un site vitrine",
    texte:
      "Ce n'est pas ma spécialité. Je construis des outils de travail, pas des sites de présentation — je vous orienterai vers le bon prestataire.",
  },
];

export default function Honnete() {
  return (
    <section className="border-y border-line bg-mint/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Franchise
          </p>
          <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
            Le sur-mesure n&apos;est pas toujours la bonne réponse.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-body">
            Dans ces quatre cas, je vous le dis dès le premier échange — vendre
            un outil dont vous n&apos;avez pas besoin ne m&apos;intéresse pas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cas.map((c, i) => (
            <Reveal
              key={c.titre}
              delay={i * 70}
              from={i % 2 === 0 ? "left" : "right"}
              className="rounded-[20px] border border-line bg-paper p-7"
            >
              <h3 className="font-display font-semibold text-[20px] leading-snug text-ink">
                {c.titre}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-body">{c.texte}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
