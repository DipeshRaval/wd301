import { Navigate } from "react-router-dom";

export function ProtectedRoute({ element }: { element: JSX.Element }) {
  const isAuth = !!localStorage.getItem("authToken");
  if (isAuth) {
    return element;
  } else {
    return <Navigate to="/signin" />;
  }
}
