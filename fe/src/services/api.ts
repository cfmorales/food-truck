import {ApiResponse} from "../types/apiResponse";
import {PaginationOptions} from "../types/requestOptions";
import qs from 'query-string';


export const fetchFromAPI = async (endpoint: string, options: RequestInit = {}) => {
    const url = `${process.env.REACT_APP_BASE_URL}${endpoint}`;
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Error fetching ${url}: ${response.statusText}`);
    }

    return await response.json();
};

export const getData = async (options: PaginationOptions = {page: 1, perPage: 100}): Promise<ApiResponse> => {
    return await fetchFromAPI(`/getData?${qs.stringify(options)}`);
};

export const getByKey = async (key: string): Promise<ApiResponse> => {
    return await fetchFromAPI(`/getByKey?key=${key}`);
};

export const hasData = async (): Promise<ApiResponse> => {
    return await fetchFromAPI(`/hasData`);
};