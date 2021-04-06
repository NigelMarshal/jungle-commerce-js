import React from 'react'
import logo from '../../img/logo.jpg'
import {Typography, AppBar, IconButton, Toolbar, Badge} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons';
import useStyles from './styles';


const Header = ({totalItemsInCart}) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    <Typography>
                        <img src={logo} height="50px" width="50px" alt="logo" className={classes.image} />
                            JuNgLe
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart">
                            <Badge badgeContent={totalItemsInCart} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Header
