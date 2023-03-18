import axios from 'axios'
import React, { useState } from 'react'
import './Blogs.css'
export default function Blogs() {

    const [name,setname] = useState('')
    const [content,setcontent] = useState('')

    const handlesubmit = (e) => {
        axios.post('http://localhost:8080/add',{name:name,content:content})
        .catch((err)=>{console.log(err.message)})
    }
  return (
    <div>
        
        <p id='add'>
            Add New Content
        </p>
        <form id='form'>
            <input type='text' placeholder='Title' id='title1' onChange={(event)=>{setname(event.target.value)}}/>
            <textarea placeholder='Content' id='content1' onChange={(event) =>{setcontent(event.target.value)}}/>
            <input type='submit' id='submit' onClick={handlesubmit}/>
        </form>
    </div>
  )
}
