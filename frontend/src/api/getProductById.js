import {API_URL} from "../config.js";

export const getProductById = async (id) => {
    try {
        const response = await fetch((API_URL + "/" + id), {
            method: "GET",
        })

        if(!response.ok) {
            throw new Error("Failed to fetch products.");
        }

        return await response.json();

    } catch (err) {
        console.log(err);
        throw err;
    }
}