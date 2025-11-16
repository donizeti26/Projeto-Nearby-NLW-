import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.152:3333", //endereço da api (ip do pc)
  timeout: 700, //tempo de espera
});
