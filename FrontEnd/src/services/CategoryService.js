import apiClient from "./apiClient";
export const getCategories = async () => {
    const { data } = await apiClient.get("api/v1/categories");
    return data;
};