import React from  'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes.', price:'€50', image:'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-pocophone-f1-2.jpg'},
    {id: 1, name: 'Pocophone', description: 'Xiaomi PocoPhone.', price:'€300', image:'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-pocophone-f1-2.jpg'},

]

const Products = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4} >
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} lg={3} >
                    <Product product={product} />
                </Grid>))
            }
        </Grid>
    </main>
    )


 
}

export default Products;