import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';

const Item = ({product}) => {
    const classes = useStyles();

    return (
       <Card className={classes.root}>
           <CardMedia className={classes.media} image={product.image} title={product.name}/>
           <CardContent>
               <div>
                   <Typography gutterBottom variant="h5" component="h2">
                       {product.name}
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                    <Typography>
                       {product.price}
                    </Typography>
               </div>
             
           </CardContent>
           <CardActions>
               <IconButton aria-label="Add item to cart">
                   <AddShoppingCart />
               </IconButton>
           </CardActions>
       </Card>
    )
}

export default Item
