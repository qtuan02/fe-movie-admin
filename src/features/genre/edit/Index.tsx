import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FormComponent } from "../components/FormComponent";
import { IGenre } from "@/interfaces/IGenre";
import { useAppDispatch } from "@/redux/hook";
import { editGenre } from "@/redux/reducer/genreReducer";

interface IEditProps {
    genre?: IGenre;
    dialog: boolean;
    toggleDialog: () => void;
}

export function EditComponent({ genre, dialog, toggleDialog }: IEditProps) {
    const dispatch = useAppDispatch();

    const handleSubmit = (value: IGenre) => {
        dispatch(editGenre(value))
    }

    return (
        <Dialog open={dialog} onOpenChange={toggleDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit genre</DialogTitle>
                </DialogHeader>

                <FormComponent onSubmit={handleSubmit} data={genre} />
            </DialogContent>
        </Dialog>
    )
}
