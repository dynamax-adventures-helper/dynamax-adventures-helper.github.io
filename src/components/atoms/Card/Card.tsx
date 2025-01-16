import { FC, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
    className?: string
    children: React.ReactNode
}

const Card: FC<CardProps> = ({children, className}) => {
    return (
        <div className={className} >
            {children}
        </div>
    );
}

export default Card;