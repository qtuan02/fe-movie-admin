import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FormComponent } from "../components/FormComponent";
import { ICountry } from "@/interfaces/ICountry";
import { useAppDispatch } from "@/redux/hook";
import { createCountry } from "@/redux/reducer/countryReducer";

interface ICreateProps {
    dialog: boolean;
    toggleDialog: () => void;
}

export function CreateComponent({ dialog, toggleDialog }: ICreateProps) {
    const dispatch = useAppDispatch();

    const handleSubmit = (value: ICountry) => {
        dispatch(createCountry(value));
    }

    return (
        <Dialog open={dialog} onOpenChange={toggleDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New country</DialogTitle>
                </DialogHeader>

                <FormComponent onSubmit={handleSubmit} />
                
            </DialogContent>
        </Dialog>
    )
}
