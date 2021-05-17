import axios from "axios";

import ax from "axios";

export const http = axios.create({
//   baseURL: "http://localhost:8000/",
   

    baseURL: "http://192.168.6.250:3333/api/"
  
});

export const ht = ax.create({
    //   baseURL: "http://localhost:8000/",
        baseURL: "https://jsonplaceholder.typicode.com/",
    
      
    });
    