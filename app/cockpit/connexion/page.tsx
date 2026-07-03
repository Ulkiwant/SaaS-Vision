"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

/** Page de connexion du cockpit — sobre, dans la DA du site. */
export default function Connexion() {
  const router = useRouter();
  const [erreur, setErreur] = useState(false);
  const [envoi, setEnvoi] = useState(false);

  async function envoyer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnvoi(true);
    setErreur(false);
    const password = new FormData(e.currentTarget).get("password");
    const res = await fetch("/api/cockpit/connexion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.replace("/cockpit");
      router.refresh();
    } else {
      setErreur(true);
      setEnvoi(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-5">
      <form
        onSubmit={envoyer}
        className="w-full max-w-sm rounded-[20px] border border-line bg-paper p-8 shadow-soft"
      >
        <p className="font-logo text-[16px] leading-[1.05] tracking-wide text-muted">SaaS</p>
        <p className="font-logo text-[21px] font-bold leading-[1.1] text-ink">Vision</p>
        <span aria-hidden className="mt-[5px] block h-[3.5px] w-12 rounded-full bg-leaf" />

        <h1 className="mt-7 font-display font-semibold text-2xl text-ink">Cockpit</h1>
        <p className="mt-1.5 text-[14px] text-body">Espace privé — accès protégé.</p>

        <label htmlFor="password" className="mt-6 block text-[13px] font-semibold text-ink">
          Mot de passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoFocus
          className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
        />
        {erreur && (
          <p className="mt-2 text-[13px] font-medium text-red-500">Mot de passe incorrect.</p>
        )}
        <button
          type="submit"
          disabled={envoi}
          className="mt-5 w-full rounded-full bg-leaf px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60"
        >
          {envoi ? "Connexion…" : "Entrer"}
        </button>
      </form>
    </main>
  );
}
