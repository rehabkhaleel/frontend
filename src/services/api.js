import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your backend URL
});

export const fetchData = async () => {
    try {
        const response = await API.get('/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
