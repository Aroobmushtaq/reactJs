import React from 'react'
import { useState } from 'react'
import * as yup from 'yup';
let userSchema = yup.object({
    name: yup.string().required("Name is required"),
    password: yup.string().required("Password is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  });
function YupForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error,setError]=useState("")
    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData={
            name,
            email,
            password
        }
        try{
            await userSchema.validate(userData)
             console.log(userData)
             setError("")
        }
        catch(err){
            console.log(err.message)
            setError(err.message)
        }
    }
    return (
        <div>
            <h1>Yup Form</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form>
                <label>Name : </label>
                <input value={name} type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email : </label>
                <input value={email} type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password : </label>
                <input value={password} type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default YupForm
