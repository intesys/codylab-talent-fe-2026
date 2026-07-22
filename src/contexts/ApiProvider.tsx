import { ApiContext, authApi, customerApi } from "./apiContext";

export function ApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApiContext.Provider value={{ authApi, customerApi }}>
      {children}
    </ApiContext.Provider>
  );
}
