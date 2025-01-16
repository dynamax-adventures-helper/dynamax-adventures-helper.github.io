import { FC } from "react";

import Move from "@/components/molecules/Move/Move";
import { PokemonMove } from "@/types/Pokemon";

interface MoveContainerProps {
    moves: PokemonMove[]
    textSize?: string
    chipStyle?: string
}

const MoveContainer: FC<MoveContainerProps> = ({moves, textSize, chipStyle="xs-chip"}) => {
    if (!moves) return null;
    
    return (
        <div>
            <p className="text-xl ml-3 mt-3 font-bold">Moves</p>
            <div className="mb-3">
                { moves && moves.map(move => (
                    <div key={move.Name} className="flex flex-col">
                        <Move 
                            move={move}
                            textSize={textSize}
                            chipStyle={chipStyle}
                        />
                    </div>
                ))}
            </div> 
        </div>
    );
}

export default MoveContainer;
