import {Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import "./addPost.scss"
import {useNavigate} from "react-router-dom";
//import {useHistory} from "react-router";



const API = "http://localhost:3001";

const AddPost = (props) =>{
    const {postId} = props;
    const [post, setPost] = useState({title: "", body:""})
    const navigate = useNavigate();

    useEffect(() => {
        if(!isNaN(postId)){
            fetch("http://localhost:3001/blogs/" + postId).
            then((response) => response.json()).
            then((data) => {
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
        }).
        then((resp)=>resp.json()).
        then((data)=>{
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
                <h1 className="text-center">Add a post</h1>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Post title</label>
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
                        <label htmlFor="exampleInputPassword1">Context</label>
                        <textarea className="form-control" id="bodyInput"
                                  value={post.body}
                                  onChange={(event)=>{
                                      setPost({
                                          ...post,
                                          body: event.target.value
                                      })
                                  }}></textarea>
                    </div>
                    <Button variant="primary" type="submit">Add post</Button>
                </form>
            </Container>
        </>

    )
}

export default AddPost;




// const AddPost = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     //const history = useHistory();
//
//    const handleSubmit = (e) => {
//        e.preventDefault();
//        const blog = {title, body};
//
//        setIsLoading(true);
//
//        fetch('http://localhost:3001/blogs', {
//            method: 'post',
//            headers: {"Content-Type": "aplication/json"},
//            body: JSON.stringify(blog)
//        }) .then(response => response.json())
//            .then(() => {
//            console.log("new blog");
//            setIsLoading(false);
//            //history.push()
//        })
//
//
//    }
//
//     return (
//         <>
//             <Container className="containerPost">
//                 <h1 className="text-center">Add a post</h1>
//                 <Form onSubmit={handleSubmit}>
//                     <FormGroup controlId="formBasicName">
//                         <FormLabel>Post Title</FormLabel>
//                         <FormControl type="text" placeholder="Write the title" value={title} onChange={(event) => setTitle(event.target.value)}></FormControl>
//                     </FormGroup>
//                     <FormGroup controlId="formBasicPassword">
//                         <FormLabel>Context</FormLabel>
//                         <FormControl as='textarea' rows="3" value={body} onChange={(event) => setBody(event.target.value)}></FormControl>
//                     </FormGroup>
//                     {!isLoading && <Button variant="primary" type="submit">Add post</Button>}
//                     {isLoading && <Button variant="primary" type="submit" disabled>Addind post...</Button>}
//                 </Form>
//             </Container>
//         </>
//
//     )
// }
// export default AddPost;