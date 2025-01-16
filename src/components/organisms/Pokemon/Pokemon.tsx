import { FC } from "react";
import Image from 'next/image'
import pokemonJson from '@/data/AllLegendaryPokemonFull.json';
import Card from '@/components/atoms/Card/Card';
import TypeContainer from "@/components/molecules/TypeContainer/TypeContainer";
import Move from "@/components/molecules/Move/Move";
import MoveContainer from "../MoveContainer/MoveContainer";
import { PokemonData } from "@/types/Pokemon";

interface PokeProps {
    name: string
}

const Pokemon: FC<PokeProps> = ({name}) => {
    if (!name) return null;
    
    const pokemon = getPokemonData(name);
    return (
        <div className="flex flex-col items-center">
            <Card className="bg-pokecard text-pokecardtext rounded-lg shadow-lg mt-7">
                <div className="flex flex-row">
                    <div className="mb-3">
                        <h1 className="text-3xl p-3 font-bold">{name}</h1>
                        <div className=""> 
                            <Image 
                                src={pokemon.ImageUrl} 
                                alt={name}
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="flex flex-row justify-center">
                            <TypeContainer
                                types={pokemon.Types}
                            />
                        </div>
                    </div>
                    <div className="mt-2 mr-3">
                        <TypeContainer
                            title="2x Weak"
                            types={pokemon.Weaknesses.Weak2x}
                        />

                        <TypeContainer
                            title="4x Weak"
                            types={pokemon.Weaknesses.Weak4x}
                        />

                        <TypeContainer
                            title="Immunities"
                            types={pokemon.Immunities}
                        />

                        <MoveContainer 
                            moves={pokemon.Moves}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Pokemon;

function getPokemonData(name: string) : PokemonData  {
    const pokemon = pokemonJson.find(p => p.Name.includes(name));
 
    return {
        ImageUrl: pokemon?.ImageUrl || "",
        Types: pokemon?.Types || [],
        Weaknesses: pokemon?.Weaknesses || { Weak2x: [], Weak4x: [] },
        Immunities: pokemon?.Immunities || [],
        Moves: pokemon?.Moves || [],
        IsGmax: pokemon?.IsGmax || false,
        Ability: pokemon?.Ability || "",
        AbilityDescription: pokemon?.AbilityDescription || "",
        Name: pokemon?.Name || ""
    }
}