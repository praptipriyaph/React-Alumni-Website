import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import alumni1Img from '../../utils/images/blog1-img.jpg';
import alumni2Img from '../../utils/images/blog2-img.jpg';
import alumni3Img from '../../utils/images/blog3-img.jpg';

const alumnis = [
    {
        id: 1,
        img: [alumni1Img],
        title: 'alumni 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 2,
        img: [alumni2Img],
        title: 'alumni 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 3,
        img: [alumni3Img],
        title: 'alumni 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    }
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>The Alumni Society</h1>
                <h2 className='last'>Tezpur University</h2>
                <p className='last'>Welcome to our Alumni Society, where memories are cherished, connections are rekindled, and futures are shaped. Join our vibrant community of accomplished graduates as we celebrate achievements, foster lifelong relationships, and empower the next generation of leaders.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/alumni">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Alumni</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Reach Out</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>Know All About Our Network</h2>
                        <p>Explore our global network of alumni, spanning across continents and cultures, united by shared experiences and boundless opportunities. Join us as we celebrate the diverse journeys and remarkable achievements of our graduates, making an impact in every corner of the world.</p>
                        <Link to="/networks">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Explore More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='alumni-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Some of our Esteemed Alumni</h2>
                <div className='row g-4'>
                    {alumnis.map((alumni) => (
                        <div key={alumni.id} className='col-md-6 col-lg-4'>
                            <Link to="/alumni" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={alumni.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{alumni.title}</Card.Title>
                                        <Card.Text>{alumni.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/alumni">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Know them All</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;