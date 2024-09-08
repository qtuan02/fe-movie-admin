import { useEffect, useState } from "react";
import { TableComponent } from "./components/TableComponent";
import { getCountries, getCountryState, setSearch } from "@/redux/reducer/countryReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { SkeletonTable } from "../layout/SkeletonTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CButton from "@/customs/CButton";
import { PlusCircle } from "lucide-react";
import { CreateComponent } from "./create/Index";

export default function CountryComponent() {
    const dispatch = useAppDispatch();
    const country = useAppSelector(getCountryState);

    const [ name, setName ] = useState<string>("");
    const [ dialogCreate, setDialogCreate ] = useState<boolean>(false);

    useEffect(() => {
        if(country.status === "completed" || country.status === "rejected" || country.status === "searching" || country.status === "limited"){
            dispatch(getCountries({ page: country.page || 1, limit: country.limit || 5, name: country.search || ""}))
        }
    }, [country.limit, country.page, country.search, country.status, dispatch])

    const handleSearch = () => {
        dispatch(setSearch(name))
    }

    const toggleDialog = () => {
        setDialogCreate(!dialogCreate)
    }

    return (
        <>
            <h1 className="text-3xl font-[700]">List of countries</h1>
            <div className="flex justify-between items-center">
                <div className="w-[400px] mt-4 mb-2 flex gap-5">
                    <Input name="search" placeholder="Country name..." onChange={(e) => setName(e.target.value)} defaultValue={country.search} className="h-[35px]" />
                    <Button className="h-[35px]" onClick={handleSearch}>Search</Button>
                </div>
                <CButton className="gap-2 h-[35px] bg-[#00EE00] hover:bg-[#00EE00] hover:opacity-75" onClick={toggleDialog}><PlusCircle />CREATE</CButton>
                <CreateComponent dialog={dialogCreate} toggleDialog={toggleDialog} />
            </div>
            { country.loading ? <SkeletonTable /> : <TableComponent /> }
        </>
    )
}