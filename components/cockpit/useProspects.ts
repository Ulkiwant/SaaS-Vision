"use client";

import { useEffect, useState } from "react";
import { store, type Prospect } from "@/lib/store";

/**
 * Hook de lecture des prospects : charge depuis le store côté client
 * (après hydratation) et se met à jour à chaque changement.
 * `pret` évite d'afficher « base vide » pendant le premier rendu.
 */
export function useProspects() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [pret, setPret] = useState(false);

  useEffect(() => {
    const maj = () => setProspects(store.lister());
    maj();
    setPret(true);
    return store.surChangement(maj);
  }, []);

  return { prospects, pret };
}
