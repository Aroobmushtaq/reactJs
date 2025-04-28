import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Facebook() {
  const [post, setPost] = useState([])
  const [selectId, setSelectid] = useState(null)
  const [comments, setComments] = useState([])
  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/posts")
      setPost(res.data.posts)
      console.log(res.data.posts)
    }
    catch (err) {
      console.error("error fatching posts", err)
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const fetchComments = async (id) => {
    try {
      const res = await axios.get(`https://dummyjson.com/posts/${id}/comments`);
      setComments(res.data.comments); // ⭐ real comments
      console.log(res.data.comments);
      setSelectid(id); // save clicked post id
    }
    catch (err) {
      console.error("error in fatching comments", err)
    }
  }
  return (
    <div>
      <h1>Posts</h1>
      {post.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <h3>Likes:{item.reactions.likes}</h3>
          <h3>Views:{item.views}</h3>
          <button onClick={() => fetchComments(item.id)}>See Comments</button>
          {
            selectId === item.id && (
              comments.length > 0 ? (
                comments.map((comment) => (
                  <p key={comment.id}><strong>{comment.user.username}:</strong> {comment.body}</p>
                ))
              ) : (
                <h4>No Comment Found</h4>
              )
            )
          }

        </div>
      ))
      }
    </div>
  )
}




