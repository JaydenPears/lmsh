import React, { Fragment } from 'react';
import Assortment from '../components/Assortment/Assortment';
import ShoppingCart from '../components/ShopingCart/ShoppingCart';
import useScrollToTop from '../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';

// import static:
import classess from "./../styles/Payment.module.scss";
import CreditCardForm from '../components/CreditCardForm/CreditCardForm';

const Shop = () => {
    useScrollToTop();
    return (
        <div className={classess.container}>
            <Helmet>
                <title>Оплата заказа</title>
            </Helmet>
            <CreditCardForm />
        </div>
    );
};

export default Shop;