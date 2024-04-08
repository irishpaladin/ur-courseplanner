
import { TabbedCourses } from "../courses/components/TabbedCourses"
import { SaveScheduleButton } from "./SaveScheduleButton"
import { CalendarPanel } from "../components/CalendarPanel";
import { useState, useEffect } from "react";

export const CoursesPanel = (props) => {
    const [activeElementId, setActiveElementId] = useState(null);
    console.log("I am in CoursesPanel")
    console.log(props.requirementDetails);
    console.log(props.activeElementId);
    const courses = (props.requirementDetails==null&&props.activeElementId>0)? null:props.requirementDetails[props.activeElementId];
    useEffect(() => {
        setActiveElementId(props.activeElementId);
    })
    return (
        <div className="courses-container">
            <div className="courses-panel panel" style={{ fontSize: "20px", overflowY: "auto" }}>
                <div className="course-panel-content">
                    <TabbedCourses courses={courses} activeElementId={activeElementId}/>
                    <SaveScheduleButton />
                </div>
            </div>
            <CalendarPanel/>
        </div>
    )
}