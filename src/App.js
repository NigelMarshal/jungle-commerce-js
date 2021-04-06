import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products, Header} from './Components';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProductItems = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        fetchProductItems();
    }, []);

    console.log(products);
    return (
        <div>
            <Header />
            <Products products={products}/>
        </div>
    )
}

export default App
