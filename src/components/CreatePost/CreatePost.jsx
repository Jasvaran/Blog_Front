/* eslint-disable no-unused-vars */
import { useState } from "react";


function CreatePost(){

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [file, setFile] = useState("")

    function handleChange(e){
        e.preventDefault();
        if (e.target.id === 'title'){
            setTitle(e.target.value)
        }
        if(e.target.id === 'text'){
            setText(e.target.value)
        }
        if (e.target.id === 'blogpic'){
            console.log(e.target.files)
            setFile(e.target.files[0])
        }
    }
    


    async function submitImg(e){
        e.preventDefault();
        try {
            
            const data = new FormData()
            data.append("blogpic", file)
            data.append("title", title)
            data.append("text", text)
            console.log('dataaa--->', data)
    
    
            const response = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: data
    
                
    
            })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                console.log(data)
                return data
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Create Post</h1>
            <form action="" onSubmit={submitImg} encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="text"></label>
                    <textarea name="text" id="text" cols="30" rows="10" className="form-control" onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="post_pic"></label>
                    <input type="file" name="blogpic" id="blogpic" accept="image/*" className="form-control" onChange={handleChange} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreatePost