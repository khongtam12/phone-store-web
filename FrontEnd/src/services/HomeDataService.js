import apiClient from "./apiClient";

export const getHomeData = async () => {
    const { data } = await apiClient.get(`/api/v1/home`)
    return data;
}