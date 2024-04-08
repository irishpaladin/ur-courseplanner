import CalendarPlanner from "../calendar/CalendarPlanner";
export const CalendarPanel = (props) => {
    console.log("Im in CalendarPanel");
    return(
        <div className="calendar-panel panel">
            <CalendarPlanner/>
        </div>
    )
}