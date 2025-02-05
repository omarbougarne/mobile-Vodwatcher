import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_APP_URL,
});
axiosInstance.interceptors.request.use(
    async function (config) {
        const token = await AsyncStorage.getItem('token');


        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.headers['Content-Type'] = 'multipart/form-data';
        }

        return config;
    },
    function (error) {

        return Promise.reject(error);
    }
);

export default axiosInstance;