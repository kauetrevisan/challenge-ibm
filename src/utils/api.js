import axios from "axios";

const api = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com",
  baseURL:
    "https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/fa4a4b80c8a5ed79bfcbd298307736f21bd73193ea03a8a561b00a714b073c2a/nTjMZF",
});

export default api;
