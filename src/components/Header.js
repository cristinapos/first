import React, {Component, useState} from "react";
import {Container, Navbar, Nav, FormControl, Button, Form} from "react-bootstrap";
import logo from './logo192.png';
import "./Header.scss";
import {Routes, Route, Link, BrowserRouter, NavLink} from "react-router-dom";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Blog from "../pages/Blog";
import AddPost from "../pages/AddPost";
import BlogDetails from "../pages/BlogDetails";
import TeamDetails from "../pages/TeamDetails";


export default function Header(){
    const [value, setValue] =useState("");

    return (
        <>
            <BrowserRouter>
            <Navbar fixed="top" className="navBar" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt="Logo"
                        />
                        Welcome!
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="navCollapse">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Project</Nav.Link>
                            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blog/addPost" element={<AddPost/>}/>
                    <Route exact path="/blog/:id" element={<BlogDetails/>}/>
                    <Route exact path="/:id" element={<TeamDetails/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )
}