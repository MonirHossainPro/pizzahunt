import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';
import productsData from '../products';
const Products = () => {
  return (
    <Container>
      <Row className='mt-30'>
        {productsData.map((product) => (
          <Col key={product._id} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
