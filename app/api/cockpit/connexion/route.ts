import { NextResponse } from "next/server";
import { createHash } from "crypto";

/** Connexion : compare le mot de passe à COCKPIT_PASSWORD et pose le cookie. */
export async function POST(req: Request) {
  const { password } = (await req.json().catch(() => ({}))) as { password?: string };
  const attendu = process.env.COCKPIT_PASSWORD;

  if (!attendu || !password || password !== attendu) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("cockpit_session", createHash("sha256").update(attendu).digest("hex"), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 jours
  });
  return res;
}

/** Déconnexion : efface le cookie. */
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("cockpit_session", "", { path: "/", maxAge: 0 });
  return res;
}
