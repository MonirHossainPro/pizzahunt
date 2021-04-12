import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-100'>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col lg={6}>
            <h1 className='mb-0'>Pizza Hunt</h1>
            <small className='text-uppercase'>since 2010</small>
            <p className='mt-4'>
              This template created with 💗 by{' '}
              <a className='text-danger' href='http://monirhossain.com'>
                Monir Hossain
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
