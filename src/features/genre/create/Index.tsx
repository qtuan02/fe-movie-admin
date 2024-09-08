import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FormComponent } from "../components/FormComponent";
import { IGenre } from "@/interfaces/IGenre";
import { useAppDispatch } from "@/redux/hook";
import { createGenre } from "@/redux/reducer/genreReducer";

interface ICreateProps {
    dialog: boolean;
    toggleDialog: () => void;
}

export function CreateComponent({ dialog, toggleDialog }: ICreateProps) {
    const dispatch = useAppDispatch();

    const handleSubmit = (value: IGenre) => {
        dispatch(createGenre(value));
    }

    return (
        <Dialog open={dialog} onOpenChange={toggleDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New genre</DialogTitle>
                </DialogHeader>

                <FormComponent onSubmit={handleSubmit} />
            </DialogContent>
        </Dialog>
    )
}
