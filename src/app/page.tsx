'use client';
import { useState } from "react";
import Autocomplete from "@/components/molecules/AutoComplete/AutoComplete";
import Pokemon from "@/components/organisms/Pokemon/Pokemon";
import RentalPokemonContainer from "@/components/organisms/RentalPokemonContainer/RentalPokemonContainer";
import Button from "@/components/atoms/Button/Button";

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
      <main className="flex flex-col justify-center">
        <div className="flex flex-col min-h-[90vh]">
          <Autocomplete
            onChange={(event, newValue) => setValue(newValue || "")}
            options={legendaryPokemon}
          />
      
          <Pokemon
            name={value}
          />
          { value && <RentalPokemonContainer 
            name={value}
          />}
        </div>
        <div className="p-4 text-white">
          <Button/>
        </div>
      </main>

    </div>

  );
}

