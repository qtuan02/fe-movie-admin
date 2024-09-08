import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ICinema } from "@/interfaces/ICinema";
import { FormComponent } from "../components/FormComponent";
import { useAppDispatch } from "@/redux/hook";
import { createCinema } from "@/redux/reducer/cinemaReducer";

interface ICreateProps {
    dialog: boolean;
    toggleDialog: () => void;
}

export function CreateComponent({ dialog, toggleDialog }: ICreateProps) {
    const dispatch = useAppDispatch();

    const handleSubmit = (value: ICinema) => {
        dispatch(createCinema(value))
    }

    return (
        <Dialog open={dialog} onOpenChange={toggleDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New cinema</DialogTitle>
                </DialogHeader>

                <FormComponent onSubmit={handleSubmit} />
                
            </DialogContent>
        </Dialog>
    )
}
