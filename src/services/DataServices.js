import {http} from "./config"

export default {
  listar:() => {
    return http.get('/alunos');
  },

  buscar:(id) => {
    return http.get(`/tutorials/${id}`);
  },

  create:(data) => {
    return http.post("/tutorials", data);
  },

  update:(id, data) => {
    return http.put(`/tutorials/${id}`, data);
  }
  
  }