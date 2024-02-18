import React from 'react';
import './Alumni.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Alumni1Img from '../../utils/images/blog1-img.jpg';
import Alumni2Img from '../../utils/images/blog2-img.jpg';
import Alumni3Img from '../../utils/images/blog3-img.jpg';
import Alumni4Img from '../../utils/images/blog4-img.jpg';
import Alumni5Img from '../../utils/images/blog5-img.jpg';
import Alumni6Img from '../../utils/images/blog6-img.jpg';
import Alumni7Img from '../../utils/images/blog7-img.jpg';
import Alumni8Img from '../../utils/images/blog8-img.jpg';
import Alumni9Img from '../../utils/images/blog9-img.jpg';

const alumnis = [
    {
        id: 1,
        img: [Alumni1Img],
        title: 'Alumni 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 2,
        img: [Alumni2Img],
        title: 'Alumni 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 3,
        img: [Alumni3Img],
        title: 'Alumni 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 4,
        img: [Alumni4Img],
        title: 'Alumni 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 5,
        img: [Alumni5Img],
        title: 'Alumni 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 6,
        img: [Alumni6Img],
        title: 'Alumni 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 7,
        img: [Alumni7Img],
        title: 'Alumni 7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 8,
        img: [Alumni8Img],
        title: 'Alumni 8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 9,
        img: [Alumni9Img],
        title: 'Alumni 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
];

function Alumni() {
  return (
    <div className='alumni-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Alumni</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {alumnis.map((Alumni) => (
                        <div key={Alumni.id} className='col-md-6 col-lg-4'>
                            <Link to="/Alumni" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={Alumni.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{Alumni.title}</Card.Title>
                                        <Card.Text className='text-center'>{Alumni.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Alumni;