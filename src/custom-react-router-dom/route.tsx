import { ReactNode } from "react";
import { useRouter } from "./use-router";

interface RouteProps {
  path: string;
  children: ReactNode;
}

export const Route: React.FC<RouteProps> = ({ path, children }) => {
  const { currentPath } = useRouter();

  return currentPath === path ? <>{children}</> : null;
};
    