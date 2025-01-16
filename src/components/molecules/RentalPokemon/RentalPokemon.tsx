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
        >
            <Card className="bg-pokecard text-pokecardtext rounded-lg shadow-lg max-w-s hover:brightness-125 cursor-pointer">
                <div className="flex flex-col">
                { showPokeinfo && <h4 className="text-xl font-bold text-center">{nameSimple}</h4>}
                    <div className="flex justify-center">
                        <Image 
                            src={pokemon.imageUrl} 
                            alt={nameSimple}
                            width={75}
                            height={75}
                            title={nameSimple}
                        />
                    </div>
                    { showPokeinfo && (
                    <div className="flex justify-center">
                        <TypeContainer
                            types={pokemon.types}
                            style="xs-chip"
                        />
                    </div>
                    )}
                    { showPokeinfo && (
                    <div> 
                        <MoveContainer 
                            moves={pokemon.moves}
                            textSize="text-sm"
                        /> 
                    </div>
                    )}
                </div>
            </Card>
        </div>
    )
}

export default RentalPokemon;