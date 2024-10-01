// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './achievements.css'; // Ensure to create and import your CSS file

// const achievementsData = [
//     {
//         title: "Completed MERN Stack Development Bootcamp",
//         year: "2023",
//         description: "Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js.",
//     },
//     {
//         title: "Published Open Source Projects",
//         year: "2022",
//         description: "Contributed to various open-source projects on GitHub, improving my coding skills and collaborating with others.",
//     },
//     {
//         title: "Won 1st Place in Local Hackathon",
//         year: "2021",
//         description: "Developed a web application that connects local businesses with customers, receiving recognition for creativity and impact.",
//     },
//     {
//         title: "Certified Java Programmer",
//         year: "2020",
//         description: "Achieved certification in Java programming, demonstrating proficiency in core concepts and problem-solving skills.",
//     },
// ];

// const Achievements = () => {
//     return (
//         <section className='achievements' id='achievements'>
//             <Container>
//                 <h2 className='section-title'>My Achievements</h2>
//                 <Row>
//                     {achievementsData.map((achievement, index) => (
//                         <Col key={index} md={6} lg={4}>
//                             <div className='achievement-card'>
//                                 <h3>{achievement.title}</h3>
//                                 <p className='year'>{achievement.year}</p>
//                                 <p>{achievement.description}</p>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default Achievements;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './achievements.css'; // Ensure to create and import your CSS file

const achievementsData = [
    {
        title: "Completed MERN Stack Development Bootcamp",
        year: "2022",
        description: "Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js.",
        image: require('../assets/img/achive.webp'), // Add your image path
    },
    {
        title: "PAF",
        year: "2022",
        description: "Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js.",
        image: require('../assets/img/paf.JPG'), // Add your image path
    },
    {
        title: "PMA English Test",
        year: "2021",
        description: "Contributed to various open-source projects on GitHub, improving my coding skills and collaborating with others.",
        image: require('../assets/img/eng.JPG'), // Add your image path
    },
   
    {
        title:"University",
        year: "2022",
        description: "Developed a web application that connects local businesses with customers, receiving recognition for creativity and impact.",
        image: require('../assets/img/uni.png'), // Add your image path
    },
    {
        title:"Collage",
        year: "2022",
        description: "Developed a web application that connects local businesses with customers, receiving recognition for creativity and impact.",
        image: require('../assets/img/ach.jpg'), // Add your image path
    },
    {
        title: "School",
        year: "2020",
        description: "Achieved certification in Java programming, demonstrating proficiency in core concepts and problem-solving skills.",
        image: require('../assets/img/sch.jpg'), // Add your image path
    },
];

const Achievements = () => {
    return (
        <section className='achievements' id='achievements'>
            <Container>
                <h2 className='section-title'>My Achievements</h2>
                <Row>
                    {achievementsData.map((achievement, index) => (
                        <Col key={index} md={6} lg={4}>
                            <div className='achievement-card'>
                                <img src={achievement.image} alt={achievement.title} className='achievement-image' />
                                <h3>{achievement.title}</h3>
                                <p className='year'>{achievement.year}</p>
                                <p>{achievement.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Achievements;
