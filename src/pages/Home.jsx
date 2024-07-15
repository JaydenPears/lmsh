// import libs:
import React, { Fragment } from 'react';
import Hero from '../components/Hero/Hero';
import Posts from '../components/Posts/Posts';
import Message from '../components/Message/Message';
import { Helmet } from 'react-helmet';
import useScrollToTop from '../hooks/useScrollToTop';

// import assets:
import photo from './../assets/gvido.jpg';

const Home = () => {
    useScrollToTop();

    return (
        <Fragment>
            <Helmet>
                <title>
                    ЛМШ
                </title>
            </Helmet>
            <Hero />
            {/* <Message
                isFirst={true}
                name="Гвидо Ван Россум"
                post="Создатель языка программирования Python"
                description=""
                image={photo}
            /> */}
            <Posts />
        </Fragment>
    );
};

export default Home;