import { FC } from "react"
import PokemonType from "@/components/molecules/PokemonType/PokemonType"

interface TypeContainerProps {
    title?: string
    types: string[]
    style?: string;
}

const TypeContainer: FC<TypeContainerProps> = ({ title, types, style }) => {
    if (!types) return null;

   return (
        <div>
            { types.length > 0 && <p className="text-xl ml-3 font-bold">{title}</p> }
                {types.map(type => (
                <PokemonType 
                    key={type}
                    type={type}
                    style={style}
                />
                ))}
        </div>
   )
}

export default TypeContainer;