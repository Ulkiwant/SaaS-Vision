"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

// ➜ Créez un formulaire gratuit sur https://formspree.io puis remplacez
//   l'ID ci-dessous (ou définissez NEXT_PUBLIC_FORMSPREE_ID sur Vercel).
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "VOTRE_ID_FORMSPREE";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam : si le champ caché est rempli, on ignore.
    if (data.get("_gotcha")) return;

    const newErrors: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) newErrors.name = "Votre nom est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Adresse e-mail invalide.";
    if (message.length < 10)
      newErrors.message = "Décrivez votre projet en quelques lignes (10 caractères min.).";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (field: string) =>
    `w-full rounded-xl border bg-paper px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-muted focus:border-leaf focus:ring-2 focus:ring-leaf/20 ${
      errors[field] ? "border-red-400" : "border-line"
    }`;

  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
              Contact
            </p>
            <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
              Parlons de votre projet.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-body">
              Décrivez-moi votre besoin en quelques lignes, avec vos mots —
              pas besoin de vocabulaire technique. C&apos;est moi qui lis
              chaque message, et c&apos;est moi qui vous réponds. Sans
              engagement, et sans relances commerciales derrière.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-[15px]">
              <a
                href="mailto:contact@saasvision.fr"
                className="inline-flex w-fit items-center gap-2 font-semibold text-pine transition-colors hover:text-leaf"
              >
                ✉ contact@saasvision.fr
              </a>
              <span className="text-body">Je réponds sous 24 à 48 h</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[24px] bg-pine-light p-6 shadow-soft md:p-8"
            >
              {/* Honeypot (invisible pour les humains) */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold text-ink">
                    Nom *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    className={inputClass("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[13px] text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-ink">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@entreprise.fr"
                    className={inputClass("email")}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[13px] text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="company" className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Entreprise
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  className={inputClass("company")}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre besoin : quel outil, pour quelle équipe, quel fonctionnement aujourd'hui…"
                  className={`${inputClass("message")} resize-none`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-full bg-leaf px-7 py-4 text-[16px] font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Envoi en cours…" : "Envoyer"}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="mt-4 rounded-xl bg-pine px-4 py-3 text-center text-[14px] font-semibold text-mint">
                    Merci, c&apos;est bien reçu. Je vous réponds personnellement sous 24 à 48 h.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-[14px] font-semibold text-red-600">
                    Une erreur est survenue. Réessayez ou écrivez-moi directement à contact@saasvision.fr.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
