import { ICountry } from "./ICountry";
import { IGenre } from "./IGenre";

export interface IMovie {
    _id?: string;
    actors: string;
    age_limit?: number;
    description: string;
    director: string;
    duration: number;
    name: string;
    poster: string;
    release: string;
    slug: string;
    trailer?: string;
    country: ICountry;
    genres: IGenre[];
}