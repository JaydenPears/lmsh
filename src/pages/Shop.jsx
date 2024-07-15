import React, { Fragment } from 'react';
import Assortment from '../components/Assortment/Assortment';
import ShoppingCart from '../components/ShopingCart/ShoppingCart';
import useScrollToTop from '../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';

// import static:
import classess from "./../styles/Shop.module.scss";

const Shop = () => {
    useScrollToTop();
    return (
        <div className={classess.container}>
            <Helmet>
                <title>Мерч</title>
            </Helmet>
            <Assortment />
            <ShoppingCart />
        </div>
    );
};

export default Shop;