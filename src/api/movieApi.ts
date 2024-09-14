import axiosClient from "@/configs/axiosClient"

const movieApi = {
    getMovies() {
        return axiosClient.get("/movie")
    },
}

export default movieApi;