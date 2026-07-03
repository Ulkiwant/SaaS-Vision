import type { Metadata } from "next";
import Shell from "@/components/cockpit/Shell";

// Section privée : jamais indexée par les moteurs de recherche.
export const metadata: Metadata = {
  title: "Cockpit — SaaS Vision",
  robots: { index: false, follow: false },
};

export default function CockpitLayout({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}
