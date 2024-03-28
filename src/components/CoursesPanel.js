
import { TabbedCourses } from "../courses/components/TabbedCourses"
import { SaveScheduleButton } from "./SaveScheduleButton"

export const CoursesPanel = ({requirement}) => {
    return (
        <div className="courses-container">
            <div className="courses-panel panel" style={{ fontSize: "20px", overflowY: "auto" }}>
                <div className="course-panel-content ">
                {
                    //for testing
                
                    console.log(requirement)
                }
                    <TabbedCourses requirement={requirement}/>
                    <SaveScheduleButton />
                </div>
            </div>
        </div>
    )
}