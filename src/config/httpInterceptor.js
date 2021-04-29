import axios from 'axios';
const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(request=>{
  console.log('saurabh chelc inter::::', request)
  const token = localStorage.getItem('token');
  request.headers['x-access-token'] =  token ? token : '';
  return request;  
}, error => {
    Promise.reject(error)
})

export default axiosApiInstance;
