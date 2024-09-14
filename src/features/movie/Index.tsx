import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CButton from "@/customs/CButton";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { TableComponent } from "./components/TableComponent";

export default function MovieComponent() {
    const [ name, setName ] = useState<string>("");

    const handleSearch = () => {
        console.log(name);
    }

    return (
        <>
            <h1 className="text-3xl font-[700]">List of movies</h1>
            <div className="flex justify-between items-center">
                <div className="w-[400px] mt-4 mb-2 flex gap-5">
                    <Input name="search" placeholder="Movie name..." onChange={(e) => setName(e.target.value)} className="h-[35px]" />
                    <Button className="h-[35px]" onClick={handleSearch}>Search</Button>
                </div>
                <CButton className="gap-2 h-[35px] bg-[#00EE00] hover:bg-[#00EE00] hover:opacity-75"><PlusCircle />CREATE</CButton>
            </div>
            <TableComponent />
        </>
    )
}