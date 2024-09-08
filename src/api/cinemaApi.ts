import axiosClient from "@/configs/axiosClient"
import { IQueryCinema } from "@/interfaces/IAction";
import { ICinema } from "@/interfaces/ICinema";

const cinemaApi = {
    getCinemas(query: IQueryCinema) {
        return axiosClient.get(`/cinema?page=${query.page || 1}&limit=${query.limit || 5}&name=${query.name || ""}`)
    },
    createCinema(body: ICinema) {
        return axiosClient.post("/cinema", body)
    },
    deleteCinema(cinema_id: string) {
        return axiosClient.delete(`/cinema/${cinema_id}`)
    },
    editCinema(cinema: ICinema) {
        return axiosClient.put(`/cinema/${cinema._id}`, cinema)
    }
}

export default cinemaApi;