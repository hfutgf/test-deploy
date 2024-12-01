import { useContext } from "react";
import { RouterContext, RouterContextType } from "./custom-react-router-dom";

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context as RouterContextType;
};
