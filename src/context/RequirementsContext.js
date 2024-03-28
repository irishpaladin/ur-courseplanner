import React, { createContext, useCallback, useState} from "react";

const RequirementsContext = createContext();

const RequirementsContextProvider = ({ children }) => {
    const [requirements, setRequirements] = useState([]);
    const [activeRequirementId, setActiveRequriementId] = useState(-1);
    const [activeSchedularId, setActiveSchedularId] = useState(-1);

    return (
        <RequirementsContext.Provider value={{ requirements, setRequirements, activeRequirementId, setActiveRequriementId,activeSchedularId, setActiveSchedularId}}>
            {children}
        </RequirementsContext.Provider>
    )
}

export { RequirementsContext, RequirementsContextProvider};
