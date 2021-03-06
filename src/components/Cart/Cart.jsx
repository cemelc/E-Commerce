import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';

import  CardItem  from './CartItem/CartItem'
import useStyles from './styles';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveCart, handleEmptyCart }) => {
    const classes = useStyles();

    
        
    if(!cart.line_items)
    return  '...loading';


    const isEmpty =  !cart.line_items.length;
    
    const EmptyCart = () => (        
        <Typography variant="subtitle1">You have no items in your cart
            <Link to="/" className={classes.link}> Start adding some!</Link>
        </Typography>
    );

    const FilledCart = () => {
        console.log(cart.line_items);        
        return(
        <>        
            <Grid container spacing={3}>
                {cart.line_items.map(item => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CardItem item={item} onUpdateCartQty ={ handleUpdateCartQty } onRemoveCart ={ handleRemoveCart } />
                    </Grid>
                ))}
            </Grid>

            <div className={classes.cardDetails}>
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button component={ Link } to="/checkout" className={classes.checkout} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
        );
    }
    
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart:</Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart />}
        </Container>
    )
}

export default Cart