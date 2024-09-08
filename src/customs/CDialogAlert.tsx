import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ReactNode } from "react";

interface IDialogAlertProps {
    status: boolean;
    header: ReactNode;
    description: ReactNode;
    onCancel: () => void;
    onSubmit?: () => void;
}

const CDialogAlert: React.FC<IDialogAlertProps> = (props) => {
    const { status, header, description, onCancel, onSubmit } = props;

    return (
        <AlertDialog open={status}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{header}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onSubmit}>Submit</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default CDialogAlert;