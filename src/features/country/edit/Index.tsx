import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FormComponent } from "../components/FormComponent";
import { ICountry } from "@/interfaces/ICountry";
import { useAppDispatch } from "@/redux/hook";
import { editCountry } from "@/redux/reducer/countryReducer";

interface IEditProps {
    country?: ICountry;
    dialog: boolean;
    toggleDialog: () => void;
}

export function EditComponent({ country, dialog, toggleDialog }: IEditProps) {
    const dispatch = useAppDispatch();
    
    const handleSubmit = (value: ICountry) => {
        dispatch(editCountry(value));
    }

    return (
        <Dialog open={dialog} onOpenChange={toggleDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit country</DialogTitle>
                </DialogHeader>

                <FormComponent onSubmit={handleSubmit}  data={country}  />
                
            </DialogContent>
        </Dialog>
    )
}
