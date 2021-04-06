import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products, Header} from './Components';

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

    useEffect(() => {
        fetchProductItems();
        fetchShoppingCart();
    }, []);



    console.log(cart);
    return (
        <div>
            <Header totalItemsInCart={cart.total_items} />
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default App
