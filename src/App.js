import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Header, CheckoutCart, Checkout, Login } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProductItems = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchShoppingCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }
    //handler for updating items in cart
    const handleUpdateItemQuantity = async (productId, quantity) => {
        const item = await commerce.cart.update(productId, { quantity });
        setCart(item.cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const item = await commerce.cart.remove(productId);
        setCart(item.cart);
    }

    const handleEmptyCart = async () => {
        const item = await commerce.cart.empty();
        setCart(item.cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }
    //Fetch checkout details for parsing data
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message)
        }
    }

    useEffect(() => {
        fetchProductItems();
        fetchShoppingCart();
    }, []);

    return (
        //Set up routing paths for user flow
        <Router>
            <div>
                <Header totalItemsInCart={cart.total_items} />
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/checkoutcart">
                        <CheckoutCart
                            cart={cart}
                            handleUpdateItemQuantity={handleUpdateItemQuantity}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}
                        />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App
