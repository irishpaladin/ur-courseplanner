
import { TabbedCourses } from "../courses/components/TabbedCourses"
import { SaveScheduleButton } from "./SaveScheduleButton"
import { CalendarPanel } from "../components/CalendarPanel";

export const CoursesPanel = () => {
    return (
        <div className="courses-container">
            <div className="courses-panel panel" style={{ fontSize: "20px", overflowY: "auto" }}>
                <div className="course-panel-content">
                    <TabbedCourses />
                    <SaveScheduleButton />
                </div>
            </div>
            <CalendarPanel/>
        </div>
    )
}