import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Explore our Frequently Asked Questions for quick answers to common queries. If you can't find what you're looking for, feel free to reach out to our team for personalized assistance.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What upcoming events are being organized by the alumni association?</Accordion.Header>
                    <Accordion.Body>
                    Check our events calendar regularly for updates on reunions, networking mixers, professional development workshops, and other alumni gatherings.                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can I register for reunions and gatherings?</Accordion.Header>
                    <Accordion.Body>
                    Registration for events can typically be done through our website or by contacting the alumni events coordinator directly.                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Are there any networking opportunities or professional development events?</Accordion.Header>
                    <Accordion.Body>
                    Yes, we regularly host networking events and workshops aimed at helping alumni enhance their professional skills and expand their networks.                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How can I contact any alumni?</Accordion.Header>
                    <Accordion.Body>
                    Simply go to "Get in Touch" page to contact any alumni.                   </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;