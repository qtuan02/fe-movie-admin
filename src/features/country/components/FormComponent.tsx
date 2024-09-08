import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ICountry } from "@/interfaces/ICountry";
import { useAppSelector } from "@/redux/hook";
import { getCountryState } from "@/redux/reducer/countryReducer";
import { Edit, Loader2, Save } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form"

interface IFormProps{
    data?: ICountry;
    onSubmit: (value: ICountry) => void;
}

export function FormComponent({ data, onSubmit }: IFormProps) {
    const country = useAppSelector(getCountryState);
    
    const { register, handleSubmit, setValue } = useForm();

    const onFormSubmit = handleSubmit((value) => {
        value._id = data?._id;
        onSubmit(value as ICountry);
    })

    useEffect(() => {
        if(data){
            setValue("name", data.name)
        }
    }, [data, setValue])

    return (
        <form onSubmit={onFormSubmit}>
            <Input {...register("name")} placeholder="Country name..." required /> <br />
            <div className="flex justify-end">
                { country.edit ? 
                    <Button className="flex gap-2" size="sm"><Loader2 className="animate-spin" />Loading...</Button> :
                    <Button className="flex gap-2" size="sm" type="submit">{data ? <><Edit />Edit</> : <><Save />Save</>}</Button>
                }
            </div>
        </form>
    )
}