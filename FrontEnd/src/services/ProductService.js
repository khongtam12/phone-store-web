import apiClient from './apiClient';



export const filterProducts = async (filters, page = 0, size = 16) => {
    const { data } = await apiClient.post(
        `api/v1/products/filter?page=${page}&size=${size}`,
        filters);
    return data;
}