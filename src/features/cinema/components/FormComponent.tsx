import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ICinema } from "@/interfaces/ICinema";
import { useAppSelector } from "@/redux/hook";
import { getCinemaState } from "@/redux/reducer/cinemaReducer";
import { Edit, Loader2, Save } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form"

interface IFormProps{
    data?: ICinema;
    onSubmit: (value: ICinema) => void;
}

export function FormComponent({ data, onSubmit }: IFormProps) {
    const cinema = useAppSelector(getCinemaState);
    
    const { register, handleSubmit, reset } = useForm<ICinema>();

    const onFormSubmit = handleSubmit((value) => {
        value._id = data?._id;
        onSubmit(value as ICinema);
    })

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data, reset]);

    return (
        <form onSubmit={onFormSubmit}>
            <div className="mt-2">
                <Label htmlFor="name">Name <span className="text-[#FF0000]">*</span></Label>
                <Input {...register("name")} id="name" placeholder="Cinema name..." required />
            </div>
            <div className="mt-2">
                <Label htmlFor="location">Location <span className="text-[#FF0000]">*</span></Label>
                <Input {...register("location")} id="location" placeholder="Address..." required />
            </div>
            <div className="mt-2">
                <Label htmlFor="phone">Phone <span className="text-[#FF0000]">*</span></Label>
                <Input {...register("phone")} id="phone" placeholder="Contact number..." required />
            </div>
            <br />
            <div className="flex justify-end">
                { cinema.edit ? 
                    <Button className="flex gap-2" size="sm"><Loader2 className="animate-spin" />Loading...</Button> :
                    <Button className="flex gap-2" size="sm" type="submit">{data ? <><Edit />Edit</> : <><Save />Save</>}</Button>
                }
            </div>
        </form>
    )
}