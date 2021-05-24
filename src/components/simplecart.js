import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';

const SimpleCart = props => {
  if (props.cart.cart.length > 0) {
    return (
      <>
        <Card style={{ textAlign: 'left', float: 'right', width: '200px' }}>
          <Typography component="p">Cart</Typography>
          <CardContent>
            {props.cart.cart.map((product, i) => {
              return (
                <Typography key={i} className='banana'>
                  {product.name}:  ${product.price}
                </Typography>
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

export default connect(mapStateToProps)(SimpleCart);