
// import { Col, Container, Row } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import meter1 from '../assets/img/meter1.svg';
// import meter2 from '../assets/img/meter2.svg';
// import meter3 from '../assets/img/meter3.svg';
// import colorSharp from '../assets/img/color-sharp.png';
// import './Skills.css'; // Import the CSS file

// export const Skills = () => {
//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };

//     return (
//         <section className="skill" id="skills">
//             <Container>
//                 <Row>
//                     <Col>
//                         <div className="skill-bx">
//                             <h2>Skills</h2>
//                             <p>
//                                 Skills and proficiency is the greatest miracle that a man needs. It is the skills that you have acquired through difficulties that will give you the desired result.
//                             </p>

//                             <Carousel responsive={responsive} infinite={true} className="skill-slider">
//                                 <div className="item">
//                                     <img src={meter1} alt="" />
//                                     <h5>Web Development</h5>
//                                 </div>
//                                 <div className="item">
//                                     <img src={meter2} alt="" />
//                                     <h5>Brand Identity</h5>
//                                 </div>
//                                 <div className="item">
//                                     <img src={meter3} alt="" />
//                                     <h5>Logo Design</h5>
//                                 </div>
//                                 <div className="item">
//                                     <img src={meter3} alt="" />
//                                     <h5>Mobile App Design</h5>
//                                 </div>
//                                 <div className="item">
//                                     <img src={meter3} alt="" />
//                                     <h5>Coder</h5>
//                                 </div>
//                                 <div className="item">
//                                     <img src={meter1} alt="" />
//                                     <h5>Web Development</h5>
//                                 </div>
//                             </Carousel>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>

//             <img src={colorSharp} alt="" className="background-image-left" />
//         </section>
//     )
// }


import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import './Skills.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                Skills and proficiency are essential to achieving your goals. Here are my core skills:
                            </p>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {[
                                    { img: meter1, title: "Web Development" },
                                    { img: meter2, title: "Brand Identity" },
                                    { img: meter3, title: "Logo Design" },
                                    { img: meter1, title: "Mobile App Design" },
                                    { img: meter2, title: "Frontend Development" },
                                    { img: meter3, title: "Backend Development" },
                                ].map((item, index) => (
                                    <div key={index} className="item" data-aos="fade-up">
                                        <img src={item.img} alt="" />
                                        <h5>{item.title}</h5>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${index * 10 + 50}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
    );
}


