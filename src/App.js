import React, { useState, useEffect }  from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar} from './components';

const App = () => {
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState([]);

    const fetchProducts = async () =>{

        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCarts = async () =>{        
        setCart(await commerce.cart.retrive());
    }

    const handleAddToCart = async  (productId, quantity) =>{        
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    useEffect (() => {
        fetchProducts();
        fetchCarts();
    },[]);

    console.log(cart);    
    return (
        <div>
            <Navbar />
            <Products products={products} onAddToCart={handleAddToCart} />
        </div>
    )
}

export default App;
