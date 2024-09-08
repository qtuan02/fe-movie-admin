import { Button } from "@/components/ui/button";
import { FilePenLine, Trash2 } from "lucide-react";

interface IButtonIconProps {
    type: "edit" | "del";
    onClick?: () => void;
}

const CButtonIcon: React.FC<IButtonIconProps>  = (props) => {
    const { type, onClick } = props

    return (
        type === "edit" ?
        <Button onClick={onClick} size="icon" className="h-7 w-7 bg-[#1677ff] hover:bg-[#1677ff] hover:opacity-75" ><FilePenLine /></Button> :
        <Button onClick={onClick} size="icon" className="h-7 w-7 bg-[#FF0000] hover:bg-[#FF0000] hover:opacity-75" ><Trash2 /></Button>
    )
}

export default CButtonIcon;