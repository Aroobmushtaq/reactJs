import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getPosts, deletePost, updatePost } from '../../reduxToolKIt/store/slices/posts.slice'
import { useEffect } from 'react'
import axios from "axios"
function Postes() {
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    const [isUploading, setIsUploading] = useState(false);
    const [img, setImg] = useState('')
    const [post, setPost] = useState([])
    const [edit, setEdit] = useState(null)
    const dispatch = useDispatch()
    const posts = useSelector((store) => store.postSlice.posts);
   const uploadImage = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'post_app');
    data.append('cloud_name', 'djxmwzaw5');

    setIsUploading(true); // start loading
    try {
        const res = await axios.post(
            'https://api.cloudinary.com/v1_1/djxmwzaw5/image/upload',
            data
        );
        setImg(res.data.secure_url); // ✅ store Cloudinary URL
        console.log("Uploaded Image URL:", res.data.secure_url);
    } catch (err) {
        alert("Image upload failed");
    }
    setIsUploading(false); // stop loading
};



    const submitHnadler = () => {
    if (!title || !des) {
        alert("Title and Description are required.");
        return;
    }

    if (isUploading) {
        alert("Please wait, image is still uploading...");
        return;
    }

    if (!img) {
        alert("Image not uploaded yet.");
        return;
    }

    const newPost = { title, des, img }; // ✅ correct

    console.log("Sending to Redux:", newPost);

    if (edit !== null) {
        dispatch(updatePost({ postId: edit, postData: newPost }));
        setEdit(null);
    } else {
        dispatch(createPost(newPost));
    }

    setTitle('');
    setDes('');
    setImg('');
};


    const handleDelete = (id) => {
        console.log(id)
        dispatch(deletePost(id))
    }
    useEffect(() => {
        dispatch(getPosts());
    }, []);


    return (
        <div>
            <h1 style={{ backgroundColor: 'gray', textAlign: 'center' }}>create posts</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <input
                    style={{ border: '2px solid black', marginTop: '30px' }}
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
                <input
                    style={{ border: '2px solid black', margin: '5px' }}
                    type='file'
                    accept="image/*"
                    onChange={(e) => uploadImage(e.target.files[0])}
                />

                <br />

                <button style={{ border: '2px solid black', backgroundColor: 'green', padding: '5px' }} onClick={submitHnadler}>{edit !== null ? "update" : "submit"}</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '40px' }}>
                <h1>All Posts</h1>
                <ul>
                    {
                        posts.map((item, index) => (
                            <li key={index}>
                                <h2>Title:{item.title}</h2>
                                <p>Description:{item.des}</p>
                                <img src={item.img} alt="Post" style={{ width: '200px', margin: '10px 0' }} />
                                <button style={{ backgroundColor: 'red', color: 'white', padding: '6px' }} onClick={() => handleDelete(item.id)}>Delete</button>
                                <button style={{ backgroundColor: 'blue', color: 'white', margin: '5px', padding: '6px' }} onClick={() => {
                                    setEdit(item.id);
                                    setTitle(item.title);
                                    setDes(item.des);
                                    setImg(item.img)
                                }}>Edit</button>
                            </li>
                        ))
                    }
                </ul>


            </div>
        </div>
    )
}

export default Postes