import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { deleteCountry, getCountries, getCountryState, setLimit } from "@/redux/reducer/countryReducer"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import CSelectPagination from "@/customs/CSelectPagination";
import { ICountry } from "@/interfaces/ICountry";
import CPagination from "@/customs/CPagination";
import CButtonIcon from "@/customs/CButtonIcon";
import CDialogAlert from "@/customs/CDialogAlert";
import { useState } from "react";
import { EditComponent } from "../edit/Index";

export function TableComponent() {
    const dispatch = useAppDispatch();
    const country = useAppSelector(getCountryState);

    const [ countryDel, setCountryDel ] = useState<ICountry>();
    const [ dialogAlert, setDialogAlert ] = useState<boolean>(false);

    const [ countryEdit, setCountryEdit ] = useState<ICountry>();
    const [ dialogEdit, setDialogEdit ] = useState<boolean>(false);


    const handlePageChange = (page: number) => {
        dispatch(getCountries({ page: page, limit: country.limit, name: country.search }))
    }

    const handleLimitChange = (limit: number) => {
        dispatch(setLimit(limit))
    }

    const toggleDialogAlert = () => {
        setDialogAlert(!dialogAlert);
    }

    const handleDeleteCountry = (countryId: string | undefined) => {
        if(countryId) dispatch(deleteCountry(countryId));
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
                    {country.data.map((item: ICountry, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{item._id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <CButtonIcon type="edit" onClick={() => {
                                        toggleDialogEdit()
                                        setCountryEdit(item)
                                    }} />

                                    <EditComponent country={countryEdit} dialog={dialogEdit} toggleDialog={toggleDialogEdit} />

                                    <CButtonIcon type="del" onClick={() => {
                                        toggleDialogAlert()
                                        setCountryDel(item)
                                    }} />

                                    <CDialogAlert status={dialogAlert} onCancel={toggleDialogAlert} onSubmit={() => handleDeleteCountry(countryDel?._id)} header="Notice!!!" description={`Are you sure to delete "${countryDel?.name}"?`  } />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table> 
            <div className="w-full flex justify-between items-center">
                <CSelectPagination limit={country.limit ?? 5} quantities={["5", "10"]} onLimitChange={handleLimitChange} />
                <CPagination page={country.page ?? 1} total_pages={country.total_pages ?? 1} onPageChange={handlePageChange} />
            </div>
        </>
    )
}
