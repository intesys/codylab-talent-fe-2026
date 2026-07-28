import { ApiContext, authApi, customerApi, projectApi } from "./apiContext";

export function ApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApiContext.Provider value={{ authApi, customerApi, projectApi }}>
      {children}
    </ApiContext.Provider>
  );
}
