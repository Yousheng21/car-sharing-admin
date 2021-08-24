import axios from "axios";
import { Base64 } from "js-base64";

export const domain = "https://api-factory.simbirsoft1.com";
export const APPLICATION_ID = "5e25c641099b810b946c5d5b";
export const AUTHORIZATION_API = "52efbe08228671240494f537f2486bc109a637b4";
export const SECRET_ID = "4cbcea96de";

export const instance = axios.create({
  baseURL: domain,
  headers: {
    "X-Api-Factory-Application-Id": APPLICATION_ID,
    Authorization: `Bearer ${AUTHORIZATION_API}`,
  },
});

export const instanceAuth = axios.create({
  baseURL: domain,
  method: "post",
  headers: {
    "X-Api-Factory-Application-Id": APPLICATION_ID,
    Authorization: `Basic ${Base64.encode(`${SECRET_ID}:${SECRET_ID}`)}`,
  },
});

export default instance;
