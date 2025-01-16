import { FC, useState } from "react";
import Image from 'next/image'
import Card from '@/components/atoms/Card/Card';
import TypeContainer from "@/components/molecules/TypeContainer/TypeContainer";
import MoveContainer from "@/components/organisms/MoveContainer/MoveContainer";
import { IRentalPokemon } from "@/types/Pokemon";

interface RentalPokemonProps {
    pokemon: IRentalPokemon;
}

const RentalPokemon: FC<RentalPokemonProps> = ({pokemon}) => {
    const nameSimple = pokemon.name.split("\n")[0];
    const [showPokeinfo, setShowPokeinfo] = useState(false);
	return (
        <div 
            onClick={() => setShowPokeinfo(showPokeinfo => !showPokeinfo)}
            // onMouseEnter={() => setShowPokeinfo(true)}
            // onMouseLeave={() => setShowPokeinfo(false)}
        >
            <Card className="bg-pokecard text-pokecardtext rounded-lg shadow-lg max-w-s hover:brightness-75 cursor-pointer">
                   { showPokeinfo && <h4 className="text-xl font-bold text-center">{nameSimple}</h4>}
                    <Image 
                        src={pokemon.imageUrl} 
                        alt={nameSimple}
                        width={75}
                        height={75}
                        title={nameSimple}
                    />
                    { showPokeinfo && (
                    <div>
                        <TypeContainer
                            types={pokemon.types}
                            style="xs-chip"
                        />
                    
                        <MoveContainer 
                            moves={pokemon.moves}
                            textSize="text-sm"
                            //chipStyle="no-text-chip"
                        /> 
                    </div>
                    )}
            </Card>
        </div>
    )
}

export default RentalPokemon;