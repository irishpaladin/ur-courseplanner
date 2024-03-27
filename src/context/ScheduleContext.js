import React, { createContext, useState} from "react";
import { FetchScheduleData } from "../context-httprequest/FetchScheduleData";
import { SaveSchedule } from "../context-httprequest/SaveSchedule";

const ScheduleContext = createContext();

const ScheduleContextProvider = ({ children }) => {
    const [schedules, setSchedules] = useState(FetchScheduleData(userdata.userId));// initial schedules from database
    const saveNewSchedule = () => {
        SaveSchedule(schedules);
        setSchedules(FetchScheduleData(userdata.userId));
    }
    const addSchedule = (props) => {
        if (props!=null) schedules.push(props);
    } 
    const removeSchedule =  (props) => {
        if (props!=null) schedules.filter(s => s.requirementschedules_id != props.requirementschedules_id);
    }
    return (
        <ScheduleContext.Provider value={{schedules, saveNewSchedule, addSchedule, removeSchedule}}>
            {children}
        </ScheduleContext.Provider>
    )
}

export { ScheduleContext, ScheduleContextProvider};
