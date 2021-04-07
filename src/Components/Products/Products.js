import React from 'react';
import {Grid} from '@material-ui/core';

import Item from './Item/Item'
import useStyles from './styles';


const Products = ({products, onAddToCart}) =>{
    const classes = useStyles();
    return (  
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container justify="center" spacing={6}>
            {products.map((product) => (
                <Grid item key={product.id} className={classes.flex} >
                    <Item product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
            </Grid>
        </main>
    )
  
}

export default Products;