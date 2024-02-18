import React from 'react';
import './Networks.css';
import { Card } from 'react-bootstrap';
import ArtNetworkImg from '../../utils/images/art-course.jpg';
import BusinessNetworkImg from '../../utils/images/business-course.jpg';
import ComputerScienceNetworkImg from '../../utils/images/computer-science-course.jpg';
import EducationNetworkImg from '../../utils/images/education-course.jpg';
import HealthcareNetworkImg from '../../utils/images/healthcare-course.jpg';
import LawNetworkImg from '../../utils/images/law-course.jpg';
import MusicNetworkImg from '../../utils/images/music-course.jpg';
import SportNetworkImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const networks = [
    {
        id: 1,
        img: [ArtNetworkImg],
        title: 'Art Network',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 2,
        img: [BusinessNetworkImg],
        title: 'Business Network',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 3,
        img: [ComputerScienceNetworkImg],
        title: 'Computer Science Network',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 4,
        img: [EducationNetworkImg],
        title: 'Education Network',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 5,
        img: [HealthcareNetworkImg],
        title: 'Healthcare Network',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 6,
        img: [LawNetworkImg],
        title: 'Law Network',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 7,
        img: [MusicNetworkImg],
        title: 'Music Network',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 8,
        img: [SportNetworkImg],
        title: 'Sport Network',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
];

function Networks() {
  return (
    <div className='Networks-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Networks</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {Networks.map((Network) => (
                    <div key={Network.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={Network.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{Network.title}</Card.Title>
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