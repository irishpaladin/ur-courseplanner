import { CalendarPanel } from "../components/CalendarPanel";
import { CoursesPanel } from "../components/CoursesPanel";
import { RequirementsPanel } from "../components/RequirementsPanel";

const Scheduler = () => {
    return  (
        <div className="pages scheduler-page">
            <RequirementsPanel/>
            <CoursesPanel/>
            <CalendarPanel/>
        </div>
        )
  };
  
export default Scheduler;