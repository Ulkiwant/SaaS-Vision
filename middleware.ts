import { NextResponse, type NextRequest } from "next/server";

/**
 * Protège /cockpit par un cookie de session.
 * Le cookie contient le SHA-256 du mot de passe (jamais le mot de passe
 * lui-même) et est comparé au hash de COCKPIT_PASSWORD à chaque requête.
 */

async function sha256(texte: string): Promise<string> {
  const data = new TextEncoder().encode(texte);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const motDePasse = process.env.COCKPIT_PASSWORD;
  const cookie = req.cookies.get("cockpit_session")?.value;
  // Si COCKPIT_PASSWORD n'est pas défini, personne ne peut entrer.
  const autorise = !!motDePasse && !!cookie && cookie === (await sha256(motDePasse));

  if (pathname.startsWith("/cockpit/connexion")) {
    // Déjà connecté → directement au cockpit.
    if (autorise) return NextResponse.redirect(new URL("/cockpit", req.url));
    return NextResponse.next();
  }
  if (!autorise) return NextResponse.redirect(new URL("/cockpit/connexion", req.url));
  return NextResponse.next();
}

export const config = { matcher: ["/cockpit/:path*"] };
