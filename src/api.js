import axios from "axios";

const BASE = "https://fakestoreapi.com";

const GetProds = async() => {
    try {
        const response = await axios.get(`${BASE}/products`);
        return response.data;
    } catch (err) {
        console.error("Error fetching products:", err);
        throw err;
    }
}

export default GetProds;