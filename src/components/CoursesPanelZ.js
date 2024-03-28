import { TabbedCourses } from "../courses/components/TabbedCourses"
import { SaveScheduleButton } from "./SaveScheduleButton"

export const CoursesPanelZ = ({ requirement }) => {
    return (
        <div className="courses-container">
            <div className="courses-panel panel" style={{ fontSize: "20px", overflowY: "auto" }}>
                <div className="course-panel-content ">
                    <h2>Requirement Details</h2>
                    <div>
                        <strong>Requirement Name:</strong> {requirement.requirement_name}
                    </div>
                    <div>
                        <strong>Requirement Status:</strong> {requirement.requirement_status}
                    </div>
                    <div>
                        <strong>Course Subject:</strong> {requirement.coursesubject_name}
                    </div>
                    <div>
                        <strong>Course Catalogs:</strong>{" "}
                        {requirement.coursecatalogs.map((catalog) => catalog.coursecatalog_name).join(", ")}
                    </div>
                    {/* You can add more divs to display additional information about the requirement */}
                </div>


            </div>
        </div>
        
    )
}