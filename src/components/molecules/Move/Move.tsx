import { FC } from "react"
import Image from 'next/image'
import PokemonType from "@/components/molecules/PokemonType/PokemonType"
import { PokemonMove }  from '@/types/Pokemon';

interface MoveProps {
    move: PokemonMove;
    chipStyle?: string;
    textSize?: string;
}


interface DamageTypeImages {
    [key: string]: string;
}

const damageTypes: DamageTypeImages = {
    special: 'SpecialDamageType.png',
    physical: 'PhysicalDamageType.png',
    status: 'StatusDamageType.png',
};

const Move: FC<MoveProps> = ({ move, chipStyle = "xs-chip", textSize="text-lg" }) => {
    if (!move) return null;
    const damageTypeImage = damageTypes[move.DamageType.toLowerCase()];
    return (
        <div className="flex flex-row items-center">
            <p title={move.Description} className={textSize + " ml-3 font-bold"}>{move.Name}</p>
            <PokemonType 
                type={move.Type}
                style={chipStyle}
            />
            <Image 
                src={damageTypeImage} 
                alt={move.DamageType}
                width={40}
                height={20}
                title={move.DamageType}
            />
        </div>
    )
}

export default Move;