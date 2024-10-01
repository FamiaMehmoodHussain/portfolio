

// import React, { useEffect, useState } from 'react';
// import { Col, Container, Row } from "react-bootstrap";
// import TrackVisibility from "react-on-screen";
// import profileImg from '../assets/img/nam.jpg';
// import profileAge from '../assets/img/age.png';
// import skillsImg from '../assets/img/skills.png';
// import schoolImg from '../assets/img/sch.jpg';
// import collegeImg from '../assets/img/school.jpg';
// import universityImg from '../assets/img/uni.png';
// import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';
// import 'animate.css';
// import './about.css'; // Import your CSS file here

// export const About = () => {
//     const [animatedText, setAnimatedText] = useState('');
//     const descriptions = [
//         "MERN Stack Developer",
//         "Passionate about creating interactive applications",
//         "Lifelong learner in technology"
//     ];
    
//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             setAnimatedText(descriptions[index]);
//             index = (index + 1) % descriptions.length;
//         }, 2000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="about" id="about">
//             <Container>
//                 <Row>
//                     <Col md={6}>
//                         <TrackVisibility>
//                             {({ isVisible }) => (
//                                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                                     <h2>About Me</h2>
//                                     <p>
//                                         I am Famia Mehmood.My father name is Mehmood.I am 21st year old.I Lives in Abbottabad
//                                     </p>
//                                     <p>
//                                      I'm a <span className="animated-text">{animatedText}</span> with a passion for developing and designing high-quality websites. I enjoy tackling complex challenges and creating innovative solutions.
//                                     </p>
//                                     <p>
//                                         With experience in React.js, Node.js, and various other technologies, I strive to deliver engaging user experiences.
//                                     </p>
//                                 </div>
//                             )}
//                         </TrackVisibility>
//                     </Col>
//                     <Col md={6}>
//                         <img src={profileImg} alt="fam" className="profile-img animate__animated animate__zoomIn" />
//                     </Col>
//                     <Col md={6}>
//                         <img src={profileAge} alt="fam" className="profile-img animate__animated animate__zoomIn" />
//                     </Col>
//                 </Row>

//                 <Row className="mt-5">
//                     <Col>
//                         <h2>Education</h2>
//                         <div className="education-item">
//                             <img src={universityImg} alt="University" className="education-img" />
//                             <FaUniversity size={80} />
//                             <h5>University Name</h5>
//                             <p> Comsats University Islamabad, Abbottabad Campus</p>
//                             <p>Year: 2020 - Present</p>
//                         </div>
//                         <div className="education-item">
//                             <img src={collegeImg} alt="College" className="education-img" />
//                             <FaGraduationCap size={80} />
//                             <h5>College Name</h5>
//                             <p> Army Public School And Collage, PMA Kakul</p>
//                             <p>Year: 2018 - 2020</p>
//                         </div>
//                         <div className="education-item">
//                             <img src={schoolImg} alt="School" className="education-img" />
//                             <FaSchool size={80} />
//                             <h5>School Name</h5>
//                             <p> Army Public School, PMA Kakul</p>
//                             <p>Year: 2016 - 2018</p>
//                         </div>
//                     </Col>
//                 </Row>

//                 <Row className="mt-5">
//                     <Col>
//                         <h2>Skills</h2>
//                         <p>Here are some of the technologies I work with:</p>
//                         <img 
//                             src={skillsImg} 
//                             alt="Skills" 
//                             className="skills-img" 
//                             style={{ 
//                                 width: '60%',
//                                 height: 'auto',
//                                 maxWidth: '1100px',
//                                 borderRadius: '18px',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
//                             }} 
//                         />
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import profileImg from '../assets/img/nm.avif';
 import profileAge from '../assets/img/age.png';
import skillsImg from '../assets/img/skills.png';
import schoolImg from '../assets/img/sch.jpg';
import collegeImg from '../assets/img/school.jpg';
import universityImg from '../assets/img/uni.png';
import { FaUniversity, FaGraduationCap, FaSchool, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import 'animate.css';
import './about.css'; // Import your CSS file here

export const About = () => {
    const [animatedText, setAnimatedText] = useState('');
    const descriptions = [
        "MERN Stack Developer",
        "Passionate about creating interactive applications",
        "Lifelong learner in technology"
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setAnimatedText(descriptions[index]);
            index = (index + 1) % descriptions.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>About Me</h2>
                                    <p>
                                        I am Famia Mehmood, a 21-year-old living in Abbottabad. 
                                    </p>
                                    <p>
                                        I'm a <span className="animated-text">{animatedText}</span> with a passion for developing and designing high-quality websites. I enjoy tackling complex challenges and creating innovative solutions.
                                    </p>
                                    <p>
                                        With experience in React.js, Node.js, and various other technologies, I strive to deliver engaging user experiences.
                                    </p>
                                    <blockquote>
                                        "The best way to predict the future is to invent it." - Alan Kay
                                    </blockquote>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col md={3}>
                        <img src={profileImg} alt="fam" className="profile-img animate__animated animate__zoomIn" />
                    </Col>
                    <Col md={3}>
//                         <img src={profileAge} alt="fam" className="profile-img animate__animated animate__zoomIn" />
//                     </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <h2>Education</h2>
                        <div className="education-cards">
                            <div className="education-item">
                                <img src={universityImg} alt="University" className="education-img" />
                                <FaUniversity size={80} />
                                <h5>Comsats University Islamabad</h5>
                                <p>Year: 2020 - Present</p>
                            </div>
                            <div className="education-item">
                                <img src={collegeImg} alt="College" className="education-img" />
                                <FaGraduationCap size={80} />
                                <h5>Army Public School And College</h5>
                                <p>Year: 2018 - 2020</p>
                            </div>
                            <div className="education-item">
                                <img src={schoolImg} alt="School" className="education-img" />
                                <FaSchool size={80} />
                                <h5>Army Public School</h5>
                                <p>Year: 2016 - 2018</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <h2>Skills</h2>
                        <p>Here are some of the technologies I work with:</p>
                        <div className="skills-container">
                            <img 
                                src={skillsImg} 
                                alt="Skills" 
                                className="skills-img" 
                                style={{ 
                                    width: '60%',
                                    height: 'auto',
                                    maxWidth: '1100px',
                                    borderRadius: '18px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                                }} 
                            />
                            {/* Progress Bars for Skills */}
                            <div className="progress-bar">
                                <span>React.js</span>
                                <div className="progress">
                                    <div className="progress-fill" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <span>Node.js</span>
                                <div className="progress">
                                    <div className="progress-fill" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <span>JavaScript</span>
                                <div className="progress">
                                    <div className="progress-fill" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                   
                </Row>
            </Container>
        </section>
    );
};

