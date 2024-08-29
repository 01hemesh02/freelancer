import request from "../services/request";
import { API_BASE_URL } from "../services/const";

export const getParentCategories = () => request(`${API_BASE_URL}/parentCategories`, {
  method: "GET",
});

export const getCategoryHierarchy = (id) => request(`${API_BASE_URL}/getCategoryHierarchy/${id}`, {
  method: "GET",
});

export const getCategoriesByIDs = ({ params }) => request(`${API_BASE_URL}/getCategoriesByIDs`, {
  method: "GET", params
});

export const getCategoryTitle = (slug_url) => request(`${API_BASE_URL}/getCategoryTitle/${slug_url}`, {
  method: "GET",
});

export const getMetaByUrl = (data) => request(`${API_BASE_URL}/metaTagBySlugUrl`, {
  method: "POST", data
});
