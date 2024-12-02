import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Loading from "./pages/loading";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import MainLayout from "./layouts/main-layout";
import { ProtectedRoute } from "./middleware/protected-route";
import AuthLayout from "./layouts/auth-layout";

type IRoute = RouteObject & {
  children?: IRoute[];
  id?: string;
  title?: string;
  requiresAuth?: boolean;
  permissions?: string[];
  loader?: () => Promise<unknown>;
  meta?: { [key: string]: unknown };
  onEnter?: () => void;
  onLeave?: () => void;
  fallback?: ReactNode;
  redirectTo?: string;
};

const routes: IRoute[] = [
  {
    path: "/",
    element: <MainLayout />,
    title: "Home",
    children: [
      {
        path: "/about",
        element: <About />,
        title: "About Us",
        requiresAuth: false,
        permissions: ["admin", "user"],
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute element={<Dashboard />} requiresAuth={true} />,
        title: "Dashboard",
        requiresAuth: true,
        permissions: ["admin"],
        loader: () => fetch("/dashboard-data"),
        fallback: <Loading />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    title: "Auth",
    children: [
      {
        path: "/auth/login",
        element: <ProtectedRoute element={<Login />} requiresAuth={true} />,
        title: "Auth Login",
        requiresAuth: false,
        redirectTo: "/dashboard",
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    title: "Page Not Found",
  },
];

export { routes };
