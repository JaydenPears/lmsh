import React, { Fragment } from 'react';
import Posts from '../components/Posts/Posts';
import useScrollToTop from '../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';

const News = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Helmet>
                <title>Новости</title>
            </Helmet>
            <Posts page={true} />
        </Fragment>
    );
};

export default News;