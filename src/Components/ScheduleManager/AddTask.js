import {useState} from 'react';
 import "./Zoom.css";

 const AddTask = ({onAdd}) => {
     const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [important, setImportant] = useState(false)
     const [textInfor, setTextInfor] =useState('')

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
        console.log(Number(day.substr(8,2)))
        if(Number(day.substr(8,2)) <= today) {
            alert("Meeting date must after today!")
            return
        }
        if(!(textInfor.includes("zoom"))) {
            alert("Invalid zoom link!")
            return
        }
        onAdd({title, day, important, textInfor})
        setTitle('')
        setDay('')
        setImportant(false)
        setTextInfor('')
     }

     return (
         <form className="addTask" onSubmit={onSubmit}>
             <div className="addTask-element">
                 <label>Meeting</label>
                 <input type='text' placeholder='Add Task'
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
             <input className="btn" type='submit' value='Save Meeting'/>
         </form>
     )
 }
export default AddTask