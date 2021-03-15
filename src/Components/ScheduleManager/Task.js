const Task = ({task, onDelete, onUpdate, showUpdate, setShowUpdate}) => {
    const onClick = () => {
        if(!showUpdate) {
            setShowUpdate()
            onUpdate(task.id)
        }
     }

     return(
         <div className={`task${task.important ? "-important" : ""}`}>
             <div className="task-grid">
                 <div>
                     <h3>
                         {task.title}
                     </h3>


                     <p> {task.day} </p>
                     <a href={task.textInfor}>
                         {task.textInfor}
                     </a>
                 </div>
                 <div >
                     <h4 className="task-button" style={{color: 'red', cursor: 'pointer'}}
                     onClick={() => onDelete(task.id)}>
                        Delete
                    </h4>
                    <h4 className="task-button" style={{color: 'green', cursor: 'pointer'}}
                    onClick={onClick}>
                        Update
                     </h4>
                 </div>
             </div>
         </div>
     )
 }
export default Task