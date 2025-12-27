import { Navigate } from "react-router-dom";
import useStore from "../store";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading, isAdmin } = useStore();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
