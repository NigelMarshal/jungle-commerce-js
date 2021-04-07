import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products, Header, CheckoutCart, Checkout} from './Components';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProductItems = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }

    const fetchShoppingCart = async () => {
       setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    const handleUpdateItemQuantity = async (productId, quantity) => {
        const item = await commerce.cart.update(productId, {quantity});
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
    useEffect(() => {
        fetchProductItems();
        fetchShoppingCart();
    }, []);

    return (
        <Router>
            <div>
                <Header totalItemsInCart={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                    <Products products={products} onAddToCart={handleAddToCart}/>
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
                        <Checkout cart={cart} />
                    </Route>
                </Switch>
               
            </div>
        </Router>  
    );
}

export default App
