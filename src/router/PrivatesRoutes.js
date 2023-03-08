import { Navigate } from "react-router-dom";
import { ChatPage } from "../pages/ChatPage";
 
export const PrivatesRoutes = ({ isAuthenticated }) => {
  return isAuthenticated ? <ChatPage /> : <Navigate to="/auth/login" />;
};