import axiosClient from "@/configs/axiosClient";
import { IQueryGenre } from "@/interfaces/IAction";
import { IGenre } from "@/interfaces/IGenre";


const genreApi = {
    getGenres(query: IQueryGenre) {
        return axiosClient.get(`/genre?page=${query.page || 1}&limit=${query.limit || 5}&name=${query.name || ""}`)
    },
    createGenre(body: IGenre) {
        return axiosClient.post("/genre", body)
    },
    deleteGenre(genre_id: string) {
        return axiosClient.delete(`/genre/${genre_id}`)
    },
    editGenre(genre: IGenre) {
        return axiosClient.put(`/genre/${genre._id}`, genre)
    }
}

export default genreApi;