import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';

const SimpleCart = props => {
  if (props.cart.cart.length > 0) {
    return (
      <>
        <Card style={{ width: '200px', position: "absolute", left: '1140px' }}>
          <Typography component="p">Cart</Typography>
          <CardContent>
            {props.cart.cart.map((product, i) => {
              return (
                <Typography key={i} className='banana'>
                  {product.name} : ({parseInt(product.Count) - parseInt(product.inStock)})
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