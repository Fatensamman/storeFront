import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { removeFromCart } from '../store/cart.js';
import DeleteIcon from '@material-ui/icons/Delete';
// import { If } from 'react-if';

const SimpleCart = props => {
  if (props.cart.cart.length > 0) {
    return (
      <>
        <Card style={{ width: '300px', position: "absolute", left: '1040px' }}>
          <Typography component="p">Cart</Typography>
          <CardContent>
            {props.cart.cart.map((product, i) => {
              return (
                <div style={{marginTop:"20px"}}>
                  <Typography key={product._id} className='banana'>
                    {product.name} : ({product.count - product.inStock})
                  </Typography>
                  <IconButton  style={{ float: "right", marginTop: "-40px" }} 
                 >
                    <DeleteIcon  onClick={() => props.removeFromCart(product) } />
                </IconButton>
                </div>
              )
            })}
          </CardContent>
      </Card>
      </>
    );
  } else {
  return null;
}
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = {
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);