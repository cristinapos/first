import React from "react";
import {Container, Row, Col, Nav, Tab, TabPane} from "react-bootstrap";
import {Link} from "react-router-dom";
import {TabContent} from "react-bootstrap";
import "./about.scss";


function About() {
    return (
       <Container className='aboutContainer'>
           <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={3} className='navCols'>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Introduction</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Aplication Domain</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Course Structure</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fourth'>Examination Process</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth'>Organizing Team</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} className="secondCol">
                        <TabContent className="mt-3">
                            <TabPane eventKey="first">
                                <h2>Cadrul general</h2>
                                <img
                                    height={500}
                                    className="image"
                                    src="https://images.pexels.com/photos/1888000/pexels-photo-1888000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                <div className="tabPaneText">
                                    <p className='text-md-start'>Prezenta metodologie este elaborată în cadrul proiectului CodersLab.
                                        Scopul proiectului vizeaza 3 aspecte principale care conduc la dezvoltarea sustenabila, dinamica si competitiva a angajatilor pe plan regional, respectiv:</p>
                                    <p className='text-md-start'> 1) Susținerea participării la formare profesionala continua a 651 de angajați din regiunile mai puțin dezvoltate, inclusiv PFA si II, din care 196 angajați vor fi din mediul rural/ peste 40 ani/cu nivel scăzut de calificare; </p>
                                    <p className='text-md-start'> 2) Creșterea nivelului de competente digitale pentru minim 521 de angajați la nivel national, inclusiv PFA si II, din care 157 angajați vor fi din mediul rural/ peste 40 ani/cu nivel scăzut de calificare, prin participarea la cursurile Coders Lab precum si a 66 de angajați care vor continua sa urmeze studii/ cursuri de formare la încetarea calitatii de participant;</p>
                                    <p className='text-md-start'> 3) Creșterea flexibilității pe piața muncii prin informare profesionala, coaching si dezvoltarea carierei pentru 651 de angajați la nivel national, inclusiv PFA si II, din care 196 angajați vor fi din mediul rural/ peste 40 ani/cu nivel scăzut de calificare;</p>
                                    <p className='text-md-start'> 4) Imbunatatirea statutului in câmpul muncii pentru 378 de angajați la nivel national prin încadrarea intr-o funcție corespunzătoare unei calificări mai avansate la același angajator sau la angajator diferit;</p>
                                </div>
                            </TabPane>
                            <TabPane eventKey="second">
                                <h2>Lorem ipsum</h2>
                                <div className="tabPaneImg">
                                    <img
                                        height={500}
                                        className="image"
                                        src="https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>

                                </div>
                                <div className="tabPaneText">
                                    <p className='text-md-start'>Prezenta metodologie este destinată utilizării pe tot parcursul implementării subactivității.
                                        Cei 651 de angajați (inclusiv PFA si II) inscrisi in grupul tinta al proiectului vor participa
                                        la cursuri de formare profesionala continua de programare pe calculator - Coders Lab, derulate online.</p>
                                    <p className='text-md-start'>Prin accesul la platforma de formare, precum si prin posibilitatea de acces online, din orice zona a tarii,
                                        proiectul valorifica noile tehnologii atat pentru creșterea accesului la materialele de instruire, cat si
                                        pentru derularea propriu zisa a cursurilor de formare, oferind, împreuna cu activitatile de consiliere derulate online,
                                        un pachet inovativ online prin intermediul proiectului, dând posibilitatea de acces online, din orice zona a tarii,
                                        indiferent de infrastructura rutiera/posibilitati materiale/ program de munca, permițând membrilor grupului tinta un
                                        acces facilitat la cursurile de formare organizate prin proiect.</p>
                                    <p className='text-md-start'>Cursurile de JavaScript se estimează, conform planificării, sa se desfasoare pe o perioada de 4- 4,5 luni si vor fi
                                        derulate de un mentor împreuna cu un formator, care vor asigura permanenta zilnica în intervalul orar 08:00 - 22:00,
                                        pentru a facilita accesul persoanelor angajate la cursurile desfășurate.</p>
                                </div>
                            </TabPane>
                        </TabContent>

                    </Col>
                </Row>
           </Tab.Container>
       </Container>
    );
}

export default About;
