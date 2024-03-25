import RequirementCard from "./RequirementCard"
import { CoursesPanel } from "../components/CoursesPanel";
import {FetchRequirementDataByUserId} from "../context/FetchSchedulerData";
import { useState } from "react";

export const RequirementsPanel = () => {
    const [activeElementId, setActiveElement] = useState(-1);
    const [courseData, setCourseData] = useState(null);
    const updateActiveElement = (id) => {
        console.log("you clicked!");
        setActiveElement(activeElementId !== id ? id : -1);
    }

    let getList = FetchRequirementDataByUserId({ userId: 1 });

    let requirementsList = getList?.data?.map(function (requirement) {
        if (activeElementId === -1) updateActiveElement(requirement.requirement_id);
        return <div
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

    return (
        <div className="requirements-container">
            <div className="requirements-panel panel">
                {requirementsList}
            </div>
            <CoursesPanel />
        </div>
    )
}


