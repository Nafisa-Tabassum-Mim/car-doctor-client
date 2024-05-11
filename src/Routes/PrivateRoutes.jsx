import { useContext } from "react";
import {  Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    // if (!user) {
    //     // If user is not logged in, redirect to login page
    //     return <Navigate to="/login" />;
    // }
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
    else if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;