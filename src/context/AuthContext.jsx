import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const [admin, setAdmin] = useState({
        id: 1,
        status: true,
        role: "Admin",
    });
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return <AuthContext.Provider value={{admin, setAdmin, isLoggedIn, setIsLoggedIn}}>{props.children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
