import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CButton from "@/customs/CButton";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getCinemas, getCinemaState, setSearch } from "@/redux/reducer/cinemaReducer";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { SkeletonTable } from "../layout/SkeletonTable";
import { TableComponent } from "./components/TableComponent";
import { CreateComponent } from "./create/Index";

export default function CinemaComponent() {

    const dispatch = useAppDispatch();
    const cinema = useAppSelector(getCinemaState);
    
    const [ name, setName ] = useState<string>("");
    const [ dialogCreate, setDialogCreate ] = useState<boolean>(false);


    useEffect(() => {
        if(cinema.status === "completed" || cinema.status === "rejected" || cinema.status === "searching" || cinema.status === "limited"){
            dispatch(getCinemas({ page: cinema.page || 1, limit: cinema.limit || 5, name: cinema.search || ""}))
        }
    }, [cinema.limit, cinema.page, cinema.search, cinema.status, dispatch])

    const handleSearch = () => {
        dispatch(setSearch(name));
    }

    const toggleDialog = () => {
        setDialogCreate(!dialogCreate)
    }

    return (
        <>
            <h1 className="text-3xl font-[700]">List of cinemas</h1>
            <div className="flex justify-between items-center">
                <div className="w-[400px] mt-4 mb-2 flex gap-5">
                    <Input name="search" placeholder="Cinema name..." onChange={(e) => setName(e.target.value)} className="h-[35px]" />
                    <Button className="h-[35px]" onClick={handleSearch}>Search</Button>
                </div>
                <CButton className="gap-2 h-[35px] bg-[#00EE00] hover:bg-[#00EE00] hover:opacity-75" onClick={toggleDialog}><PlusCircle />CREATE</CButton>
                <CreateComponent dialog={dialogCreate} toggleDialog={toggleDialog} />
            </div>
            
            { cinema.loading ? <SkeletonTable /> : <TableComponent /> }
        </>
    )
}