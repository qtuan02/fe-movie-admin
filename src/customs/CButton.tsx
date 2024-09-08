import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IButtonProps {
    to?: string
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

const CButton: React.FC<IButtonProps>  = (props) => {
    const { to, className, children, onClick, size } = props

    return (
        <Link to={to ?? "#"}>
            <Button size={size ? size : "default"} className={className} onClick={onClick}>
                {children}
            </Button>
        </Link>
    )
}

export default CButton;