import Reveal from "./Reveal";

const rows = [
  {
    critere: "Adaptation à vos process",
    generique: "Vous vous adaptez au logiciel",
    surMesure: "Le logiciel s'adapte à vous",
  },
  {
    critere: "Fonctionnalités",
    generique: "Des dizaines d'options que personne n'utilise",
    surMesure: "Uniquement ce dont vous avez besoin",
  },
  {
    critere: "Coût dans le temps",
    generique: "Par utilisateur, pour toujours, et ça augmente",
    surMesure: "Une création, puis un abonnement maîtrisé",
  },
  {
    critere: "Évolutions",
    generique: "Vous attendez la feuille de route de l'éditeur",
    surMesure: "Vous demandez, c'est développé",
  },
  {
    critere: "Support",
    generique: "Chatbot, tickets et attente",
    surMesure: "La personne qui a codé votre outil",
  },
  {
    critere: "Propriété",
    generique: "Rien ne vous appartient",
    surMesure: "Le code est à vous",
  },
];

export default function Comparatif() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Comparatif
          </p>
          <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
            Sur mesure ou abonnement générique&nbsp;?
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left">
              <thead>
                <tr>
                  <th className="w-[26%] pb-4" />
                  <th className="w-[37%] rounded-t-[18px] bg-pine-light px-6 py-4 text-[15px] font-semibold text-body">
                    Logiciel générique en abonnement
                  </th>
                  <th className="w-[37%] rounded-t-[18px] bg-pine px-6 py-4 text-[15px] font-semibold text-mint">
                    Sur mesure avec SaaS Vision
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => {
                  const last = i === rows.length - 1;
                  return (
                    <tr key={r.critere}>
                      <td className="border-t border-line py-4 pr-4 text-[14px] font-bold uppercase tracking-wide text-muted">
                        {r.critere}
                      </td>
                      <td
                        className={`bg-pine-light px-6 py-4 text-[15px] text-body ${
                          last ? "rounded-b-[18px]" : ""
                        }`}
                      >
                        {r.generique}
                      </td>
                      <td
                        className={`bg-pine px-6 py-4 text-[15px] font-medium text-white ${
                          last ? "rounded-b-[18px]" : ""
                        }`}
                      >
                        {r.surMesure}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
