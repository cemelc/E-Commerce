import React from  'react';
import Grid from '@material-ui/core';

const products = [
    {id: 1, name: 'Shoes', description= 'Running Shoes', price='50'},
    {id: 1, name: 'Pocophone', description= 'Xiaomi PocoPhone', price='300'},

]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}> 
            {products.map(product)=>(
                <Grid item key={product.id} xs=[12] sm={6} lg={3}>
                    <Product product={product} />
                </Grid>)
            }
        </Grid>
    </main>
}

export default Prducts;