import React from 'react';
import { Card } from 'react-bootstrap';
import './ChooseSection.css';

function ChooseSection() {
  return (
    <div>
        <div className="container">
            <h2 className='text-center mb-5'>Where are our Alumni ?</h2>
            <div className='row g-4'>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <img className='icon' src="/academic.png" alt="Academic" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Academic Pioneers
                            </Card.Title>
                            <Card.Text className='text-center'>
                            From groundbreaking research to scholarly publications, our alumni have embodied the essence of intellectual excellence and they continue to inspire future generations through their profound impact on academia.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <img className='icon' src="/manager.png" alt="Tech Leader" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Global Industry Leaders
                            </Card.Title>
                            <Card.Text className='text-center'>
                            Our alumni are shaping the landscape of various industries with their vision, expertise, and leadership, leaving an indelible mark on the international business arena.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <img className='icon' src="/startup.png" alt="Startup" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Startup Triumphs
                            </Card.Title>
                            <Card.Text className='text-center'>
                            Celebrating innovation, resilience, and business acumen as their startups have not only survived the challenges of the business landscape but have thrived, leaving an enduring impact on the entrepreneurial ecosystem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseSection;