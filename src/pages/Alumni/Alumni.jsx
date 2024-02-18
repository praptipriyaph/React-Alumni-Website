import React from 'react';
import './Alumni.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Alumni1Img from '../../utils/images/Uddipana Dihingia -1 .jpeg';
import Alumni2Img from '../../utils/images/Shreyasee Dev -2  .jpeg';
import Alumni3Img from '../../utils/images/Shravan Kumar -3  .jpeg';
import Alumni4Img from '../../utils/images/Jyotirmoy Poddar -4 .jpeg';
import Alumni5Img from '../../utils/images/Filza Piya Borah -5  .jpeg';
import Alumni6Img from '../../utils/images/Debojyoti Paul -6 .jpeg';
import Alumni7Img from '../../utils/images/Bishal Nath -7 .jpeg';
import Alumni8Img from '../../utils/images/Arindam Nandi -8.jpeg';
import Alumni9Img from '../../utils/images/Angshuman Biswas -9 .jpeg';

const alumnis = [
    {
        id: 1,
        img: [Alumni1Img],
        title: 'Uddipana Dihingia',
        description: 'Pursuing MBA, IIM - Amritsar (2020-21)',
        designation: 'Batch of 2018, B.Tech CSE'
        
    },
    {
        id: 2,
        img: [Alumni2Img],
        title: 'Shreyasee Dev',
        description: 'PG Diploma in Statistical Methods and Analytics, ISI, Kolkata (2019-20) ',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 3,
        img: [Alumni3Img],
        title: 'Shravan Kumar',
        description: 'Software Developer, Zwayam Digital Pvt. Ltd., Bangalore ',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 4,
        img: [Alumni4Img],
        title: 'Jyotirmoy Poddar',
        description: 'Software Engineer, Zaloni Technologies, Guwahati',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 5,
        img: [Alumni5Img],
        title: 'Filza Priya Borah',
        description: 'Associate Software Engineer, International Business Machines Corporation ',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 6,
        img: [Alumni6Img],
        title: 'Debjyoti Paul',
        description: 'Project Engineer, Wipro Limited',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 7,
        img: [Alumni7Img],
        title: 'Bishal Nath',
        description: 'Persuing M.E. (Software Systems), BITS - Pilani',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 8,
        img: [Alumni8Img],
        title: 'Arindam Nandi',
        description: 'Pursuing M.Tech (IT) IIIT - Allahabad',
        designation: 'Batch of 2018, B.Tech CSE'
    },
    {
        id: 9,
        img: [Alumni9Img],
        title: 'Angshuman Biswas',
        description: 'Pursuing M.Tech (CSE) IIT - Guwahati (2020-21)',
        designation: 'Batch of 2018, B.Tech CSE'
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