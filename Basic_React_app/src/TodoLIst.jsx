import { useState } from "react"

export default function TodoList() {
    let [todos,setTodos]=useState(["Sample Task"])
    let [newTodos,setNewTodos]=useState("")

    let updateTask=(e)=>{
    
        setTodos([...todos,newTodos])
    }
    let updateinput=(event)=>{
           setNewTodos(event.target.value)
    }
    return(
        <div>
            <input type="text" placeholder="Enter the task" value={newTodos}onChange={updateinput}/>
            <button onClick={updateTask}>Add Task</button>
            <h4>List of the ToDos:</h4>
            <ul>
                {
                    todos.map((todo,index)=>{
                        return <li key={index}>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}