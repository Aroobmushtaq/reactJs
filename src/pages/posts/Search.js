import React from 'react'
import { useState } from 'react'
function Search() {
    const [srh, setSrh] = useState('')
    const [res, setRes] = useState([])
    const array = ["apple", "bnana", "Mango", "pineapple"]
    const handleSearch = () => {
        console.log("search")
        const filterd = array.filter(item => item.toLowerCase().includes(srh.toLowerCase()))
        setRes(filterd)
    }
    return (
        <div>
            <h1>Search Here</h1>
            <input
                type='text'
                placeholder='Type for search'
                value={srh}
                onChange={(e) => setSrh(e.target.value)}
            />
            <button onClick={handleSearch}>serach</button>
            <div>
                <h1>searched item</h1>
                {
                    res.length > 0 ? (
                        <ul>
                            {res.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (srh && <p>No item found</p>)
                }
            </div>
        </div>
    )
}

export default Search
