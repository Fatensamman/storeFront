import React from 'react';
import { If, Else, Then } from 'react-if';

import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton, Button, CardMedia } from '@material-ui/core';

import { connect } from 'react-redux'; // this ensures that we are connected to our redux store

// import directly from the store directory.
import { inactive, active } from '../store/categories.js';
import { getProducts } from '../store/products.js'

const productViewer = props => {
    return (
        <>
            <Typography variant="h3" component="h3">Products</Typography>
            <Button onClick={() => props.active('Food', 'Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!')}>Food</Button>
            <Button onClick={() => props.active('Electronics', 'Electronics is clearly the winner of the day.')}>Electronics</Button>


            <If condition={props.products.products}>
                <Then>


                    <h2 style={{ textAlign: "center" }}>{props.categories.activeCategory}</h2>
                    <p style={{ textAlign: "center" , marginBottom:"3rem"}}>{props.categories.activeDescription}</p>
                    <Grid style={{marginBottom:'50px'}} container justify="center" spacing={4}>
                        {console.log('categories........', props.products.products)}
                        {props.products.products.map((product, index) => {
                            return (
                                <Grid item key={index}>
                                    <Card >
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={product.img}
                                            title="Contemplative Reptile"
                                        />
                                        <CardHeader title={product.name} />
                                        <CardContent>
                                            <Typography component="p">$ {product.price}</Typography>
                                            {/* <img style={{ width: '10rem' }}
                                                src={product.img}
                                                alt="gk"
                                            /> */}
                                            {/* {console.log(product.img)} */}

                                        </CardContent>
                                        <CardActions>
                                            <IconButton>Add to cart</IconButton>
                                            <IconButton>View details</IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Then>
                <Else>
                    <div></div>
                </Else>
            </If>
        </>
    );
}

const mapStateToProps = state => {
    return { products: state.products, categories: state.categories }
}

const mapDispatchToProps = {
    inactive,
    active,
    getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(productViewer);