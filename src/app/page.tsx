'use client';
import { useState } from "react";
import Autocomplete from "@/components/molecules/AutoComplete/AutoComplete";
import Pokemon from "@/components/organisms/Pokemon/Pokemon";
import RentalPokemonContainer from "@/components/organisms/RentalPokemonContainer/RentalPokemonContainer";

const legendaryPokemon: string[] = [
  "Articuno",
  "Azelf",
  "Blacephalon",
  "Buzzwole",
  "Celesteela",
  "Cresselia",
  "Dialga",
  "Entei",
  "Giratina",
  "Groudon",
  "Guzzlord",
  "Heatran",
  "Ho-Oh",
  "Kartana",
  "Kyogre",
  "Kyurem",
  "Landorus",
  "Latias",
  "Latios",
  "Lugia",
  "Lunala",
  "Mesprit",
  "Mewtwo",
  "Moltres",
  "Necrozma",
  "Nihilego",
  "Palkia",
  "Pheromosa",
  "Raikou",
  "Rayquaza",
  "Reshiram",
  "Stakataka",
  "Suicune",
  "Solgaleo",
  "Tapu Bulu",
  "Tapu Fini",
  "Tapu Koko",
  "Tapu Lele",
  "Thundurus",
  "Tornadus",
  "Uxie",
  "Xerneas",
  "Xurkitree",
  "Yveltal",
  "Zapdos",
  "Zekrom",
  "Zygarde"
];

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <div>
      <main>
        <div>
          <Autocomplete
            onChange={(event, newValue) => setValue(newValue || "")}
            options={legendaryPokemon}
          />
      
          <Pokemon
            name={value}
          />

        </div>
        <div>
          { value && <RentalPokemonContainer 
            name={value}
          />}
        </div>
      </main>
    </div>
  );
}

