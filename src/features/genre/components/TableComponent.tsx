import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import CSelectPagination from "@/customs/CSelectPagination";
import CPagination from "@/customs/CPagination";
import CButtonIcon from "@/customs/CButtonIcon";
import { deleteGenre, getGenres, getGenreState, setLimit } from "@/redux/reducer/genreReducer";
import { IGenre } from "@/interfaces/IGenre";
import { useState } from "react";
import CDialogAlert from "@/customs/CDialogAlert";
import { EditComponent } from "../edit/Index";

export function TableComponent() {
    const dispatch = useAppDispatch();
    const genre = useAppSelector(getGenreState);

    const [ genreDel, setGenreDel ] = useState<IGenre>();
    const [ dialogAlert, setDialogAlert ] = useState<boolean>(false);

    const [ genreEdit, setGenreEdit ] = useState<IGenre>();
    const [ dialogEdit, setDialogEdit ] = useState<boolean>(false);

    const handlePageChange = (page: number) => {
        dispatch(getGenres({ page: page, limit: genre.limit, name: genre.search }))
    }

    const handleLimitChange = (limit: number) => {
        dispatch(setLimit(limit))
    }

    const toggleDialogAlert = () => {
        setDialogAlert(!dialogAlert);
    }

    const handleDeleteCountry = (genreId: string | undefined) => {
        if (genreId) dispatch(deleteGenre(genreId))
        setDialogAlert(false);
    }

    const toggleDialogEdit = () => {
        setDialogEdit(!dialogEdit);
    }

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-[700] lg:w-[400px]">ID</TableHead>
                        <TableHead className="font-[700]">Name</TableHead>
                        <TableHead className="font-[700]">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {genre.data.map((item: IGenre, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{item._id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <CButtonIcon type="edit" onClick={() => {
                                        setGenreEdit(item);
                                        toggleDialogEdit();
                                    }} />

                                    <EditComponent genre={genreEdit} dialog={dialogEdit} toggleDialog={toggleDialogEdit}  />

                                    <CButtonIcon type="del" onClick={() => {
                                        setGenreDel(item);
                                        toggleDialogAlert();
                                    }} />

                                    <CDialogAlert status={dialogAlert} onCancel={toggleDialogAlert} onSubmit={() => handleDeleteCountry(genreDel?._id)} header="Notice!!!" description={`Are you sure to delete "${genreDel?.name}"?`} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="w-full flex justify-between items-center">
                <CSelectPagination limit={genre.limit ?? 5} quantities={["5", "10"]} onLimitChange={handleLimitChange} />
                <CPagination page={genre.page ?? 1} total_pages={genre.total_pages ?? 1} onPageChange={handlePageChange} />
            </div>
        </>
    )
}
