import { Navigate } from "react-router-dom";
import { getUser } from "../utils/Common";

export default function PrivateRoute({ children }) {
  const user = getUser();
  return user ? children : <Navigate to='/' />;
}
