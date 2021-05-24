import axios from "axios";

export const http = axios.create({

    baseURL: "http://localhost:3333/api/"
    // 192.168.6.250
  
});
