import { FC } from "react";
import RentalPokemon from "@/components/molecules/RentalPokemon/RentalPokemon";
import { IRentalPokemon } from "@/types/Pokemon";

interface RentalPokemonBoxProps {
    title: string;
    rentals: IRentalPokemon[];
}

const RentalPokemonBox: FC<RentalPokemonBoxProps> = ({title, rentals}) => {
    if (!rentals || rentals.length <= 0) return null;
	return (
        <div className="flex flex-col items-center">
            <p className="mt-5 font-bold text-xl text-pokecardtext">{title}</p>
            <div className="flex flex-wrap justify-center">
                {rentals.length > 1 && rentals.map(rental => (
                    <RentalPokemon
                        key={rental.name}
                        pokemon={rental}
                    />
                ))}
            </div>
        </div>
    )
}

export default RentalPokemonBox;