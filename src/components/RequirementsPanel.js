import RequirementCard from "./RequirementCard"
import { CoursesPanel } from "../components/CoursesPanel";
import { useState, useContext, useCallback } from "react";
import { RequirementsContext } from "../context/RequirementsContext";
import { FetchAllCourseData } from "../context-httprequest/FetchAllCourseData";
export const RequirementsPanel = () => {
    const AllCourses = FetchAllCourseData(1);

    const [activeElementId, setActiveElement] = useState(-1);
    const [activeRequirement, setActiveRequirement] = useState(null);
    const { requirements, setRequirements, activeRequirementId, setActiveRequriementId } = useContext(RequirementsContext);
    const updateActiveElement = (id) => {
        setActiveElement(activeElementId !== id ? id : -1);
        setActiveRequriementId(activeElementId);
        const clickedRequirement = AllCourses?.data?.find((req) => req.requirement_id === id);
        setActiveRequirement(clickedRequirement);
    }
    const requirementsList = useCallback(() => {
        if (AllCourses != null) {
            setRequirements(AllCourses);
            return AllCourses?.data?.map(function (requirement) {
                if (activeElementId === -1) updateActiveElement(requirement.requirement_id);
                return <div
                    key={requirement.requirement_id}
                    onClick={() => updateActiveElement(requirement.requirement_id)}>
                    <RequirementCard
                        key = {requirement.requirement_id}
                        id={requirement.requirement_id}
                        title={requirement.requirement_name}
                        active={requirement.requirement_id === activeElementId}
                    />
                </div>
            })
        }
        else {
            return (<p>No Requirements List Found on your Account</p>)
        }
    })

    return (
        <div className="requirements-container">
            <div className="requirements-panel panel">
                <div className="requirementsList">{requirementsList()}</div>
                <div className="courseList">{activeRequirement && <CoursesPanel requirement={activeRequirement} />}</div>
                
            </div>
        </div>
    )
}


