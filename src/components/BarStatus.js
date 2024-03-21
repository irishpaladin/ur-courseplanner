

export default function BarStatus(props){
    switch(props.status)
    {
        case 0: //Scheduled
            return <div className="requirement-card-barcolor" style={{backgroundColor:" #f1a4a4"}}></div>
        case 1: //NotStarted
            return <div className="requirement-card-barcolor" style={{backgroundColor:" #c1c3c9"}}><p>No Schedule</p></div>
        case 2://Completed
            return <div className="requirement-card-barcolor" style={{backgroundColor:" #31384d"}}><p style={{color:"#ffffff"}}>Completed</p></div>
    }
}