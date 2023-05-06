import { ComponentType } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
}: {
  component: ComponentType<any>;
}) => {
  const token = localStorage.getItem("token");

  return !token ? <Navigate to={"/login"} /> : <Component />;
};
