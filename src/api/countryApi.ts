import axiosClient from "@/configs/axiosClient"
import { IQueryCountry } from "@/interfaces/IAction";
import { ICountry } from "@/interfaces/ICountry";

const countryApi = {
    getCountries(query: IQueryCountry) {
        return axiosClient.get(`/country?page=${query.page || 1}&limit=${query.limit || 5}&name=${query.name || ""}`)
    },
    createCountry(body: ICountry) {
        return axiosClient.post("/country", body)
    },
    deleteCountry(country_id: string) {
        return axiosClient.delete(`/country/${country_id}`)
    },
    editCountry(country: ICountry) {
        return axiosClient.put(`/country/${country._id}`, country)
    }
}

export default countryApi;