import { FaTimes } from 'react-icons/fa'


const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.onToggle(props.task.id)}>
            <h3>
                {props.task.text} 
                <FaTimes onClick={() => props.onDelete(props.task.id)} 
                style={{color: 'red', cursor: 'pointer'}}
                ></FaTimes>
            </h3>
            <p>{props.task.day}</p>

        </div>
    )
}

export default Task
