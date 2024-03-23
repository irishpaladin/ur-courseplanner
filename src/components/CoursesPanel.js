import { color } from "framer-motion"
import {CourseList} from "../courses/CourseList"
export const CoursesPanel = () => {
    return(
        <div className="courses-panel panel" style={{fontSize: "20px", overflowY: "auto"}}>
            <CourseList/>
        </div>
    )
}