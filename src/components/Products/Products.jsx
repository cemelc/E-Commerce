import React from  'react';
import { Divider, Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles'

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes.', price:'€50', image: 'https://media.gettyimages.com/photos/someone-jumping-into-lake-tahoe-picture-id541993270?s=2048x2048'},
    {id: 2, name: 'Pocophone', description: 'Xiaomi PocoPhone.', price:'€300', image: 'https://media.gettyimages.com/photos/someone-jumping-into-lake-tahoe-picture-id541993270?s=2048x2048'},

]

const Products = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
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