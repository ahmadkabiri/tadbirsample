import axios from "axios";
import endpoints from "./endpoints";

const baseURL = "http://vti.tadbirkish.com/api/";

const api = axios.create({ baseURL });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["x-api-key"] = "676bdb1ce2d84276b8874a41f143c739";
    config.headers["api-version"] = "1";
    return config;
  },
  (error) => Promise.reject(error)
);



export default async function (apiGroup,apiSubGroup,query='',data=null){
    try{
        const response = await api({
            method : endpoints[apiGroup]['method'],
            url : endpoints[apiGroup][apiSubGroup]['endpoint']+query ,
            data : data
        })
        return response
    } catch (error) {
        console.error(error)
        throw error
    }
}
