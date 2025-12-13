import abc from "axios";
import {apiBaseURL} from "./baseURL";

export const api = abc.create({
    baseURL: apiBaseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
    }
})