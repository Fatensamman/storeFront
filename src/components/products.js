import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { If, Else, Then } from 'react-if';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton, CardMedia, Tabs, Tab } from '@material-ui/core';

import { connect } from 'react-redux'; // this ensures that we are connected to our redux store
// import directly from the store directory.
import { inactive, active } from '../store/categories.js';
import { getProducts } from '../store/products.js'
import { addToCart } from '../store/cart.js';

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#6B5D81',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    }
}));

const ProductViewer = props => {
    const classes = useStyles();
    // const [setValue] = React.useState(0);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className={classes.root}>
                <div className={classes.demo1}>
                    <Typography variant="h5" component="h5">Browse our Categories</Typography>
                    <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                        <AntTab label="Food" onClick={() => props.active('Food', 'Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!')} />
                        <AntTab label="Electronics" onClick={() => props.active('Electronics', 'Electronics is clearly the winner of the day.')} />
                    </AntTabs>
                    <Typography className={classes.padding} />
                </div>
            </div>
            {console.log('products........', props.products)}
            <If condition={props.products}>
                <Then>
                    <h2 style={{ textAlign: "center" }}>{props.categories.activeCategory}</h2>
                    <p style={{ textAlign: "center", marginBottom: "3rem" }}>{props.categories.activeDescription}</p>
                    <Grid style={{ marginBottom: '50px' }} container justify="center" spacing={4}>
                        {props.products.activeProduct.map((product, index) => {
                            return (
                                <Grid item key={index}>
                                    <Card style={{ width: '25rem' }}>
                                        <CardMedia style={{ width: '25rem', height: '20rem' }}
                                            component="img"
                                            alt="Contemplative Reptile"
                                            // height='20rem'
                                            // width= '25rem'
                                            image={product.img}
                                            title="Contemplative Reptile"
                                        />
                                        <CardHeader title={product.name} />
                                        <CardContent>
                                            <Typography component="p">{product.description}</Typography>
                                            <br />
                                            <Typography component="p">In Stock:{product.inStock}</Typography>
                                            <Typography component="p">Price: ${product.price}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton style={{ fontSize: '1.2rem', color: '#586a89' }} onClick={() => props.addToCart(product)}>Add to cart</IconButton>
                                            <IconButton style={{ fontSize: '1.2rem', color: '#586a89' }}>View details</IconButton>
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
    return { products: state.products, categories: state.categories, activeDescription: state.categories.activeDescription, cart: state.cart }
}

const mapDispatchToProps = {
    inactive,
    active,
    getProducts,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewer);