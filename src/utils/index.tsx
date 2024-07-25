import axios from "axios";

// Add a response interceptor
axios.interceptors.response.use((response)=> {
   return response;
  }, (error)=> {
    return Promise.reject(error);
  });
 