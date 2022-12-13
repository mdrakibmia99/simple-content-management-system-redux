import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";

function RequireAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-20 h-20 border-4 border-blue-400 border-solid rounded-full animate-spin"
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-20 h-20 border-4 border-blue-400 border-solid animate-spin bg-red-700 text-white rounded-xl"
        >
          {error.message}
        </div>
      </div>
    );
  }

  if (!user) {
    
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
