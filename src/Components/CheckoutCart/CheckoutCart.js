import React from 'react'
import {Typography, Container, Grid, Button} from '@material-ui/core';
import CheckoutCartItem from './CheckoutCartItem/CheckoutCartItem';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';

import useStyles from './styles';

const CheckoutCart = ({ 
    cart,
    handleUpdateItemQuantity,
    handleRemoveFromCart,
    handleEmptyCart}) => {

    const isCartEmpty = !cart.line_items?.length;
    
    const classes = useStyles();

    const CreateEmptyCart = () => (
        <Typography variant="subtitle1">You have nothing in your cart!
            <Link to="/" className={classes.link}> Click here to waste your money on fancy things</Link>            
        </Typography>
    );

    const CreateFilledCart = ({item}) => (
        <React.Fragment>
            <Grid container spacing={4}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={3} key={item.id}>
                        <CheckoutCartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateItemQuantity={handleUpdateItemQuantity}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4" color="primary">
                        Total {cart.subtotal.formatted_with_code}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton}
                        size="medium"
                        type="button"
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={handleEmptyCart}
                        >
                            Empty your cart
                        </Button>
                        <Button
                        component={Link} to="/checkout"
                        className={classes.checkoutButton}
                        size="medium"
                        type="button"
                        variant="contained"
                        color="primary"
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
            </div>
        </React.Fragment>
    );

    if(!cart.line_items) return '<h2>Loading your cart</h2>';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4">
                Your Shopping Cart
            </Typography>
            {isCartEmpty ? <CreateEmptyCart /> : <CreateFilledCart />}
        </Container>
    )
}

export default CheckoutCart
