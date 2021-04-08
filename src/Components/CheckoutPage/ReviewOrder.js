import React from 'react';
import { ListItemText, ListItem, List, Typography } from '@material-ui/core';

// View your order breakdown
const ReviewOrder = ({ checkoutToken }) => {
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>Order summary</Typography>
            <Typography variant="subtitle1">{`Order ID: ${checkoutToken.id}`}</Typography>
            <Typography variant="h6" gutterBottom>{checkoutToken.live.subtotal.formatted_with_code}</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.line_total.formatted_with_code}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        {checkoutToken.live.subtotal.formatted_with_code}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    )
}



export default ReviewOrder
