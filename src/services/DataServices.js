import {http} from "./config"
import {ht} from "./config"

export default {

  buscar:() => {
    return http.get('/usuarios/?nr_sequencia=1&nr_atendimento=3345');
    // /usuarios/?nr_sequencia=1&nr_atendimento=3345
  },

  // buscar:(nr_sequencia) => {
  //   return http.get(`/usuarios/?${nr_sequencia}`);
  // },

  listar:() => {
    return ht.get('/posts');
  },

  create:(data) => {
    return http.post("/route", data);
  },

  update:(id, data) => {
    return http.put(`/route/${id}`, data);
  }
  
  }

  // http://192.168.6.250:3333/api/termos/