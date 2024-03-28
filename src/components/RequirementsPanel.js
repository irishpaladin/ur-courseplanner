import RequirementCard from "./RequirementCard"
import { CoursesPanel } from "../components/CoursesPanel";
import { CoursesPanelZ } from "../components/CoursesPanelZ";
import { useState, useContext, useCallback } from "react";
import { UserContext } from "../context/UserContext";
import { RequirementsContext } from "../context/RequirementsContext";
import { FetchRequirementDataByUserId } from "../context-httprequest/FetchRequirementDataByUserId";
import {mockData} from "../courses/mockdata"
console.log(mockData.data)
export const RequirementsPanel = () => {
    const { userId, setUserId } = useContext(UserContext);
    setUserId(1);

    const [activeElementId, setActiveElement] = useState(-1);
    const [activeRequirement, setActiveRequirement] = useState(null);
    const { requirements, setRequirements, activeRequirementId, setActiveRequriementId } = useContext(RequirementsContext);
    const updateActiveElement = (id) => {
        console.log("you clicked!");
        setActiveElement(activeElementId !== id ? id : -1);
        setActiveRequriementId(activeElementId);
        const clickedRequirement = mockData.data.find((req) => req.requirement_id === id);
        setActiveRequirement(clickedRequirement);
        
    }
    const requirementsList = useCallback(() => {
        let r = mockData;
        console.log("hello");

        console.log(r);
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
                <div className="requirementsList">{requirementsList()}</div>
                {
                    //for testing
                    console.log(JSON.stringify({
                        
                        Ar: activeRequirementId,
                    }))
                }
                <div className="courseList">{activeRequirement && <CoursesPanel requirement={activeRequirement} />}</div>
                
            </div>
        </div>
    )
}


