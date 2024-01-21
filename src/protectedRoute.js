import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isUser, children }) => {
  if (!isUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
