

export default function BarStatus(props){
    switch(props.status)
    {
        case 1: //Scheduled
            return <div className="requirement-card-barcolor" style={{backgroundColor:" #f1a4a4"}}><p>Scheduled</p></div>
        case 0: case 2: //NotStarted
            return <div className="requirement-card-barcolor" style={{backgroundColor:" #c1c3c9"}}><p>No Schedule</p></div>
        case 3://Completed
            return <div className="requirement-card-barcolor" style={{backgroundColor:" #31384d"}}><p style={{color:"#ffffff"}}>Completed</p></div>
    }
}