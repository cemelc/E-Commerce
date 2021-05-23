import React from 'react'
import { Typography, List, ListItem, ListItemText }from '@material-ui/core'

const Review = ({ checkoutToken }) => {
    var totalShip= parseFloat(checkoutToken.live.subtotal.formatted)+parseFloat(checkoutToken.live.shipping.available_options[0].price.formatted)
    return (
        <>
          <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <List disablePadding>
            {checkoutToken.live.line_items.map((product) =>    (            
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                    ))}
                    <ListItem style={{ padding: '5px 0' }}>
                        <ListItemText primary="Shipping"/>
                        <Typography variant="subtitle2" style={{ fontWeight: 700 }} value={""}> 
                            {checkoutToken.live.shipping.available_options[0].price.formatted_with_symbol}
                        </Typography>                            
                    </ListItem>
                    <ListItem style={{ padding: '10px 0' }}>
                        <ListItemText primary="Total"/>
                        <Typography variant="subtitle1" style={{ fontWeight: 700 }} value={""}> 
                            {'€'+ totalShip}
                        </Typography>                            
                    </ListItem>
            </List>
        </>  
    )
};

export default Review;
