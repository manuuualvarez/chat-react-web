import { Navigate } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
 
export const PublicsRoutes = ({ isAuthenticated }) => {
  return !isAuthenticated ? <AuthRouter /> : <Navigate to="/" />;
};
