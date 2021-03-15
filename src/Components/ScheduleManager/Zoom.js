import { useState, useEffect } from 'react';
import './Zoom.css';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Header from './Header';
import UpdateTask from './UpdateTask';
const Zoom = () => {
     const [tasks, setTasks] = useState([])
     const [showFullSchedule, setShowFullSchedule] = useState(true)
     const [showUpdate, setShowUpdate] = useState(false)
     const [updateId, setUpdateId] = useState("")

     useEffect(() => {
         const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])
     const fetchTasks = async () => {
         const res = await fetch('http://localhost:5000/tasks')
         const data = await res.json()
         return data
     }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }
    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {method:'DELETE'})
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        const data = await res.json()
         setTasks([...tasks, data])
     }

     const updateTask = async ({title, day, important, textInfor}) => {
         const taskToToggle = await fetchTask(updateId)
         const updTask = { ...taskToToggle, important: !taskToToggle.important}
         const res = await fetch(`http://localhost:5000/tasks/${updateId}`, {
             method: 'PUT',
             headers: {
                 'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
        })
         const data = await res.json()
         setTasks(
             tasks.map((task) =>
                 task.id === updateId ? { updateId, title, day, important, textInfor} : task
             )
         )
     }

     return (
         <div className='zoom-container'>
             <Header showFullSchedule={showFullSchedule} 
             setShowFullSchedule={() => setShowFullSchedule(!showFullSchedule)}
             setShowUpdate={() => setShowUpdate(false)}/>
             {!showFullSchedule && <AddTask onAdd={addTask}/>}
             {showFullSchedule && (tasks.length > 0 ? 
             <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={setUpdateId} 
             showUpdate={showUpdate} setShowUpdate={() => setShowUpdate(!showUpdate)}/> :
             <h3>No Available Meetings</h3>)}
             {showUpdate && <UpdateTask onAdd={updateTask} fetchTask={fetchTask}
             setShowUpdate={() => setShowUpdate(!showUpdate)} updateId={updateId}/>}
         </div>

     )
}
export default Zoom