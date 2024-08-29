import request from "../services/request";
import { API_BASE_URL } from "../services/const";

export const getProducts = () => request(`${API_BASE_URL}/products`, {
    method: "GET",
});