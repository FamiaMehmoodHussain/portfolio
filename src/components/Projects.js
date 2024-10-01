
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './projects.css'; // Import your CSS file here
// import ecommerceImage from '../assets/img/shop.jpg';
// import htmlFormImage from '../assets/img/form.png';
// import foodAppImage from '../assets/img/food1.png';
// import navbarImage from '../assets/img/nav.jpg';
// import crudFoodImage from '../assets/img/food.png';
// import html from '../assets/img/htm.jpg';
// const projects = [
//     {
//         title: "Complete Ecommerce",
//         description: "A fully functional e-commerce application.",
//         githubLink: "https://github.com/FamiaMehmood/Complete-Ecommerce",
//         image:ecommerceImage
//     },
//     {
//         title: "HTML Form",
//         description: "A simple HTML form with validation.",
//         githubLink: "https://github.com/FamiaMehmood/HTML-Form",
//         image: htmlFormImage // Update with actual image path
//     },
//     {
//         title: "Food App",
//         description: "A food delivery app.",
//         githubLink: "https://github.com/MalaikaMehmood/Food",
//         image: foodAppImage  // Update with actual image path
//     },
   
//     {
//         title: "Simple Navbar",
//         description: "A simple responsive navbar.",
//         githubLink: "https://github.com/FamiaMehmood/simlpe-navbar",
//         image: navbarImage // Update with actual image path
//     },
//     {
//         title: "CRUD Food",
//         description: "A CRUD application for managing food items.",
//         githubLink: "https://github.com/MalaikaMehmood/crudfood",
//         image:crudFoodImage // Update with actual image path
//     },
//     {
//         title: "HTML",
//         description: "Basic html ",
//         githubLink: "https://github.com/FamiaMehmood/HTML-BASIC",
//         image: html // Update with actual image path
//     },
//     // Add more projects as needed
// ];

// export const Projects = () => {
//     return (
//         <section className="projects" id="projects">
//             <Container>
//                 <h2>My Projects</h2>
//                 <Row>
//                     {projects.map((project, index) => (
//                         <Col md={4} key={index} className="project-item">
//                             <div className="project-card">
//                                 <img src={project.image} alt={project.title} className="project-image" />
//                                 <h5>{project.title}</h5>
//                                 <p>{project.description}</p>
//                                 <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
//                                     View on GitHub
//                                 </a>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </section>
//     );
// };

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './projects.css'; // Import your CSS file here
import ecommerceImage from '../assets/img/shop.jpg';
import htmlFormImage from '../assets/img/form.png';
import foodAppImage from '../assets/img/food1.png';
import navbarImage from '../assets/img/nav.jpg';
import crudFoodImage from '../assets/img/food.png';
import html from '../assets/img/htm.jpg';

const projects = [
    {
        title: "Complete Ecommerce",
        description: "A fully functional e-commerce application.",
        githubLink: "https://github.com/FamiaMehmood/Complete-Ecommerce",
        image: ecommerceImage
    },
    {
        title: "HTML Form",
        description: "A simple HTML form with validation.",
        githubLink: "https://github.com/FamiaMehmood/HTML-Form",
        image: htmlFormImage
    },
    {
        title: "Food App",
        description: "A food delivery app.",
        githubLink: "https://github.com/MalaikaMehmood/Food",
        image: foodAppImage
    },
    {
        title: "Simple Navbar",
        description: "A simple responsive navbar.",
        githubLink: "https://github.com/FamiaMehmood/simlpe-navbar",
        image: navbarImage
    },
    {
        title: "CRUD Food",
        description: "A CRUD application for managing food items.",
        githubLink: "https://github.com/MalaikaMehmood/crudfood",
        image: crudFoodImage
    },
    {
        title: "HTML",
        description: "Basic HTML project.",
        githubLink: "https://github.com/FamiaMehmood/HTML-BASIC",
        image: html
    },
];

export const Projects = () => {
    return (
        <section className="projects" id="projects">
            <Container>
                <h2>My Projects</h2>
                <Row>
                    {projects.map((project, index) => (
                        <Col md={4} key={index} className="project-item">
                            <div className="project-card">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View on GitHub
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};



