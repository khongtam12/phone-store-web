import apiClient from "./apiClient";
export const getBrands = async () => {
    const { data } = await apiClient.get("api/v1/brands");
    return data;
};