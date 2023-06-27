import {createContext, useState} from "react";
import {redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {toast} from "react-hot-toast";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [admin, setAdmin] = useState(() => {
        if (localStorage.getItem("adACto")) {
            let token = localStorage.getItem("adACto");
            return jwt_decode(token);
        }
        return null;
    });

    const login = async (payload) => {
        const apiResponse = await fetch(`/admin-api/account/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const resData = await apiResponse.json();
        localStorage.setItem("adACto", resData.data.token);
        toast.success(resData.message);
        setAdmin(jwt_decode(resData.data.token));
        return redirect("/admin");
    };

    const logout = async () => {
        localStorage.removeItem("adACto");
        setAdmin(null);
        toast.success("Successfully logged out!");
        return redirect("/admin/login");
    };

    return <AuthContext.Provider value={{admin, login, logout}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
