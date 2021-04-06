import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';

const Item = ({product, onAddToCart}) => {
    const classes = useStyles();
    return (
       <Card className={classes.root}>
           <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
           <CardContent>
               <div>
                   <Typography gutterBottom variant="h5" component="h2">
                       {product.name}
                   </Typography>
                   <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" component="p" />
                    <Typography>
                       {product.price.formatted_with_code}
                    </Typography>
               </div>
             
           </CardContent>
           <CardActions>
               <IconButton aria-label="Add item to cart" onClick={() => onAddToCart(product.id, 1)}>
                   <AddShoppingCart />
               </IconButton>
           </CardActions>
       </Card>
    )
}

export default Item
