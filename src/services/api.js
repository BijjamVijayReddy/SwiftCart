import axios from "axios";

const apiClinet = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchApi = async (method, endPoint, data = null, config = {}) => {
    try {
        const response = await apiClinet({
            method,
            url: endPoint,
            data,
            ...config
        })
        return response.data
    } catch (error) {
        throw error
    }
}
