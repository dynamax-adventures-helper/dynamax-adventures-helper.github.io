export interface PokemonData {
    Name: string;
    ImageUrl: string;
    Ability: string;
    AbilityDescription: string;
    Types: string[];
    Moves: PokemonMove[];
    IsGmax: boolean;
    Weaknesses: Weaknesses;
    Immunities: string[];
}

export interface RentalPokemonData {
    Name: string;
    ImageUrl: string;
    Ability: string;
    AbilityDescription: string;
    Types: string[];
    Moves: PokemonMove[];
    IsGmax: boolean;
}

export interface PokemonMove {
    Type: string;
    Name: string;
    Description: string;
    DamageType: string;
}

export interface Weaknesses {
    Weak2x: string[];
    Weak4x: string[];
}

export interface IRentalPokemon {
    name: string;
    imageUrl: string;
    types: string[];
    moves: Move[];
}

export interface Move {
    Type: string; 
    Name: string; 
    Description: string; 
    DamageType: string; 
}