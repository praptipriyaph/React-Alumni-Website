import React from 'react';
import './Alumni.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Alumni1Img from '../../utils/dept-img/app-sci.jpeg';
import Alumni2Img from '../../utils/dept-img/civ-engg.jpg';
import Alumni3Img from '../../utils/dept-img/cse.jpeg';
import Alumni4Img from '../../utils/dept-img/design.jpeg';
import Alumni5Img from '../../utils/dept-img/ee.jpeg';
import Alumni6Img from '../../utils/dept-img/ece.jpg';
import Alumni7Img from '../../utils/dept-img/energy.png';
import Alumni8Img from '../../utils/dept-img/fet.jpeg';
import Alumni9Img from '../../utils/dept-img/mech.jpeg';

const alumnis = [
    {
        id: 1,
        img: [Alumni1Img],
        title: 'Department of Applied Sciences',
        description: 'Pursuing MBA, IIM - Amritsar (2020-21)',
        designation: 'Batch of 2018, B.Tech CSE'
        
    },
    {
        id: 2,
        img: [Alumni2Img],
        title: 'Department of Civil Engineering',
    },
    {
        id: 3,
        img: [Alumni3Img],
        title: 'Department of Computer Science & Engineering',
        description: 'Software Developer, Zwayam Digital Pvt. Ltd., Bangalore ',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 4,
        img: [Alumni4Img],
        title: 'Department of Design',
        description: 'Software Engineer, Zaloni Technologies, Guwahati',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 5,
        img: [Alumni5Img],
        title: 'Department of Electrical Engineering',
        description: 'Associate Software Engineer, International Business Machines Corporation ',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 6,
        img: [Alumni6Img],
        title: 'Department of Electronics & Communication  Engineering',
        description: 'Project Engineer, Wipro Limited',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 7,
        img: [Alumni7Img],
        title: 'Department of Energy',
        description: 'Persuing M.E. (Software Systems), BITS - Pilani',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 8,
        img: [Alumni8Img],
        title: 'Department of Food Engineering & Technology',
        description: 'Pursuing M.Tech (IT) IIIT - Allahabad',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 9,
        img: [Alumni9Img],
        title: 'Department of Mechanical Engineering',
    },
    {
        id: 10,
        img: [Alumni9Img],
        title: 'Department of Assamese',
    },
    {
        id: 11,
        img: [Alumni9Img],
        title: 'Department of Cultural Studies',
    },
    {
        id: 12,
        img: [Alumni9Img],
        title: 'Department of Cultural Studies',
    },
    {
        id: 13,
        img: [Alumni9Img],
        title: 'Department of English',
    },
    {
        id: 14,
        img: [Alumni9Img],
        title: 'Department of Foreign Languages',
    },
    {
        id: 15,
        img: [Alumni9Img],
        title: 'Department of Linguistics & Language Technology',
    },
    {
        id: 16,
        img: [Alumni9Img],
        title: 'Department of Mass Communication & Journalism',
    },
    {
        id: 17,
        img: [Alumni9Img],
        title: 'Department of Sociology',
    },
    {
        id: 18,
        img: [Alumni9Img],
        title: 'Department of Hindi',
    },
    {
        id: 19,
        img: [Alumni9Img],
        title: 'Department of Social Work',
    },
    {
        id: 20,
        img: [Alumni9Img],
        title: 'Department of Education',
    },
    {
        id: 21,
        img: [Alumni9Img],
        title: 'Department of Law',
    },
    {
        id: 22,
        img: [Alumni9Img],
        title: 'Department of Business Administration',
    },
    {
        id: 23,
        img: [Alumni9Img],
        title: 'Department of Commerce',
    },
    {
        id: 24,
        img: [Alumni9Img],
        title: 'Department of Chemical Science',
    },
    {
        id: 25,
        img: [Alumni9Img],
        title: 'Department of Environmental Science',
    },
    {
        id: 26,
        img: [Alumni9Img],
        title: 'Department of Mathematical Science',
    },
    {
        id: 27,
        img: [Alumni9Img],
        title: 'Department of Molecular Biology & Biotechnology',
    },
    {
        id: 28,
        img: [Alumni9Img],
        title: 'Department of Physics',
    },
];

function Alumni() {
  return (
    <div className='alumni-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Alumni</h1>
                <p className='text-center w-75 mb-5'>Explore our global network of alumni, spanning across continents and cultures, united by shared experiences and boundless opportunities. Join us as we celebrate the diverse journeys and remarkable achievements of our graduates, making an impact in every corner of the world.</p>
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
                                        <Card.Text className='text-center'>{Alumni.description}<br/><br/>{Alumni.designation}</Card.Text>
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