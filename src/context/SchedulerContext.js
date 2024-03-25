import React, { createContext, useState, useEffect } from "react";
import { FetchRequirementDataByUserId } from "./FetchSchedulerData";


const SchedulerContext = createContext();

const SchedulerContextProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const getRequirementsByUserId = FetchRequirementDataByUserId({userId: userId});
    const initializeUserId = () => setUserId
    return
}