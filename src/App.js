import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Todo from './componenets/assignments/todo-app-assignment13/Todo'
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import YupForm from "./componenets/yupForm";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<YupForm />} />
      
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// import React from 'react'
// import { useEffect,useState } from 'react'

// function App() {
//   const[data,setData]=useState([])
//   const fetchData=async()=>{
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data=await response.json()
//     console.log(data)
//     setData(data)

//   }
//   useEffect(()=>{
//     fetchData()
//   },[])
//   return (
//     <div>
//       <h1>useEffect</h1>
//     {
//       data.map((item)=>{
//         return(
//           <div key={item.id}>
//           <h1>{item.title}</h1>
//            <p>{item.body}</p>
//            </div>
//         )
//       })
//     }
//     </div>
//   )
// }

// export default App


