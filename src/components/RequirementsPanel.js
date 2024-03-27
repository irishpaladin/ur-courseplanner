import RequirementCard from "./RequirementCard"
import { CoursesPanel } from "../components/CoursesPanel";
import { useState, useContext, useCallback } from "react";
import { UserContext } from "../context/UserContext";
import { RequirementsContext } from "../context/RequirementsContext";
import { FetchRequirementDataByUserId } from "../context-httprequest/FetchRequirementDataByUserId";

export const RequirementsPanel = () => {
    const { userId, setUserId } = useContext(UserContext);
    setUserId(1);

    const [activeElementId, setActiveElement] = useState(-1);
    const {  requirements, setRequirements, activeRequirementId, setActiveRequriementId } = useContext(RequirementsContext);
    const updateActiveElement = (id) => {
        console.log("you clicked!"); 
        setActiveElement(activeElementId !== id ? id : -1);
        setActiveRequriementId(activeElementId);
    }
    const requirementsList = useCallback(() => {
        let r = FetchRequirementDataByUserId(userId);
        if (r != null) {
            setRequirements(r.data);
            return r?.data?.map(function (requirement) {
                if (activeElementId === -1) updateActiveElement(requirement.requirement_id);
                return <div
                    key={requirement.requirement_id}
                    onClick={() => updateActiveElement(requirement.requirement_id)}>
                    <RequirementCard
                        id={requirement.requirement_id}
                        title={requirement.requirement_name}
                        course={"CS 330 - Lecture 001 S/24"}
                        status={requirement.requirement_status}
                        active={requirement.requirement_id === activeElementId}
                    />
                </div>
            })
        }
        else {
            console.log('Null at RequirementsContextProvider fetchRequirementsData')
            return (<p>No Requirements List Found on your Account</p>)
        }
    })

    return (
        <div className="requirements-container">
            <div className="requirements-panel panel">
                {requirementsList()}
                {
                    //for testing
                    console.log(JSON.stringify({
                        u: {userId},
                        r: {requirements}, 
                        Ar: activeRequirementId,
                    }))
                }
            </div>
        </div>
    )
}


