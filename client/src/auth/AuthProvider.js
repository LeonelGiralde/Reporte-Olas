import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userCredentials) => {
        setUser({ id: 1, name: "Ale", email: 'ale@gmail.com', role: "admin" }); // Asegurar que el usuario tenga un rol
    };

    const logout = () => setUser(null);
    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role; // Compara el rol correctamente

    const updateUser = (data) =>{
        setUser({
            ...user,
            ...data
        })
    }
    const contextValue = {
        user,
        updateUser,
        isLogged,
        login,
        logout,
        hasRole,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

