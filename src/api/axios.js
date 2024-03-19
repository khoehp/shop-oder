import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const instance = axios.create({
    baseURL: BASE_URL,

})

instance.interceptors.response.use(
    (response) =>  {
        if(response && response.data) {
            return response.data;
        }

        return response;
    }
)

export default instance;