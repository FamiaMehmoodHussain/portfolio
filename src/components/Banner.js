
// import { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import headerImg from '../assets/img/header-img.svg';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import './banner.css'; // Make sure to import your CSS

// export const Banner = () => {
//     const [loopNum, setLoopNum] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
//     const [text, setText] = useState('');
//     const [delta, setDelta] = useState(300 - Math.random() * 100);
//     const period = 2000;

//     useEffect(() => {
//         let ticker = setInterval(() => {
//             tick();
//         }, delta);

//         return () => { clearInterval(ticker) };
//     }, [text]);

//     const tick = () => {
//         let i = loopNum % toRotate.length;
//         let fullText = toRotate[i];
//         let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//         setText(updatedText);

//         if (isDeleting) {
//             setDelta(prevDelta => prevDelta / 2);
//         }

//         if (!isDeleting && updatedText === fullText) {
//             setIsDeleting(true);
//             setDelta(period);
//         } else if (isDeleting && updatedText === '') {
//             setIsDeleting(false);
//             setLoopNum(loopNum + 1);
//             setDelta(500);
//         }
//     };

//     return (
//         <section className='banner' id='home'>
//             <Container>
//                 <Row className="align-items-center">
//                     <Col xs={12} md={6} xl={7}>
//                         <TrackVisibility>
//                             {({ isVisible }) =>
//                                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                                     <span className='tagline'>
//                                         Welcome to my Portfolio
//                                     </span>

//                                     <h1>
//                                         {`Hi, I'm Famia webdecoded`} <span className='wrap'>{text}</span>
//                                     </h1>

//                                     <p>
//                                         I am a MERN stack developer with expertise in React.js, Node.js, as well as C, C++, and Java.
//                                     </p>

//                                     <button onClick={() => console.log('connect')}>
//                                         Let's connect <ArrowRightCircle size={25} />
//                                     </button>
//                                 </div>
//                             }
//                         </TrackVisibility>
//                     </Col>

//                     <Col xs={12} md={6} xl={5}>
//                         <img src={headerImg} alt="header img" />
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };



// import { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import myImage from '../assets/img/Me.jpg'; // Replace with your actual image path
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import './banner.css'; // Make sure to import your CSS

// export const Banner = () => {
//     const [loopNum, setLoopNum] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
//     const [text, setText] = useState('');
//     const [delta, setDelta] = useState(300 - Math.random() * 100);
//     const period = 2000;

//     useEffect(() => {
//         let ticker = setInterval(() => {
//             tick();
//         }, delta);

//         return () => { clearInterval(ticker) };
//     }, [text]);

//     const tick = () => {
//         let i = loopNum % toRotate.length;
//         let fullText = toRotate[i];
//         let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//         setText(updatedText);

//         if (isDeleting) {
//             setDelta(prevDelta => prevDelta / 2);
//         }

//         if (!isDeleting && updatedText === fullText) {
//             setIsDeleting(true);
//             setDelta(period);
//         } else if (isDeleting && updatedText === '') {
//             setIsDeleting(false);
//             setLoopNum(loopNum + 1);
//             setDelta(500);
//         }
//     };

//     return (
//         <section className='banner' id='home'>
//             <Container>
//                 <Row className="align-items-center">
//                     <Col xs={12} md={6} xl={7}>
//                         <TrackVisibility>
//                             {({ isVisible }) =>
//                                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                                     <span className='tagline'>
//                                         Welcome to my Portfolio
//                                     </span>

//                                     <h1>
//                                         {`Hi, I'm Famia webdecoded`} <span className='wrap'>{text}</span>
//                                     </h1>

//                                     <p>
//                                         I am a MERN stack developer with expertise in React.js, Node.js, as well as C, C++, and Java.
//                                     </p>

//                                     <button onClick={() => console.log('connect')}>
//                                         Let's connect <ArrowRightCircle size={25} />
//                                     </button>
//                                 </div>
//                             }
//                         </TrackVisibility>
//                     </Col>

//                     <Col xs={12} md={6} xl={5}>
//                         <img src={myImage} alt="My Profile" className="profile-img" />
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import myImage from '../assets/img/Me.jpg'; // Replace with your actual image path
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './banner.css'; // Make sure to import your CSS

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Welcome to my Portfolio</span>

                                    <h1>
                                        {`Hi, I'm Famia webdecoded`} <span className='wrap'>{text}</span>
                                    </h1>

                                    <p>
                                        I am a MERN stack developer with expertise in React.js, Node.js, as well as C, C++, and Java.
                                    </p>

                                    <div className="cta-buttons">
                                        <button className="btn btn-primary" onClick={() => console.log('connect')}>
                                            Let's connect <ArrowRightCircle size={25} />
                                        </button>
                                        <a href="https://github.com/yourusername" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                            View GitHub
                                        </a>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5} className="profile-img-container">
                        <img src={myImage} alt="My Profile" className="profile-img" />
                        <div className="overlay"></div> {/* Overlay for effect */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};





