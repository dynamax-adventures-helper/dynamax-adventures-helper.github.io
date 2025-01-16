import { FC } from "react";

interface ChipProps {
	text: string;
	style?: string;
    color: string;
}

const Chip: FC<ChipProps> = ({text, style = "small-chip", color}) => {
	return (
        <div className={style} style={{backgroundColor: color}} >
			<p>{text}</p>
		</div>
    )
}

export default Chip;