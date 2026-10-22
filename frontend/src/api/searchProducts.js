import {API_URL} from "../config.js";

export const searchProducts = async (query, limit, skip, sortBy, order) => {
    try {
        const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}${sortBy ? `&sortBy=${sortBy}&order=${order}` : ""}`, {
            method: "GET",
        })

        if(!response.ok) {
            throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        return data;

    } catch(err) {
        console.log(err);
        throw err;
    }
}