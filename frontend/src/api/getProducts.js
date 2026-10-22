import {API_URL} from "../config.js";

export const getProducts = async (limit, skip, sortBy, order) => {
    try {
        const response = await fetch(`${API_URL}?limit=${limit}&skip=${skip}${sortBy ? `&sortBy=${sortBy}&order=${order}` : ""}`, {
            method: "GET",
        })

        if(!response.ok) {
            throw new Error("Failed to fetch products.");
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}