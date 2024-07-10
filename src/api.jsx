import axios from "axios";

const api = axios.create({
  baseURL: "http://minha_api/app_biovida/",
});

export const listExames = async (pedido, cpf) => {
  const response = await api.get(`solicitante/${pedido}/${cpf}`);
  return response.data;
};
