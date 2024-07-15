// import libs:
import React from 'react';

// import static & assets:
import classess from './Message.module.scss';

const Message = ({name, post, description, image, isRight, isFirst}) => {
    return (
        <div className={isFirst
            ? classess.container__first
            : classess.container
        }>
            <div className={classess.message}>
                <div className={classess.message__content}>
                    <div className={classess.message__card}>
                        <div
                            className=
                            {isRight
                                ? classess.message__card__title
                                : classess.message__card__title__right
                            }
                        >
                            <div className={classess.message__card__img}>
                                <img src={image} alt="not alt"/>
                            </div>
                            <div className={classess.message__card__text}>
                                <h1>
                                    { name }
                                </h1>
                                <h2 className={classess.message__card__text__decoration}>
                                    { post }
                                </h2>
                            </div>
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

export default Message;