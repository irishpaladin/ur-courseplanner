import { CalendarPanel } from "../components/CalendarPanel";
import { CoursesPanel } from "../components/CoursesPanel";
import { RequirementsPanel } from "../components/RequirementsPanel";
import { RequirementsContextProvider } from "../context/RequirementsContext";

const Scheduler = () => {
    return (
        <RequirementsContextProvider>
            <div className="pages scheduler-page">
                <RequirementsPanel />
                <CoursesPanel />
                <CalendarPanel />
            </div>
        </RequirementsContextProvider>
    )
};

export default Scheduler;