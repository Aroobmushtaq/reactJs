import React from 'react'
import { useState } from 'react';

function Todo() {
    const [todo,setTodo]=useState([
        { id: 1, title: "Learning english", completed: false },
        { id: 2, title: "speaking english", completed: false },
        { id: 3, title: "wrinting english", completed: true }
    ])
    const [title,setTitle]=useState("")
    const [Status,setStatus]=useState("")
    const [edit,setEdit]=useState(null)
    const addHandler=()=>{
        if(title===""){
            alert("Field are Required")
            return
        }
        if(edit){
            setTodo(todo.map((item)=>item.id===edit ? {...item, title,completed: Status}:item))
            setEdit(null)
            setTitle("")
            setStatus("")
        }else{
            const newTask = 
        {
            id:todo.length+1,
            title:title,
            completed:Status
        }
       setTodo([...todo, newTask])
       setTitle("")
       setStatus("")
    }
        }
      
    const deletHandler=(id)=>{
        {
            const deleteTodo=todo.filter((task)=>task.id!==id)
            setTodo(deleteTodo)
        }
    }
    const editHandler=(id)=>{
        const editTodo=todo.find((item)=>item.id===id)
        setTitle(editTodo.title)
        setStatus(editTodo.completed)
        setEdit(id)   
    }
    return (
        <div>
            <h1>Todo List</h1>
            <label>Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type='text' />
            <br/>
            <label>Status</label>
            <input value={Status} onChange={(e)=>setStatus(e.target.checked)} type='checkbox'/>
            <br/>
            <button onClick={addHandler}>{edit ? "Update Todo" : "Add Todo"}</button>
            <table style={{ border: "1px solid black", width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Status</th>
                        <th style={{border:"1px solid black", padding:"8px"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map((item) => {
                        return (<tr key={item.id}>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{item.title}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{item.completed ? "completed" : "Pending"}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}><button onClick={()=>editHandler(item.id)}>Edit</button><button onClick={()=>deletHandler(item.id)}>Delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Todo
