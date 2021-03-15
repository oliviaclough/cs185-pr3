import { useState, useEffect } from 'react';
 import "./Zoom.css";

 const UpdateTask = ({onAdd, setShowUpdate, fetchTask, updateId}) => {
     const [title, setTitle] = useState('')
     const [day, setDay] = useState('')
     const [important, setImportant] = useState(false)
     const [textInfor, setTextInfor] = useState('')

     useEffect(() => {
         const getTask = async () => {
             console.log(updateId)
             const taskFromServer = await fetchTask(updateId)
             console.log(taskFromServer)
             setTitle(taskFromServer.title)
             setDay(taskFromServer.day)
             setImportant(taskFromServer.important)
             setTextInfor(taskFromServer.textInfor)
         }
         getTask(updateId)
     },[])

     const onSubmit = (e) => {
         e.preventDefault()

         // error handling
         if(!title) {
             alert("Meeting must have a title!")
             return
         }
         if(!day) {
             alert("Meeting must have a date!")
             return 
         }
         if(!textInfor) {
             alert("Meeting must have a Zoom link!")
             return 
         }
         if(title.length > 30) {
             alert("Meeting title must be shorter than 30 characters!")
             return
         }
         var today = new Date().getDate()
         if(Number(day.substr(8,2)) <= today) {
             alert("Meeting date must later than today!")
             return
         }
        if(!(textInfor.includes("zoom"))) {
            alert("Invalid zoom link!")
            return
        }
        
        onAdd({title, day, important, textInfor})
        setShowUpdate()
        setTitle('')
        setDay('')
        setImportant(false)
        setTextInfor('')
     }

     return (
         <form className="addTask" onSubmit={onSubmit}>
             <div className="addTask-element">
                 <label>Meeting</label>
                 <input type='text' placeholder='Update Task'
                 value={title} onChange={(e) => setTitle(e.target.value)}/>
             </div>
             <div className="addTask-element">
                 <label>Date</label>
                 <input type='datetime-local' value={day} onChange={(e) => setDay(e.target.value)}/>
             </div>
             <div className="addTask-element">
                 <label>Zoom Link</label>
                 <input type='url' value={textInfor} onChange={(e) => setTextInfor(e.target.value)}/>
             </div>
             <div className="addTask-check">
                 <label>Important</label>
                 <input type='checkbox' checked={important} value={important}
                 onChange={(e) => setImportant(e.currentTarget.checked)}/>
             </div>
             <input className="btn" type='submit' value='Update Meeting'/>
         </form>
     )
 }
export default UpdateTask