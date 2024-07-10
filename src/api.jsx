import axios from "axios";

const api = axios.create({
  baseURL: "http://138.94.25.34:9097/app_biovida/",
});

export const listExames = async (pedido, cpf) => {
  const response = await api.get(`solicitante/${pedido}/${cpf}`);
  return response.data;
};
