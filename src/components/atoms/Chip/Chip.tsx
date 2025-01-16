import { FC } from "react";

interface ChipProps {
	text: string;
	style?: string;
    color: string;
	textHover?: boolean;
}

const Chip: FC<ChipProps> = ({text, style = "small-chip", color, textHover}) => {
	return (
        <div className={style} style={{backgroundColor: color}} >
			<p>{text}</p>
		</div>
    )
}

export default Chip;