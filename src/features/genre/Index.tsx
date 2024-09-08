import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CButton from "@/customs/CButton";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getGenres, getGenreState, setSearch } from "@/redux/reducer/genreReducer";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { TableComponent } from "./components/TableComponent";
import { SkeletonTable } from "../layout/SkeletonTable";
import { CreateComponent } from "./create/Index";

export default function GenreComponent() {
    const dispatch = useAppDispatch();
    const genre = useAppSelector(getGenreState);

    const [ name, setName ] = useState<string>();
    const [ dialogCreate, setDialogCreate ] = useState<boolean>(false);

    useEffect(() => {
        if(genre.status === "completed" || genre.status === "rejected" || genre.status === "searching" || genre.status === "limited"){
            dispatch(getGenres({ page: genre.page || 1, limit: genre.limit || 5, name: genre.search || ""}))
        }
    }, [genre.limit, genre.page, genre.search, genre.status, dispatch])

    const handleSearch = () => {
        dispatch(setSearch(name as string));
    }

    const toggleDialog = () => {
        setDialogCreate(!dialogCreate)
    }

    return (
         <>
            <h1 className="text-3xl font-[700]">List of genres</h1>
            <div className="flex justify-between items-center">
                <div className="w-[400px] mt-4 mb-2 flex gap-5">
                    <Input name="search" placeholder="Genre name..." onChange={(e) => setName(e.target.value)} defaultValue={genre.search} className="h-[35px]" />
                    <Button className="h-[35px]" onClick={handleSearch}>Search</Button>
                </div>
                <CButton className="gap-2 h-[35px] bg-[#00EE00] hover:bg-[#00EE00] hover:opacity-75" onClick={toggleDialog} ><PlusCircle />CREATE</CButton>
                <CreateComponent dialog={dialogCreate} toggleDialog={toggleDialog} />
            </div>
            { genre.loading ? <SkeletonTable /> : <TableComponent /> }
        </>
    )
}