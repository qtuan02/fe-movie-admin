import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ISelectionPagition {
    limit: number;
    quantities: string[];
    onLimitChange: (page: number) => void;
}

const CSelectPagination: React.FC<ISelectionPagition> = (props) => {
    const { limit, quantities, onLimitChange } = props;

    const handleLimitChange = (page: string) => {
        if(onLimitChange) {
            onLimitChange(Number(page));
        }
    }
    
    return (
        <div className="m-1">
            <Select onValueChange={handleLimitChange}>
                <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder={limit} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {quantities.map((quantity) => (
                            <SelectItem key={quantity} value={quantity}>
                                {quantity}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default CSelectPagination;