import RequirementCard from "./RequirementCard"

export const RequirementsPanel = () => {
    return(
        <div className="requirements-panel panel">
            <RequirementCard title={"Required CS Course (CS 301)" } course= {"CS 330 - Lecture 001 S/24"} status = {0} active = {true}/>
            <RequirementCard title={"Required CS Course (CS 301)" } course= {"CS 330 - Lecture 001 S/24"} status = {0}/>
            <RequirementCard title={"Required CS Course (CS 301)" } course= {"CS 330 - Lecture 001 S/24"} status = {0}/>
            <RequirementCard title={"Required CS Course (CS 301)" } course= {"CS 330 - Lecture 001 S/24"} status = {1}/>
            <RequirementCard title={"Required CS Course (CS 301)" } course= {"CS 330 - Lecture 001 S/24"} status = {1}/>
            <RequirementCard title={"Required CS Course (CS 301)" } course= {"CS 330 - Lecture 001 S/24"} status = {2}/>
            <RequirementCard title={"Required CS Course (CS 301)" } course= {"CS 330 - Lecture 001 S/24"} status = {2}/>
        </div>
    )
}