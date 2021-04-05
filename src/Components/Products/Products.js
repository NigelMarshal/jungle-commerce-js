import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shirt', description: 'Black Tee', price: '$69'},
    {id: 2, name: 'Funko', description: 'Collectible', price: '$42'}
];

const Products = () =>{
    return (  
        <main>
            <Grid container justify="center" spacing={6}>
            {products.map((product) => (
                <Grid item key={product.id} >
                    <Product product={product} />
                </Grid>
            ))}
            </Grid>
        </main>
    )
  
}

export default Products;