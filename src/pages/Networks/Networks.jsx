import React from 'react';
import './Networks.css';
import { Card } from 'react-bootstrap';
import ArtNetworkImg from '../../utils/images/leading-researchers.jpg';
import BusinessNetworkImg from '../../utils/images/business-course.jpg';
import ComputerScienceNetworkImg from '../../utils/images/computer-science-course.jpg';
import EducationNetworkImg from '../../utils/images/educators-and-scholars.jpg';
import HealthcareNetworkImg from '../../utils/images/public-servants.jpg';
import LawNetworkImg from '../../utils/images/law-course.jpg';
import MusicNetworkImg from '../../utils/images/philanthropists-and-social-leaders.jpg';
import SportNetworkImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const networks = [
    {
        id: 1,
        img: [ArtNetworkImg],
        title: 'Leading Researchers',
        description: 'Exploring the frontiers of knowledge, our leading researchers contribute to the ever-growing tapestry of human understanding. Their work spans disciplines, unraveling mysteries and pushing boundaries.'
    },
    {
        id: 2,
        img: [BusinessNetworkImg],
        title: 'Industry Experts',
        description: 'Drawing from years of experience, our industry experts navigate the intricate world of business. Their journeys are a testament to resilience, adaptability, and the invaluable lessons learned through challenges.'
    },
    {
        id: 3,
        img: [ComputerScienceNetworkImg],
        title: 'Innovators in Tech',
        description: 'At the intersection of creativity and technology, our computer science innovators redefine what is possible. Their contributions pave the way for advancements that shape the digital landscape.'
    },
    {
        id: 4,
        img: [EducationNetworkImg],
        title: 'Educators and Scholars',
        description: 'Dedicated to knowledge dissemination, our educators and scholars inspire minds. Through teaching, research, and mentorship, they contribute to the intellectual growth of individuals and communities.'
    },
    {
        id: 5,
        img: [HealthcareNetworkImg],
        title: 'Public Servants',
        description: 'Championing public welfare, our alumni in public service make meaningful impacts. Their dedication to the greater good shapes policies, enhances healthcare, and fosters social well-being.'
    },
    {
        id: 6,
        img: [LawNetworkImg],
        title: 'Legal Luminaries',
        description: 'Navigating the complexities of justice, our legal luminaries uphold the principles of fairness. Their work spans diverse legal realms, shaping the legal landscape and ensuring equity for all.'
    },
    {
        id: 7,
        img: [MusicNetworkImg],
        title: 'Philanthropists and Social Leaders',
        description: 'Committed to making a positive impact, our philanthropic alumni are at the forefront of social change. Their endeavors promote inclusivity, compassion, and contribute to community well-being.'
    },
    {
        id: 8,
        img: [SportNetworkImg],
        title: 'Sports Icons',
        description: 'Beyond the arena, our sports icons epitomize discipline, teamwork, and achievement. Their journey showcases the transformative power of sportsmanship, inspiring future generations.'
    },
];

function Networks() {
  return (
    <div className='networks-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Network</h1>
                <p className='text-center w-75 mb-5'>Explore our global network of alumni, spanning across continents and cultures, united by shared experiences and boundless opportunities. Join us as we celebrate the diverse journeys and remarkable achievements of our graduates, making an impact in every corner of the world.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {networks.map((Network) => (
                    <div key={Network.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={Network.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title style={{ color: '#9CFEFF' , paddingBottom: '3.9vh'}} className='fs-1'>{Network.title}</Card.Title>
                                <Card.Text className='text-center'>{Network.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Networks;