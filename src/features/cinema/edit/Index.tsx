import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ICinema } from "@/interfaces/ICinema";
import { FormComponent } from "../components/FormComponent";
import { useAppDispatch } from "@/redux/hook";
import { editCinema } from "@/redux/reducer/cinemaReducer";

interface IEditProps {
    cinema?: ICinema;
    dialog: boolean;
    toggleDialog: () => void;
}

export function EditComponent({ cinema, dialog, toggleDialog }: IEditProps) {
    const dispatch = useAppDispatch();

    const handleSubmit = (value: ICinema) => {
        dispatch(editCinema(value));        
    }

    return (
        <Dialog open={dialog} onOpenChange={toggleDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit cinema</DialogTitle>
                </DialogHeader>

                <FormComponent onSubmit={handleSubmit} data={cinema} />
                
            </DialogContent>
        </Dialog>
    )
}
