import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';
import axios from 'axios';

const Products = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const { data } = await axios.get('/api/products');
      setPizzas(data);
    };
    fetchPizzas();
  }, []);

  return (
    <Container>
      <Row className='mt-30'>
        {pizzas.map((product) => (
          <Col key={product._id} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
