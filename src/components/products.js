import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton, Tabs, Tab } from '@material-ui/core';

import { connect } from 'react-redux'; // this ensures that we are connected to our redux store
// import directly from the store directory.
import { inactive, active } from '../store/categories.js';
import { getProducts } from '../store/products.js'
import { addToCart } from '../store/cart.js';
import { loadProducts } from '../store/products.js';

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
    useEffect(() => {
        props.loadProducts();
    }, []);
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
                        <AntTab label="Food" onClick={() => props.active('food', 'Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!')} />
                        <AntTab label="Electronics" onClick={() => props.active('electronics', 'Electronics is clearly the winner of the day.')} />
                        <AntTab label="Console" onClick={() => props.active('console', '^__^')} />
                        <AntTab label="Mobile" onClick={() => props.active('mobile', '^__^')} />
                        <AntTab label="Phones" onClick={() => props.active('phones', '^__^')} />

                    </AntTabs>
                    <Typography className={classes.padding} />
                </div>
            </div>
            {console.log('products........', props.products.productList)}
            {/* <If condition={!props.products.products}>
                <Then> */}
                    <h2 style={{ textAlign: "center" }}>{props.categories.activeCategory.toUpperCase()}</h2>
                    <p style={{ textAlign: "center", marginBottom: "3rem" }}>{props.categories.activeDescription}</p>
                    <Grid style={{ marginBottom: '50px' }} container justify="center" spacing={4}>
                        {props.products.productList.map((product, index) => {
                            if (product.category === props.categories.activeCategory) {
                                if(product.inStock!==0){

                            return (
                                <Grid item key={product._id}>
                                    <Card style={{ width: '25rem' }}>
                                        <CardHeader title={product.name} />
                                        <CardContent>
                                            <Typography component="p">{product.description}</Typography>
                                            <br />
                                            <Typography component="p">  {product.inStock > 0
                                                ? `In stock, ${product.inStock} items` : 'Out of Stock'}</Typography>
                                            <Typography component="p">Price: ${product.price}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton style={{ fontSize: '1.2rem', color: '#586a89' }} onClick={() => props.addToCart(product)} disabled={product.inStock > 0 ? false : true}>Add to cart</IconButton>
                                            <IconButton style={{ fontSize: '1.2rem', color: '#586a89' }}>View details</IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )}}else{ return null}
                        })}
                    </Grid>
                {/* </Then>
                <Else>
                    <div></div>
                </Else> */}
            {/* </If> */}
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
    addToCart,
    loadProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewer);