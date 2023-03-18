import React, { useEffect,useState } from 'react'
import './Home.css'

export default function Home() {

    const [blogs,setblogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/blogs')
        .then((res)=>res.json())
        .then((data) => {
            setblogs(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    })
  return (
    <div>
    
    
    <p id='Posts'>
        Posts
    </p>
    {
        blogs.map((blog) => {
        return(
            <div id='container' key={blog.id}>
                <p id='title'>{blog.name}</p>
                <p id='content'> {blog.content}</p>
            </div> 
        );
        })
        
    }
    
    
    </div>
  )
}
