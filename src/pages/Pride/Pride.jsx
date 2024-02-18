import React from 'react';
import './Pride.css';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import PrideUsSectionImg from '../../utils/images/pride-pro.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';


const persons = [
  { id: 1, img: Person2 },
  { id: 2, img: Person4 },
  { id: 3, img: Person8 },
  { id: 4, img: Person7 },
  { id: 5, img: Person5 },
  { id: 6, img: Person6 },
  { id: 7, img: Person3 },
  { id: 8, img: Person1 },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

function Pride() {
  return (
    <div className='pride-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold pb-4'>What Makes Us Proud ?</h1>
                <p className='text-center w-75 mb-5'>What makes us proud at Tezpur University is our unwavering commitment to academic excellence, fostering innovation, and nurturing leaders of tomorrow. Our vibrant community of alumni continues to make significant contributions across diverse fields, embodying the spirit of excellence and service that defines Tezpur University. Together, we celebrate our shared achievements and the transformative impact we have on society.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Their Achievements are our Pride</h2>
                    <p>Our students stand as the cornerstone of our pride at Tezpur University, embodying the values of academic excellence, integrity, and resilience. With a passion for learning and a commitment to making a difference, they continuously inspire us with their innovative ideas, groundbreaking research, and exemplary leadership both within the campus and beyond. </p>
                    <p className='mb-4 mb-lg-5'>Through their achievements in academics, research, sports, arts, and community service, our students demonstrate the transformative power of education and exemplify the spirit of excellence that defines Tezpur University. As they embark on their journeys post-graduation, we take immense pride in their accomplishments and remain committed to supporting them as they continue to make meaningful contributions to society.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Reach Our Alumni</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={PrideUsSectionImg} className='img-fluid w-auto' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>      
        
        <div className='bg-body-tertiary py-5'>
        <div className="container">
          <h2 className='text-center mb-5'>Hall of Fame</h2>
          <div className='masonry-grid'>
            {persons.map((person) => (
              <img key={person.id} src={person.img} className='img-fluid' alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pride;