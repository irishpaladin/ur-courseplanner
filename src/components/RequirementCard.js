import arrow from '../assets/arrow.png';
import BarStatus from './BarStatus';


export default function RequirementCard(props){
    return(
        <div className="requirement-card">
            <div className="requirement-box" style={{borderWidth: props.active? '3px': '1px'}}>
                <BarStatus status = {"completed"}/>
                <div className="requirement-description">
                    <div>
                        <p className="requirement-card-title">{props.title}</p>
                        <p className="requirement-card-course">{props.course}</p>
                    </div>
                </div>
            </div>
            {props.active? <ActiveElement/>: null}
        </div>
    )
}

const ActiveElement = () => {
    return (
        <div className="requirement-card-active">
            <img src={arrow} className="arrow" alt="active" />
        </div>
    )
}