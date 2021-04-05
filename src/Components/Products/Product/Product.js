import React from 'react'
import {Col} from 'react-bootstrap/';

const Product = ({product}) => {
    return (
        <div>
            <Col title={product.name}>
                <p>{product.name}</p>
            </Col>

        </div>
    )
}

export default Product
