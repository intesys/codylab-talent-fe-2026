import { createContext } from "react";
import { Configuration, AuthControllerApi, CustomerControllerApi, ProjectControllerApi } from "../api";

const apiConfig = new Configuration({
  basePath: "http://localhost:8088",
});

export const authApi = new AuthControllerApi(apiConfig);
export const customerApi = new CustomerControllerApi(apiConfig);
export const projectApi = new ProjectControllerApi(apiConfig);
export const ApiContext = createContext({
  authApi,
  customerApi,
  projectApi,
});






