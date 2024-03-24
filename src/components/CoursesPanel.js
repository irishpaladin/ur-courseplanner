
import { TabbedCourses } from "../courses/components/TabbedCourses"
import { SaveScheduleButton } from "./SaveScheduleButton"

export const CoursesPanel = () => {
    return (
        <div className="courses-panel panel" style={{ fontSize: "20px", overflowY: "auto" }}>
            <div className="course-panel-content">
                <TabbedCourses />
                <SaveScheduleButton />
            </div>
        </div>
    )
}