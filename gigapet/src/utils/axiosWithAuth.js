import axios from 'axios';

export const axiosWithAuth = () => {
   

    return axios.create({
        baseURL: '',
        headers: {
            Authentication: localStorage.getItem('token')
        }
        
    })
}

export default axiosWithAuth;