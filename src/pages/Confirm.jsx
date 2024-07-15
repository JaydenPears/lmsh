import React, { Fragment } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero/Hero';

// import static:
import classess from "./../styles/AboutUs.module.scss";

const Confirm = () => {
    useScrollToTop();
    return (
        <Fragment className={classess.container}>
            <Helmet>
                <title>Заказ оформлен</title>
            </Helmet>
            <Hero isDynamic>Ваш заказ был принят!</Hero>
        </Fragment>
    );
};

export default Confirm;