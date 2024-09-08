export interface IResponse<T> {
    message: string;
    is_success: boolean;
    data: T[] | T | string;
}

export interface IQueryCountry {
    page?: number;
    limit?: number;
    name?: string;
}

export interface IQueryGenre {
    page?: number;
    limit?: number;
    name?: string;
}

export interface IQueryCinema {
    page?: number;
    limit?: number;
    name?: string;
}