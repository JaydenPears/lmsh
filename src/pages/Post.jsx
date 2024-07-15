// import libs:
import { React, useState, useEffect } from 'react';
import { Text } from 'react-native';
import useScrollToTop from '../hooks/useScrollToTop';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

// import static:
import classess from './../styles/Post.module.scss';
import photo from './../assets/news.jpg';

const allNews = {
    1: {
        "date": "2024-07-13",
        "short_description": "Третий день смены",
        "category": "news",
        "image": photo,
        "description": "Доброе утро. Начинаем третий день смены.\n\nПривыкаем к режиму жизни в ЛМШ и радуемся тому, что температура на улице стала более комфортной для учебы.\nСегодня после пар помимо привычных уже кружков у нас будет новинка - авторский кружок Аллы Вадимовны Булыгиной (да, она приедет к нам в гости в ЛМШ на пару дней).\n\nАлла Вадимовна приглашает вас пофантазировать, как выглядят космические этнические маски.\nИ помогут в этом картон, резаки, клеевые пистолеты, краски, мусор и хорошее настроение.\n\nКружок пройдет в большой беседке.\nНачало в 17:15.\n\nНо на этом необычные события не закончатся.\nК нам в ЛМШ приедут сотрудники ГЭС-2, чтобы провести вечернее мероприятие.\nЭто будет словеная ролевая игра о межпланетном путешествии. Коллеги проводили подобную игру во время выставки 'Закат в сто сорок солнц', а теперь привезли ее для наших лицеистов.\n\nНе пропустите это уникальное событие!\n\nВстречаемся в 20:00 в большой беседке.\n\nИнтересного всем дня!",
        "title": "Третий день смены"
    },
    2: {
        "date": "2024-07-06",
        "title": "Вечернее мероприятие с ГЭС-2",
        "category": "afisha",
        "image": photo,
        "description": "6 июля 20:00 - 22:00\n\nЧем отличается «твердая» от «мягкой» научной фантастики?/n/nГости ЛМШ из Дома культуры «ГЭС-2» приглашают всех желающих разобраться в видах научной фантастики и самим придумать новый сюжет о межпланетном путешествии (или побеге, или погоне) в рамках командной ролевой игры «Темный лес». \n\nУчастники поразмышляют о космическом пространстве, придумают инопланетное существо и попробуют проиллюстрировать парадоксы современной физики. Эти подготовительные задания помогут настроиться, вдохновиться и получить дополнительные «сюжетные ходы» для собственной фантастической истории. \n\nЖдем всех в большой беседке!"
    }
}

const Post = () => {
    useScrollToTop();
    const [title, setTitle] = useState('');
    const [news, setNews] = useState('');
    const [img, setImg] = useState('');
    const URL = `${process.env.REACT_APP_URL}`;

    const news_id = Number(useLocation().pathname.split('/').pop());

    useEffect(() => {
        // axios.get(`${URL}/posts/${news_id}/`, {
        //     responseType: 'json',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).then((response) => {
        //     const data = response.data;
        //     setTitle(data.title);
        //     setNews(data.description);
        //     setImg(data.image);
        // })
        if (news_id) {
            setTitle(allNews[news_id]["title"]);
            setNews(allNews[news_id]["description"]);
            setImg(allNews[news_id]["image"])
        }
    }, [news_id, URL, news]);

    return (
        <div className={classess.container}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className={classess.post}>
                <img
                    src={img}
                    className={classess.background_picture}
                    alt='must be an alt'
                />
                <h1>{ title }</h1>
                <div className={classess.post__description}>
                    <Text style={{fontSize: "1.7rem", textAlign: "left"}}>
                        { news }
                    </Text>
                </div>
            </div>
        </div>
    )
};

export default Post;