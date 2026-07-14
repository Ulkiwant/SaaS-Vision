"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  {
    num: "1",
    duree: "Semaine 1",
    title: "On commence par parler",
    text: "Un échange gratuit, sans engagement, où c'est vous qui parlez : votre métier, vos habitudes, ce qui coince au quotidien. Je ne propose rien avant d'avoir compris.",
    livrable: "Un devis fixe et un périmètre clair",
  },
  {
    num: "2",
    duree: "Semaines 2 à 4",
    title: "Je construis, vous voyez vite",
    text: "Vous recevez des premiers écrans en quelques jours, pas dans trois mois. On ajuste ensemble, jusqu'à ce que l'outil colle à votre réalité.",
    livrable: "Votre outil en production, vos données reprises",
  },
  {
    num: "3",
    duree: "En continu",
    title: "Je reste là",
    text: "Hébergement, maintenance, évolutions : votre outil grandit avec votre entreprise, et vous gardez le même interlocuteur qu'au premier jour.",
    livrable: "Support direct et évolutions à la demande",
  },
];

export default function Approche() {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="approche" className="border-y border-line bg-pine-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Approche
          </p>
          <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.02em] text-ink md:text-[52px]">
            Simple pour vous, rigoureux de mon côté.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Panneau épinglé */}
          <div className="hidden lg:block">
            <div className="sticky top-32 rounded-[24px] bg-grad-dark p-9 shadow-lift">
              <div className="flex gap-2.5">
                {steps.map((s, i) => (
                  <span
                    key={s.num}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      i === active ? "bg-leaf" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8"
                >
                  <span className="font-display font-semibold text-6xl text-gradient">
                    {steps[active].num}
                  </span>
                  <p className="mt-2 text-[13px] font-bold uppercase tracking-wider text-mint/50">
                    {steps[active].duree}
                  </p>
                  <h3 className="mt-4 font-display font-semibold text-2xl text-white">
                    {steps[active].title}
                  </h3>
                  <p className="mt-6 flex items-start gap-2.5 border-t border-white/10 pt-6 text-[14px] font-medium text-mint">
                    <span aria-hidden className="mt-[3px] text-leaf">→</span>
                    {steps[active].livrable}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Étapes défilantes */}
          <ol className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <li
                key={s.num}
                ref={(el) => {
                  refs.current[i] = el;
                }}
              >
                <Reveal
                  delay={i * 90}
                  className={`flex flex-col rounded-[20px] border p-8 transition-colors duration-300 lg:p-10 ${
                    active === i
                      ? "border-leaf/40 bg-paper shadow-lift"
                      : "border-line bg-paper/60"
                  }`}
                >
                  <div className="flex items-center justify-between lg:hidden">
                    <span className="font-display font-semibold text-4xl text-leaf/50" aria-hidden>
                      {s.num}.
                    </span>
                    <span className="rounded-full bg-mint px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wider text-pine">
                      {s.duree}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-2xl text-ink lg:mt-0 lg:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body lg:text-[17px]">
                    {s.text}
                  </p>
                  <p className="mt-5 flex items-start gap-2.5 border-t border-line pt-5 text-[14px] font-medium text-ink lg:hidden">
                    <span aria-hidden className="mt-[3px] text-leaf">→</span>
                    {s.livrable}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
