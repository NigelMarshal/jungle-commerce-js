import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shirt', description: 'Black Tee', price: '$69'},
    {id: 2, name: 'Funko', description: 'Collectible', price: '$42'}
];

const Products = () =>{
    return (  
        <Container className="text-center">
            <Row>  
                {products.map((product) =>(
                    <Col item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product} /> 
                    </Col>
                ))}
            </Row>
        </Container>
    )
  
}

export default Products