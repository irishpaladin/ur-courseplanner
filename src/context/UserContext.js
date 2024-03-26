import React, { createContext, useState, useCallback } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(1);
    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };
