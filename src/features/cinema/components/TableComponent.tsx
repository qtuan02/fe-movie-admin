import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CButtonIcon from "@/customs/CButtonIcon";
import CDialogAlert from "@/customs/CDialogAlert";
import CPagination from "@/customs/CPagination";
import CSelectPagination from "@/customs/CSelectPagination";
import { ICinema } from "@/interfaces/ICinema";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { deleteCinema, getCinemas, getCinemaState, setLimit } from "@/redux/reducer/cinemaReducer";
import { useState } from "react";
import { EditComponent } from "../edit/Index";


export function TableComponent() {
    const dispatch = useAppDispatch();
    const cinema = useAppSelector(getCinemaState);

    const [ cinemaDel, setCinemaDel ] = useState<ICinema>();
    const [ dialogAlert, setDialogAlert ] = useState<boolean>(false);

    const [ cinemaEdit, setCinemaEdit ] = useState<ICinema>();
    const [ dialogEdit, setDialogEdit ] = useState<boolean>(false);

    const handlePageChange = (page: number) => {
        dispatch(getCinemas({ page: page, limit: cinema.limit, name: cinema.search }))
    }

    const handleLimitChange = (limit: number) => {
        dispatch(setLimit(limit))
    }

    const toggleDialogAlert = () => {
        setDialogAlert(!dialogAlert);
    }

    const handleDeleteCinema = (cinemaId: string | undefined) => {
        if(cinemaId) dispatch(deleteCinema(cinemaId));
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
                        <TableHead className="font-[700]">ID</TableHead>
                        <TableHead className="font-[700]">Name</TableHead>
                        <TableHead className="font-[700]">Location</TableHead>
                        <TableHead className="font-[700]">Phone</TableHead>
                        <TableHead className="font-[700]">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cinema.data.map((item: ICinema, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{item._id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.location}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <CButtonIcon type="edit" onClick={() => {
                                        toggleDialogEdit()
                                        setCinemaEdit(item)
                                    }} />

                                    <EditComponent cinema={cinemaEdit} dialog={dialogEdit} toggleDialog={toggleDialogEdit} />

                                    <CButtonIcon type="del" onClick={() => {
                                        setCinemaDel(item);
                                        toggleDialogAlert();
                                    }} />

                                    <CDialogAlert status={dialogAlert} onCancel={toggleDialogAlert} onSubmit={() => handleDeleteCinema(cinemaDel?._id)} header="Notice!!!" description={`Are you sure to delete "${cinemaDel?.name}"?`  } />

                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table> 
            <div className="w-full flex justify-between items-center">
                <CSelectPagination limit={cinema.limit ?? 5} quantities={["5", "10"]} onLimitChange={handleLimitChange} />
                <CPagination page={cinema.page ?? 1} total_pages={cinema.total_pages ?? 1} onPageChange={handlePageChange} />
            </div>
        </>
    );
}