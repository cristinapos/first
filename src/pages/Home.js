import React, {useEffect, useState} from "react";
import CarouselBar from "../components/CarouselBar";
import {Container, Card, Button, Nav} from "react-bootstrap";
import "./home.scss"
import {Link} from "react-router-dom";
//import CardDeck from "react-bootstrap/CardDeck";

function getBlogs(callback){
    fetch('http://localhost:3001/members')
        .then((resp)=>resp.json())
        .then(callback).catch((err)=>{
        console.error("ERROR:",err.toString());
    })
}

function Home() {
    const [members, setMembers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        getBlogs((data)=>{
            setMembers(data);
        })
    },[])

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/members')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return response.json()
                }).then(data => {
                setMembers(data);
                setIsLoading(false);
                setError(null);
            }).catch(err => {
                setIsLoading(false);
                setError(err.message);
            })

        }, 1000)

        return () => console.log("cleanup")
    }, [])




    return (
        <>
            <CarouselBar/>
            <Container className="homeContainer">
                <h2 className='text-center m-4'>General presentation</h2>
                <Container className="m-md-2 cardGroup">
                    {error && <div>{error}</div>}
                    {isLoading && <div>Loading...</div>}
                    <div className="cardD">
                    {members &&
                        <div className="divCardOne">
                            {members.map((member) => (
                                <div className="divCard">
                                    <Card.Img variant="top" src={member.img} height={150}/>
                                    <div className="cardBody">
                                        <Card.Title className="text-primary">{member.title}</Card.Title>
                                        <Card.Text>More details</Card.Text>
                                        <Nav>
                                            <Nav.Link as={Link} to={`/${member.id}`}>
                                                <Button variant="primary" classname="align-self-md-center cardButton">Read more</Button>
                                            </Nav.Link>
                                        </Nav>
                                    </div>
                                </div>

                            ))}
                        </div>}
                    </div>
                </Container>
            </Container>
        </>

    );
}

export default Home;
