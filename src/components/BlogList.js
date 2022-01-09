// import React from "react";
// import {Button, Col, Nav} from "react-bootstrap";
// import {Link, useNavigate, useParams} from "react-router-dom";
//
//
// export function BlogList({blogs}){
//     // const navigate = useNavigate();
//     //
//     // const handleClick = () => {
//     //     const url = isNaN(postId) ? 'http://localhost:3001/blogs' : 'http://localhost:3001/blogs/' + postId
//     //     fetch("http://localhost:3001/blog" + postId, {
//     //         method: "Delete"
//     //     }).then(() => {
//     //         navigate(-1);
//     //     })
//     //}
//     return (
//         <Col md="9">
//             {blogs.map((blog) => (
//                 <div className="d-md-flex" key={blog.id}>
//                     <img
//                         width={150}
//                         height={150}
//                         className="align-self-start mr-3">{blog.image}</img>
//                     <div className="media-body">
//                         <Nav>
//                             <Nav.Link as={Link} to={`/blog/${blog}`}>
//                                 <h5 className="mt-1 ms-3">{blog.title}</h5>
//                             </Nav.Link>
//                         </Nav>
//                         <p>{blog.text}</p>
//                     </div>
//                 </div>
//             ) )}
//             </Col>
//     )
// }
//
// // const BlogList = ({blogs}) => {
// //     return (
// //         <Col md="9">
// //             {blogs.map((blog) => (
// //                 <div className="d-md-flex" key={blog.id}>
// //                     <div className="media-body">
// //                         <Nav>
// //                             <Nav.Link as={Link} to={`/blog/${blog.id}`}>
// //                                 <h5 className="mt-1 ms-3">{blog.title}</h5>
// //                             </Nav.Link>
// //                         </Nav>
// //
// //                         <Button variant="dark"><a href={`http://localhost:3000/users/${el.id}`} onClick={(event)=>{
// //                             event.preventDefault();
// //                             console.log('href',event.currentTarget)
// //                             fetch(event.currentTarget.href,{method: "delete"}).then(r=>r.json)
// //                                 .then((data)=>{
// //                                     getBlogs((data)=>{
// //                                         setPosts(data);
// //                                     })
// //                                 }).catch((err)=>{
// //                                 console.log(err);
// //                             })
// //
// //
// //                         }}/>Delete</Button>
// //                     </div>
// //                 </div>
// //             ) )}
// //         </Col>
// //     )
// // }
// //
// // export default BlogList;