import React, {useEffect, useState} from "react";
import {
    Container,
    Row,
    Col,
    Modal,
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Nav,
    Form,
    FormGroup, FormLabel, FormControl
} from "react-bootstrap";
import "./blog.scss"
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import AddPost from "./AddPost";
import Data from "../data/db.json"

function getBlogs(callback){
    fetch('http://localhost:3001/blogs').
    then((resp)=>resp.json()).
    then(callback).catch((err)=>{
        console.error("ERROR:",err.toString());
    })
}


function Blog() {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] =useState("");
    const [foundPost, setFoundPost] = useState(blogs);

    useEffect(()=>{
        getBlogs((data)=>{
            setBlogs(data);
        })
    },[])

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/blogs')
                .then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return response.json()
            }).then(data => {
                setBlogs(data.reverse());
                setIsLoading(false);
                setError(null);
            }).catch(err => {
                setIsLoading(false);
                setError(err.message);
            })

        }, 1000)

        return () => console.log("cleanup")
    }, [])



    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.currentTarget)
        fetch(event.currentTarget.href,{method: "delete"}).then(r=>r.json)
            .then((data)=>{
                getBlogs((data)=>{
                    setBlogs(data.reverse());
                })
            }).catch((err)=>{
            console.log(err);
        })

    }



    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = blogs.filter((blog) => {
                return blog.title.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundPost(results);
        } else {
            setFoundPost(blogs);
        }

        setValue(keyword);
    };


    return (
        <Container className="blogContainer">
            <Button variant="warning">
                <Nav>
                    <Nav.Link as={Link} to="/blog/addPost">Add post</Nav.Link>
                </Nav>
            </Button>
            <Form className="form">
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="me-sm-2"
                    onChange={filter}
                />
                <Button variant="outline-info">Search</Button>
            </Form>
            <div className="blogs">
                {foundPost && foundPost.length > 0 ? (
                    foundPost.map((blog) => {
                        return (
                            <div className="d-md-flex" key={blog.id}>
                                <img
                                    width={150}
                                    height={150}
                                    className="align-self-start mr-3"
                                    src="https://images.pexels.com/photos/1095826/pexels-photo-1095826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                />
                                <div className="media-body">
                                    <Nav>
                                        <Nav.Link as={Link} to={`/blog/${blog.id}`}>
                                            <h5 className="mt-1 ms-3">{blog.title}</h5>
                                        </Nav.Link>
                                    </Nav>
                                    <p>{blog.text}</p>
                                    <a href={`http://localhost:3001/blogs/${blog.id}`} onClick={handleClick}><Button variant="dark">Delete post</Button></a>
                                </div>
                            </div>
                        )
                    })) :
                    ( <div> {blogs &&
                    <Col md="9">
                        {blogs.map((blog) => (
                            <div className="d-md-flex" key={blog.id}>
                                <img
                                    width={150}
                                    height={150}
                                    className="align-self-start mr-3"
                                    src="https://images.pexels.com/photos/1095826/pexels-photo-1095826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                />
                                <div className="media-body">
                                    <Nav>
                                        <Nav.Link as={Link} to={`/blog/${blog.id}`}>
                                            <h5 className="mt-1 ms-3">{blog.title}</h5>
                                        </Nav.Link>
                                    </Nav>
                                    <p>{blog.text}</p>
                                    <a href={`http://localhost:3001/blogs/${blog.id}`} onClick={handleClick}><Button className="mt-1 ms-3" variant="dark">Delete post</Button></a>
                                </div>
                            </div>
                        ) )}
                    </Col>}
                    </div>)
                }
            </div>
            <Row>
                        {error && <div>{error}</div>}
            </Row>
        </Container>
    );
}

export default Blog;


{/*<ul className="list-unstyled">*/}
{/*    <li className="me">*/}
{/*        <img*/}
{/*            width={150}*/}
{/*            height={150}*/}
{/*            className="align-self-start mr-3"*/}
{/*            src="https://images.pexels.com/photos/1095826/pexels-photo-1095826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"*/}
{/*        />*/}
{/*        <div className="media-body">*/}
{/*            <h5 className="mt-0 mb-1">Blog post</h5>*/}
{/*            <p>Some text</p>*/}
{/*        </div>*/}
{/*    </li>*/}
{/*</ul>*/}