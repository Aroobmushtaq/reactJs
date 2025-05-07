import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Facebook() {
  const [post, setPost] = useState([]);
  const [selectId, setSelectid] = useState(null);
  const [comments, setComments] = useState([]);
  const [btn, setBtn] = useState(5);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      setPost(res.data.posts);
    } catch (err) {
      console.error("Error fetching posts", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchComments = async (id) => {
    if (selectId === id) {
      setSelectid(null);
      setComments([]);
    } else {
      try {
        const res = await axios.get(`https://dummyjson.com/posts/${id}/comments`);
        setComments(res.data.comments);
        setSelectid(id);
      } catch (err) {
        console.error("Error fetching comments", err);
      }
    }
  };

  const handleMore = () => {
    setBtn((prev) => prev + 5);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">📘 Facebook Feed</h1>

        <div className="space-y-10">
          {post.slice(0, btn).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 transition duration-300 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-blue-800">{item.title}</h2>
              <p className="text-gray-700 mt-2">{item.body}</p>

              <div className="flex gap-6 text-sm text-gray-600 mt-4">
                <span>👍 Likes: {item.reactions.likes}</span>
                <span>👁️ Views: {item.views}</span>
              </div>

              <button
                onClick={() => fetchComments(item.id)}
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium"
              >
                {selectId === item.id ? "Hide Comments" : "See Comments"}
              </button>

              {selectId === item.id && (
                <div className="mt-4 space-y-3">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <div key={comment.id} className="bg-gray-100 p-3 rounded-md border text-sm">
                        <strong className="text-blue-600">{comment.user.username}:</strong> {comment.body}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No Comments Found</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {btn < post.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleMore}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
