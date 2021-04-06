import React from 'react';
import {Card, CardContent, Button, CardMedia, Typography, CardActions} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';

const CheckoutCartItem = ({item}) => {
    const classes = useStyles();

    return (
    <Card>
        <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" >
                {item.name}
            </Typography>
            <Typography  variant="h6">
                {item.line_total.formatted_with_symbol}
            </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <div className={classes.buttons}>
                <Button type="button" size="small">-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small">+</Button>
            </div>
        <Button variant="contained" type="button" color="secondary">
            {<DeleteIcon />}
        </Button>
        </CardActions>
    </Card>
    )
}

export default CheckoutCartItem
