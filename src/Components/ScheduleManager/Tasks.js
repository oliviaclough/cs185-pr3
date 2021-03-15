import Task from './Task';

 const Tasks = ({tasks, onDelete, onUpdate, showUpdate, setShowUpdate}) => {
     return(
         <div>
             {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete}
             onUpdate={onUpdate} showUpdate={showUpdate} setShowUpdate={setShowUpdate}
             />
             ))}
         </div>
    )
}
export default Tasks