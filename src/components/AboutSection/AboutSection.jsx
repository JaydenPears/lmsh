// import libs:
import React from 'react';

// import static & assets:
import classess from './AboutSection.module.scss';

const AboutSection = ({name, description, image}) => {
    return (
        <div className={classess.container}>
            <div className={classess.message}>
                <div className={classess.message__content}>
                    <div className={classess.message__card}>
                        <div className={classess.message__card__title}>
                            <div className={classess.message__card__img}>
                                <img src={image} alt="not alt"/>
                            </div>
                            <h1>
                                { name }
                            </h1>
                        </div>
                        <div className={classess.message__card__description}>
                            <p>
                                { description }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection;