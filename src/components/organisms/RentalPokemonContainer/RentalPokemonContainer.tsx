import { FC } from "react";
import rentalPokemonJson from '@/data/AllRentalPokemonFull.json';
import legendaryJson from '@/data/AllLegendaryPokemonFull.json';
import { RentalPokemonData, IRentalPokemon } from "@/types/Pokemon";
import RentalPokemonBox from "@/components/molecules/RentalPokemonBox/RentalPokemonBox";

interface RentalPokemonContainerProps {
    name: string;
}

interface Weaknesses {
    Weak2x: string[];
    Weak4x: string[];
}

interface Tiers {
    SSS: IRentalPokemon[]; // 4x with Stab
    SS: IRentalPokemon[]; // 4x without Stab
    S: IRentalPokemon[]; // 2x with Stab
    A: IRentalPokemon[]; // 2x without Stab
    B: IRentalPokemon[]; // 1x with Stab
    C: IRentalPokemon[]; // 1x without Stab
    D: IRentalPokemon[]; // 0.5x with Stab
    F: IRentalPokemon[]; // 0.5x without Stab
}

const RentalPokemonContainer: FC<RentalPokemonContainerProps> = ({name}) => {
    const { weaknesses } = getPokemonData(name);
    const rentals = getRentalPokemonCounters(name, weaknesses);
	return (
        <div className="flex flex-col items-center">
            <h2 className="mt-5 font-bold text-3xl text-pokecardtext">Rental Counters</h2>
            <RentalPokemonBox
                title="SSS Tier (4x with STAB)"
                rentals={rentals.SSS}
            />
            <RentalPokemonBox
                title="SS Tier (4x move without STAB)"
                rentals={rentals.SS}
            />
            <RentalPokemonBox
                title="S Tier (2x with STAB)"
                rentals={rentals.S}
            />
            <RentalPokemonBox
                title="A Tier (2x move without STAB)"
                rentals={rentals.A}
            />
       </div>
    )
}

export default RentalPokemonContainer;

function getRentalPokemonCounters(name: string, weaknesses: Weaknesses): Tiers {
    const typesToCheck = weaknesses.Weak2x.concat(weaknesses.Weak4x);

    // cut working set down to just pokemon with type advantage or moves that have type advantage
    let filteredRentalPokemon = rentalPokemonJson.filter(p => p.Moves.some(m => typesToCheck.includes(m.Type)) || p.Types.some(t => typesToCheck.includes(t)));

    // pokemon with 4x type advantage move and STAB
    const stab4xRentals = filteredRentalPokemon.filter(r => r.Types.some(t => weaknesses.Weak4x.includes(t)) && r.Moves.some(m => weaknesses.Weak4x.includes(m.Type) && m.DamageType !== "status"));
    // remove the 4x STAB pokemon from the working set
    filteredRentalPokemon = filteredRentalPokemon.filter(r => !stab4xRentals.includes(r));

    // pokemon with 4x type advantage move but no STAB
    const move4xRentals = filteredRentalPokemon.filter(r => r.Moves.find(m => weaknesses.Weak4x.includes(m.Type) && m.DamageType !== "status"));
    // remove the 4x move pokemon from the working set
    filteredRentalPokemon = filteredRentalPokemon.filter(r => !move4xRentals.includes(r));

    // pokemon with 2x type advantage move and STAB
    const stab2xRentals = filteredRentalPokemon.filter(r => r.Types.some(t => weaknesses.Weak2x.includes(t)) && r.Moves.some(m => weaknesses.Weak2x.includes(m.Type) && m.DamageType !== "status"));
    // remove the 2x STAB pokemon from the working set
    filteredRentalPokemon = filteredRentalPokemon.filter(r => !stab2xRentals.includes(r));

    // pokemon with 2x type advantage move but no STAB
    const move2xRentals = filteredRentalPokemon.filter(r => r.Moves.find(m => weaknesses.Weak2x.includes(m.Type) && m.DamageType !== "status"));

    return {
        SSS: convertToCounterList(stab4xRentals),
        SS: convertToCounterList(move4xRentals),
        S: convertToCounterList(stab2xRentals),
        A: convertToCounterList(move2xRentals),
        B: [],
        C: [],
        D: [],
        F: []
    };
}

function getPokemonData(name: string) {
    const pokemon = legendaryJson.find(p => p.Name.includes(name));
 
    return {
        weaknesses: pokemon?.Weaknesses || { Weak2x: [], Weak4x: [] },
        immunities: pokemon?.Immunities || []
    }
}

function convertToCounterList(pokemon: RentalPokemonData[]): IRentalPokemon[] {
    const counters: IRentalPokemon[] = [];
    pokemon.forEach(rental => {
        counters.push( {
            name: rental.Name,
            imageUrl: rental.ImageUrl,
            types: rental.Types,
            moves: rental.Moves
        });
    });
    return counters.sort((a, b) => a.name.localeCompare(b.name));
}