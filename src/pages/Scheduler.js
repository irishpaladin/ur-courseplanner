import { CalendarPanel } from "../components/CalendarPanel";
import { CoursesPanel } from "../components/CoursesPanel";
import { RequirementsPanel } from "../components/RequirementsPanel";
import { CourseContextProvider } from "../context/CourseContext";
import { RequirementsContextProvider } from "../context/RequirementsContext";

const Scheduler = () => {
    return (
        <RequirementsContextProvider>
            <CourseContextProvider>
                <div className="pages scheduler-page">
                    <RequirementsPanel />
                    <CoursesPanel />
                    <CalendarPanel />
                </div>
            </CourseContextProvider>
        </RequirementsContextProvider>
    )
};

export default Scheduler;