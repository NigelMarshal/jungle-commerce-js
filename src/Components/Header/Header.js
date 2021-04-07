import React from 'react'
import logo from '../../img/logo.png'
import {Typography, AppBar, IconButton, Toolbar, Badge} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';


const Header = ({totalItemsInCart}) => {
    const classes = useStyles();
    const location = useLocation();

   
    return (
        <div>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    <Typography component={Link} to="/" >
                        <img src={logo} height="50px" width="50px" alt="logo" className={classes.image} />
                    </Typography>
                    <Typography className={classes.logo} variant="subtitle1">
                        JuNgLe
                    </Typography>
                    <div className={classes.grow} />
                    { location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/checkoutcart" aria-label="Show cart">
                                <Badge badgeContent={totalItemsInCart} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
    )
}


export default Header
