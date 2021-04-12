import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const SingleProductPage = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <Container className='py-100'>
      <Row className='justify-content-center'>
        <Col lg={8}>
          <Card className='border-0'>
            <Card.Img variant='top' src={product.image} />
            <Card.Body className='px-0'>
              <h4 className='mb-0'>{product.name}</h4>
              <h1 className='py-3 text-danger'>${product.price}</h1>
              <div className='d-flex justify-content-between border-top border-bottom py-3'>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
                <div className=''>
                  {product.countInStock > 0
                    ? 'Available Now'
                    : 'Not Available Now'}
                </div>
              </div>
              <div className='py-3'>{product.description}</div>
              <div className='row align-items-center'>
                <div className='col-4'>Qty:</div>
                <div className='col-8'>
                  <Button
                    className='btn-block btn-danger text-uppercase'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add To cart
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProductPage;
