import {Button, Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import "./addPost.scss"
import {useNavigate} from "react-router-dom";


const AddPost = (props) =>{
    const {postId} = props;
    const [post, setPost] = useState({title: "", body:""})
    const navigate = useNavigate();

    useEffect(() => {
        if(!isNaN(postId)){
            fetch("http://localhost:3001/blogs/" + postId)
                .then((response) => response.json())
                .then((data) => {
                delete data["id"];
                console.log("From server", data);
                setPost(data)
            }).catch((error)=>{
                console.error("Error", error.toString());
            })
        }
    },postId)

    const handleSubmit = (event) => {
        event.preventDefault();
        //validari formular
        const url = isNaN(postId) ? 'http://localhost:3001/blogs' : 'http://localhost:3001/blogs/' + postId
        fetch(url,{
            method: ( isNaN(postId) ? "post" : "put"),
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(post),
            redirect:"manual"
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            console.log(data);
            navigate(-1);
        }).catch((err)=>{
            console.log(err)
        })
        return false;
    }

    return (
        <>
            <Container className="containerPost">
                <h1 className="text-center text-primary">Add a post</h1>
                <div className="post">
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-info label">Post title</label>
                            <input type="text" className="form-control" id="titleInput"
                                   value={post.title}
                                   onChange={(event)=>{
                                       setPost({
                                           ...post,
                                           title: event.target.value
                                       })
                                   }}
                                   placeholder="Write the title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-info label">Context</label>
                            <textarea className="form-control" id="bodyInput"
                                      value={post.body}
                                      onChange={(event)=>{
                                          setPost({
                                              ...post,
                                              body: event.target.value
                                          })
                                      }}/>
                        </div>
                        <Button variant="primary" type="submit" classname="buttonAddPost">Add post</Button>
                    </form>
                    <div className="recomandations">
                        <h3 className="text-info">Recomandations</h3>
                        <p className='text-md-start'>
                            Please create code fences by placing your code between sets of 3 backticks ` or use CTRL + K.
                            Create inline code spans by placing text between single backticks.
                            Add a preformatted block within a list with eight spaces
                        </p>
                        <p className='text-md-start'>
                            Add > to the beginning of each line to create a blockquote.
                            > A standard blockquote is indented.
                            > > A nested blockquote is indented more.
                            > > > > You can nest to any depth.
                        </p>
                        <p className='text-md-start'>
                            Create bulleted and numbered lists.
                        </p>
                        <p className="lastP">
                            Thank you for your post!
                        </p>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default AddPost;
