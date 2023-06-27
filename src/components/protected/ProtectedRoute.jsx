import {useContext} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const ProtectedRoute = ({children, accessBy}) => {
    const {admin} = useContext(AuthContext);

    if (accessBy == "non-admin") {
        if (!admin) {
            return children;
        } else {
            return <Navigate to={"/admin"}></Navigate>;
        }
    } else if (accessBy === "only-admin") {
        if (admin) {
            return children;
        } else {
            return <Navigate to={"/admin/login"}></Navigate>;
        }
    }

    return <Navigate to="/admin"></Navigate>;
};

export default ProtectedRoute;
