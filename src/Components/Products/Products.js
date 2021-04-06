import React from 'react';
import {Grid} from '@material-ui/core';

import Item from './Item/Item'
import useStyles from './styles';

const products = [
    {id: 1, name: 'Shirt', description: 'Black Tee', price: '$69', image: 'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?k=6&m=483960103&s=612x612&w=0&h=zd1dW7NT13icZvBvgBam_y1gEQDSeVItRLF49ZMSkzk='},
    {id: 2, name: 'Funko', description: 'Collectible', price: '$42', image: 'https://i5.walmartimages.com/asr/8b0cb1dc-19df-4aa2-99c2-9fe46b2c85bf_1.fd362b7d91cab43adec6da09827bf706.png?odnWidth=612&odnHeight=612&odnBg=ffffff'}
];

const Products = () =>{
    const classes = useStyles();
    return (  
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container justify="center" spacing={6}>
            {products.map((product) => (
                <Grid item key={product.id} >
                    <Item product={product} />
                </Grid>
            ))}
            </Grid>
        </main>
    )
  
}

export default Products;