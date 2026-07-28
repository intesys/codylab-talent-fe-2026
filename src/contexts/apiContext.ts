import { createContext } from "react";
import {
  Configuration,
  AuthControllerApi,
  CustomerControllerApi,
  ProjectControllerApi,
} from "../api";

const apiConfig = new Configuration({
  basePath: "http://localhost:8088/api/v1",
  middleware: [
    {
      pre: async (context) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          context.init.headers = {
            ...context.init.headers,
            Authorization: `Bearer ${accessToken}`,
          };
        }
      },
    },
  ],
});

export const authApi = new AuthControllerApi(apiConfig);
export const customerApi = new CustomerControllerApi(apiConfig);
export const projectApi = new ProjectControllerApi(apiConfig);

export const ApiContext = createContext({
  authApi,
  customerApi,
  projectApi,
});
