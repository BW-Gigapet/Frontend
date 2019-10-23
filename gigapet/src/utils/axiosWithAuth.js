import axios from 'axios';

export const axiosWithAuth = () => {
   
    return axios.create({
        baseURL: 'https://bw-gigapet-ft.herokuapp.com',
        headers: {
            Authorization: localStorage.getItem('token')
        }
        
    })
}

export default axiosWithAuth;