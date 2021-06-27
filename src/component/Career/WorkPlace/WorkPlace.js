import classes from './WorkPlace.module.css';

const WorkPlace = (props) => {
    return (
            <div className={classes.work_place}>
                <h3>{props.firm}</h3>
                <p>{props.position} <span>{props.description}</span></p>
            </div>
    );
}

export default WorkPlace;

