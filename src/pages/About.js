import React from "react";
import {Container, Row, Col, Nav, Tab, TabPane} from "react-bootstrap";
import {TabContent} from "react-bootstrap";
import "./about.scss";


function About() {
    return (
       <Container className='aboutContainer'>
           <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
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
                                <Nav.Link eventKey='fourth'>Coordonation Process</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth'>Organizer</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} className="secondCol">
                        <TabContent className="mt-3">
                            <TabPane eventKey="first">
                                <h2 className="text-primary">General framework</h2>
                                <img
                                    height={450}
                                    className="image"
                                    src="https://miro.medium.com/max/1400/0*94ztetxE4kXB4TWJ.png"
                                    alt="text"/>
                                <div className="tabPaneText mt-md-4">
                                    <p className='text-md-start'>This methodology is developed within the CodersLab project.
                                        The aim of the project aims at 3 main aspects that lead to the sustainable, dynamic and competitive development of the employees on a regional level, respectively: </p>
                                    <p className='text-md-start'>1) Supporting the participation in continuous professional training of 651 employees from less developed regions, including PFA and II, of which 196 employees will be from rural areas / over 40 years / with low level of qualification; </p>
                                    <p className='text-md-start'>2) Increasing the level of digital skills for at least 521 employees nationwide, including PFA and II, of which 157 employees will be from rural areas / over 40 years / with low level of qualification, by participating in Coders Lab courses as well as 66 employees who will continue to attend studies / training courses upon termination of participation; </p>
                                    <p className='text-md-start'>3) Increasing the flexibility on the labor market through professional information, coaching and career development for 651 employees at national level, including PFA and II, of which 196 employees will be from rural areas / over 40 years / with low level of qualification; </p>
                                    <p className='text-md-start'>4) Improving the employment status for 378 employees at national level by assigning them to a position corresponding to a more advanced qualification at the same employer or at a different employer; </p>
                                </div>
                            </TabPane>
                            <TabPane eventKey="second">
                                <h2 className="text-primary">Aplication domain</h2>
                                <div className="tabPaneImg">
                                    <img
                                        height={450}
                                        className="image"
                                        src="http://www.mildtechnologies.in/wp-content/uploads/2021/06/web.jpeg"
                                        alt="text"/>

                                </div>
                                <div className="tabPaneText mt-md-4">
                                    <p className='text-md-start'>This methodology is intended for use throughout the implementation of the sub-activity.
                                        The 651 employees (including PFA and II) registered in the target group of the project will participate
                                        to continuing professional computer programming courses - Coders Lab, conducted online. </p>
                                    <p className='text-md-start'>By accessing the training platform, as well as by the possibility of online access, from any area of the country,
                                        the project capitalizes on new technologies both to increase access to training materials and
                                        for the actual conduct of the training courses, offering, together with the counseling activities carried out online,
                                        an innovative package online through the project, giving the possibility of online access, from any area of the country,
                                        regardless of road infrastructure / material possibilities / work schedule, allowing members of the target group a
                                        facilitated access to training courses organized by the project. </p>
                                    <p className='text-md-start'>JavaScript courses are expected to run for a period of 4 to 4.5 months, and will be
                                        carried out by a mentor together with a trainer, who will ensure daily permanence between 08:00 and 22:00,
                                        to facilitate the access of employees to the courses held.</p>
                                </div>
                            </TabPane>
                            <TabPane eventKey="third">
                                <h2 className="text-primary">Course structure </h2>
                                <img
                                    className="image"
                                    src="https://www.trickyenough.com/wp-content/uploads/2020/08/development-scaled.jpg"
                                    height={450}
                                alt="text"/>
                                <div className="tabPaneText mt-md-4">
                                    <p className='text-md-center'>The Java Script course is divided into 7 modules: </p>
                                    <p className='text-md-start'>1. Prework module </p>
                                    <p className='text-md-start'>2. HTML and CSS module (theory: 17 hours, practice: 23 hours 4- Homework) </p>
                                    <p className='text-md-start'>3. Javascript module (theory: 14 hours, practice: 26 hours + Homework) </p>
                                    <p className='text-md-start'>4. Responsive Web Design Module (theory: 15 hours, practice: 25 hours + Homework)</p>
                                    <p className='text-md-start'>5. ES6 module (theory: 17 hours, practice: 23 hours + Homework) </p>
                                    <p className='text-md-start'>6. REACT module (theory: 12 hours, practice: 28 hours + Homework) </p>
                                    <p className='text-md-start'>7. Personal Project Module (practice: 40 hours) </p>
                                </div>
                            </TabPane>
                            <TabPane eventKey="fourth">
                                <h2 className="text-primary">Coordination and development</h2>
                                <img
                                    width={700}
                                    height={450}
                                    className="image"
                                    src="https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2021/05/iStock-1287248836-e1621605868669.jpg?av=a36b7d62765b763670cc008c374f192f"
                                    alt="text"/>
                                <div className="tabPaneText mt-md-4">
                                    <p className='text-md-start'>After signing the training contract each
                                        The course participant will receive an ID or username, with which they will log in
                                        course platform. The coding will be done as follows: Group number course_type course_ no.
                                        training register exp GR 01_JS_01 / 02 ..., etc. </p>
                                    <p className='text-md-start'>The stage starts with the transmission of the Preparatory Mode which
                                        students go through it individually, supported by the Mentor's advice where not
                                        they manage to go through the matter on their own. The training module is a training material
                                        preliminary with flexible program, which will be covered by future participants!
                                        until the actual start of the course. The purpose of this material is to get the participants used to it
                                        to the course with a certain terminology in the IT field and to "put them in the topic" with what follows
                                        to study during the 6 course modules. </p>
                                    <p className='text-md-start'>The subject consists of a theoretical part and a practical one.
                                        The practical part consists of exercises to implement the theoretical part.
                                        The course will be conducted by the Mentor teaching the course material
                                        (theoretical part) and solving the exercises by the students (practical part). </p>
                                    <p className='text-md-start'>Student progress is monitored by the following
                                        tools that also constitute annexes of the course development stage: - list
                                        of presence for the theoretical part and the progress report of each student from
                                        platform for the practical part.

                                    </p>
                                    <p className='text-md-start'>For the preparation of the practical project, a student
                                        has 40 hours from the date of communication of the requirements by email.
                                        Practical projects will be supported individually by each student and will get a
                                        score between 0 and 20 points. In order to pass the practical test, each student
                                        will have to obtain at least 10 points (grade 5).</p>
                                </div>
                            </TabPane>
                            <TabPane eventKey="fifth">
                                <h2 className="text-primary">Organization</h2>
                                <img
                                    height={450}
                                    className="image"
                                    src="https://images.squarespace-cdn.com/content/v1/55b80c26e4b0a6b779d3cf04/1486513271612-GRY1KO1RNW56X0RPSJAS/iStock_000055549354_Full+%281%29.jpg?format=750w"
                                    alt="text"/>
                                <div className="tabPaneText mt-md-4">
                                    <p className='text-md-center'>The Java Script course is organized by the Ejobs Romania team funded by the European Social Fund.

                                    </p>
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
