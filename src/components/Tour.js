
// import { Col, Container, Row } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import guideIcon from '../assets/img/baloch.jpg'; 
// import itineraryIcon from '../assets/img/cofeebook.jpg';
// import bookingIcon from '../assets/img/jla.jpg';

// import tourImage from '../assets/img/back.jpg'; 
// import './tour.css';

// export const Tour = () => {
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

//     const imageSlices = [
//         { src: guideIcon, title: "Tour Guiding" },
//         { src: itineraryIcon, title: "Itinerary Planning" },
//         { src: bookingIcon, title: "Booking Management" },
//         { src: guideIcon, title: "Travel Consulting" },
//         { src: itineraryIcon, title: "Customer Service" },
//         { src: bookingIcon, title: "Local Experience" },
    
//     ];

//     return (
//         <section className="tour" id="tour">
//             <Container>
//                 <Row>
//                     <Col>
//                         <div className="skill-bx">
//                             <h1>Tour Expertise</h1>
//                             <p>
//                                 Navigating through the world of travel requires specific skills. Our expertise ensures memorable experiences, from planning to execution.
//                             </p>

//                             <Carousel responsive={responsive} infinite={true} className="skill-slider">
//                                 {imageSlices.map((slice, index) => (
//                                     <div className="item" key={index}>
//                                         <img src={slice.src} alt={slice.title} />
//                                         <h5>{slice.title}</h5>
//                                     </div>
//                                 ))}
//                             </Carousel>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row>
//                     {imageSlices.map((slice, index) => (
//                         <Col md={4} key={index} className="image-slice-card">
//                             <div className="card">
//                                 <img src={slice.src} alt={slice.title} className="card-image" />
//                                 <h5 className="card-title">{slice.title}</h5>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//             <img 
//     src={tourImage} 
//     alt="Background" 
//     className="background-image-left" 
//     style={{
//         position: 'absolute',
//         top: 0,
//         left:0,
//         width: '100%',
//         height: 'auto',
//         zIndex: -1, 
//         opacity: 0.5 
//     }} 
// />
//         </section>
//     );
// };

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import guideIcon from '../assets/img/baloch.jpg'; 
import shim from '../assets/img/shimla2.jpg';
import itineraryIcon from '../assets/img/cofeebook.jpg';
import bookingIcon from '../assets/img/jla.jpg';
import metro from '../assets/img/metroisla.JPG';
import mur from '../assets/img/muree.jpg';
import kfc from '../assets/img/kfc.jpg'; 
import  shin from '../assets/img/shinkari.jpg'; 
import hor from '../assets/img/harnoii.jpg'; 

import './tour.css';

export const Tour = () => {
    const imageSlices = [
        { src: shin, title: "shinkari" },
        { src: guideIcon, title: "Baloch Record" },
        { src: itineraryIcon, title: "CoffeeAndBooks" },
        { src: bookingIcon, title: "JLA" },
        { src: metro, title: "Metro Islamabad" },
        { src: mur, title: "Muree" },
        { src: kfc, title: "KFC" },
        { src: hor, title: "Hornoi Lake" },
        { src: shim, title: "Shimla" },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSlices.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="tour" id="tour">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>Tour Expertise</h1>
                            <p>
                                Navigating through the world of travel requires specific skills. Our expertise ensures memorable experiences, from planning to execution.
                            </p>

                            <div className="rotating-image" style={{ textAlign: 'center', position: 'relative' }}>
                                <img 
                                    src={imageSlices[currentImageIndex].src} 
                                    alt={imageSlices[currentImageIndex].title} 
                                    className="skill-image" 
                                    style={{ 
                                        width: '80%', 
                                        maxWidth: '400px', 
                                        transition: 'opacity 0.5s ease' 
                                    }} 
                                />
                                <h5>{imageSlices[currentImageIndex].title}</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {imageSlices.map((slice, index) => (
                        <Col md={4} key={index} className="image-slice-card">
                            <div className="card">
                                <img src={slice.src} alt={slice.title} className="card-image" />
                                <h5 className="card-title">{slice.title}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            
           
        </section>
    );
};

