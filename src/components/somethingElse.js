// import React, {useEffect, useState} from "react";
// import {Button, Card, Col, Container, ListGroup, ListGroupItem, Nav, Row} from "react-bootstrap";
// import {Link} from "react-router-dom";
//
// const API = "http://localhost:3001";
//
// function AddPost(props) {
//     const {postId} = props;
//     const [post, setPost] = useState({title: "", body:""})
//
//
//     useEffect(() => {
//         if(!isNaN(postId)){
//             fetch("http://localhost:3001/blogs/" + postId).
//             then((response) => response.json()).
//             then((data) => {
//                 delete data["id"];
//                 console.log("From server", data);
//                 setPost(data)
//             }).catch((error)=>{
//                 console.error("Error", error.toString());
//             })
//         }
//     },postId)
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         //validari formular
//         const url = isNaN(postId) ? 'http://localhost:3001/blogs' : 'http://localhost:3001/blogs/' + postId
//         fetch(url,{
//             method: ( isNaN(postId) ? "post" : "put"),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body:JSON.stringify(post),
//             redirect:"manual"
//         }).
//         then((resp)=>resp.json()).
//         then((data)=>{
//             console.log(data);
//         }).catch((err)=>{
//             console.log(err)
//         })
//         return false;
//     }
//
//     return (
//         <>
//             <Container className="containerPost">
//                 <h1 className="text-center">Add a post</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputPassword1">Post title</label>
//                         <input type="text" className="form-control" id="titleInput"
//                                value={post.title}
//                                onChange={(event)=>{
//                                    setPost({
//                                        ...post,
//                                        title: event.target.value
//                                    })
//                                }}
//                                placeholder="Write the title"/>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputPassword1">Context</label>
//                         <textarea className="form-control" id="bodyInput"
//                                   value={post.body}
//                                   onChange={(event)=>{
//                                       setPost({
//                                           ...post,
//                                           body: event.target.value
//                                       })
//                                   }}></textarea>
//                     </div>
//                     <Button variant="primary" type="submit">Add post</Button>
//                 </form>
//             </Container>
//         </>
//
//     )
// }
// function getBlogs(callback){
//     fetch('http://localhost:3001/blogs').
//     then((resp)=>resp.json()).
//     then(callback).catch((err)=>{
//         console.error("ERROR:",err.toString());
//     })
// }
//
//
// function Blog() {
//     const [posts, setPosts] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(()=>{
//         getBlogs((data)=>{
//             setPosts(data);
//         })
//     },[])
//
//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://localhost:3001/blogs')
//                 .then((response) => response.json())
//                 .then(data => {
//                     setPosts(data);
//                     setIsLoading(false);
//                     setError(null);
//                 }).catch(err => {
//                 setIsLoading(false);
//                 setError(err.message);
//             })
//
//         }, 1000)
//
//         return () => console.log("cleanup")
//     }, [])
//
//
//
//     return (
//         <Container className="blogContainer">
//             <Button variant="warning">
//                 <Nav>
//                     <Nav.Link as={Link} to="/blog/addPost/*">Add post</Nav.Link>
//                 </Nav>
//             </Button>
//             <Row>
//                 <Col md="9">
//                     {error && <div>{error}</div>}
//                     {isLoading && <div>Loading...</div>}
//                     {posts.map((post) => (
//                         <div className="d-md-flex" key={post.id}>
//                             <div className="media-body">
//                                 <Nav>
//                                     <Nav.Link as={Link} to={`/blog/${post.id}`}>
//                                         <h5 className="mt-1 ms-3">{post.title}</h5>
//                                     </Nav.Link>
//                                 </Nav>
//
//                                 <Button variant="dark"><a href={`http://localhost:3000/users/${post.id}`} onClick={(event)=>{
//                                     event.preventDefault();
//                                     console.log('href',event.currentTarget)
//                                     fetch(event.currentTarget.href,{method: "delete"}).then(r=>r.json)
//                                         .then((data)=>{
//                                             getBlogs((data)=>{
//                                                 setPosts(data);
//                                             })
//                                         }).catch((err)=>{
//                                         console.log(err);
//                                     })
//
//
//                                 }}/>Delete</Button>
//                             </div>
//                         </div>
//                     ) )}
//                 </Col>
//                 <Col md="3">
//                     <h5>Categories</h5>
//                     <Card>
//                         <ListGroup variant="flush">
//                             <ListGroupItem>Html</ListGroupItem>
//                             <ListGroupItem>Css</ListGroupItem>
//                             <ListGroupItem>Js</ListGroupItem>
//                             <ListGroupItem>React</ListGroupItem>
//                         </ListGroup>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }
//
// export default Blog;
