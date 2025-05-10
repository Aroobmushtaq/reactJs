import React, { useState } from 'react'
function Postes() {
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    const [post,setPost]=useState([])
    const [edit,setEdit]=useState(null)
    const submitHnadler=()=>{
        const newPost ={title,des}
        if(edit!==null){
            console.log("edit:",{edit})
            const updatePost=[...post]
            updatePost[edit]=newPost
            setPost(updatePost)
            setEdit(null)

        }else{
        setPost([...post,newPost])
        }
        setTitle('')
        setDes('')
    }
    const handleDelete=(id)=>{
        console.log("id of this item is ",{id})
        const deletePost=post.filter((_,index)=>index!==id)
        setPost(deletePost)
    }
    const handleUpdate=(id)=>{
        console.log("id: ",{id})
        setTitle(post[id].title)
        setDes(post[id].des)
        setEdit(id)
    }
    return (
        <div>
            <h1 style={{ backgroundColor: 'gray', textAlign: 'center' }}>create posts</h1>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <input
                    style={{ border: '2px solid black', marginTop:'30px' }}
                    placeholder='Enter Tilte'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    
                />
                <br />
                <input
                    style={{ border: '2px solid black', margin: '5px' }}
                    placeholder='Enter Description'
                    type='text'
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                />
                <br />

                <button style={{border:'2px solid black', backgroundColor:'green', padding:'5px'}} onClick={submitHnadler}>{edit!==null?"update":"submit"}</button>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', marginTop:'40px'}}>
                <h1>All Posts</h1>
                <ul>
                    {
                    post.map((item,index)=>(
                        <li key={index}>
                            <h2>Title:{item.title}</h2>
                            <p>Description:{item.des}</p>
                            <button style={{backgroundColor:'red' ,color:'white',padding:'6px'}} onClick={()=>handleDelete(index)}>Delete</button>
                            <button style={{backgroundColor:'blue', color:'white', margin:'5px' ,padding:'6px'}} onClick={()=>handleUpdate(index)}>Edit</button>
                        </li>
                    ))
                }
                </ul>
                
                 
            </div>
        </div>
    )
}

export default Postes




