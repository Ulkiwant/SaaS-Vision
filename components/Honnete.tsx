import Reveal from "./Reveal";

export default function Honnete() {
  return (
    <section className="border-y border-line bg-mint/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Franchise
          </p>
          <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
            Le sur-mesure n&apos;est pas toujours la bonne réponse.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-body">
            Un outil fige des habitudes : si votre façon de travailler change
            encore chaque semaine, mieux vaut d&apos;abord la stabiliser — et je
            peux vous aider à la cadrer. Si je pense que ce n&apos;est pas le bon
            moment ou pas le bon outil, je vous le dis dès le premier échange :
            vendre quelque chose dont vous n&apos;avez pas besoin ne
            m&apos;intéresse pas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
