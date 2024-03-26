import { RequirementsPanel } from "../components/RequirementsPanel";
import { RequirementsContextProvider } from "../context/RequirementsContext";

const Scheduler = () => {
    return  (
        <RequirementsContextProvider>
        <div className="pages scheduler-page">
            <RequirementsPanel/>     
        </div>
        </RequirementsContextProvider>
        )
  };
  
export default Scheduler;