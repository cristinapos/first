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
                <h2 className='text-center m-4'>Our team</h2>
                <Container className="m-md-2 cardGroup">
                    {error && <div>{error}</div>}
                    {isLoading && <div>Loading...</div>}
                    <div className="cardD">
                    {members &&
                        <div className="divCardOne">
                            {members.map((member) => (
                                <div className="divCard">
                                    <Card.Img variant="top" className="imagCard" src="https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                    <Card.Body>
                                        <Card.Title>{member.title}</Card.Title>
                                        <Card.Text>More details</Card.Text>
                                        <Nav>
                                            <Nav.Link as={Link} to={`/${member.id}`}>
                                                <Button variant="primary">Read more</Button>
                                            </Nav.Link>
                                        </Nav>
                                    </Card.Body>
                                </div>

                            ))}
                        </div>}
                    </div>
                    {/*// <Card className="card cardOne">*/}
                    {/*//     <Card.Img variant="top" src="https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>*/}
                    {/*//     <Card.Body>*/}
                    {/*//         <Card.Title>Developers</Card.Title>*/}
                    {/*//         <Card.Text>*/}
                    {/*//             Lorem ipsum dolor sit amet*/}
                    {/*//         </Card.Text>*/}
                    {/*//         <Button variant="primary">About team</Button>*/}
                    {/*//     </Card.Body>*/}
                    {/*// </Card>*/}
                    {/*// <Card className="card cardTwo">*/}
                    {/*//     <Card.Img variant="top" src="https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>*/}
                    {/*//     <Card.Body>*/}
                    {/*//         <Card.Title>Developers</Card.Title>*/}
                    {/*//         <Card.Text>*/}
                    {/*//             Lorem ipsum dolor sit amet*/}
                    {/*//         </Card.Text>*/}
                    {/*//         <Button variant="primary">About team</Button>*/}
                    {/*//     </Card.Body>*/}
                    {/*// </Card>*/}
                    {/*// <Card className="card cardThree">*/}
                    {/*//     <Card.Img variant="top" src="https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>*/}
                    {/*//     <Card.Body>*/}
                    {/*//         <Card.Title>Developers</Card.Title>*/}
                    {/*//         <Card.Text>*/}
                    {/*//             Lorem ipsum dolor sit amet*/}
                    {/*//         </Card.Text>*/}
                    {/*//         <Button variant="primary">About team</Button>*/}
                    {/*//     </Card.Body>*/}
                    {/*// </Card>*/}
                </Container>
            </Container>
        </>

    );
}

export default Home;
