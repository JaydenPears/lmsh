// import libs:
import { React, Fragment, useState, useEffect } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';
import Select from 'react-select';
import MyCalendar from '../components/MyCalendar/MyCalendar';
import AboutSection from '../components/AboutSection/AboutSection';
import axios from 'axios';

// import static:
import classess from './../styles/Sections.module.scss';
import png from './../assets/basketball.png';

const Sections = () => {
    useScrollToTop();

    const [id_section, setIDSection] = useState(null);
    const [id_group, setIDGroup] = useState(null);

    const [section, setSection] = useState(null);
    const [group, setGroup] = useState(null);

    const [forSections, setForSections] = useState([]);
    const [forGroups, setForGroups] = useState({});

    const [infoAboutSections, setInfoAboutSections] = useState({});
    const [lessons, setLessons] = useState([]);

    const URL = `${process.env.REACT_APP_URL}`;

    useEffect(() => {
        // axios.get(`${URL}/sections/`, {
        //     responseType: 'json',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).then((response) => {
        //     const data = response.data;
        //     console.log(data);
        //     let sections = [];
        //     let groups = {};
        //     let info = {}
        //     for (let i in data){
        //         sections.push(
        //             {
        //                 "value": data[i]["name"],
        //                 "label": data[i]["name"],
        //                 "id": data[i]["id"],
        //             }
        //         );
        //         let groups_on_section = [];
        //         for (let j in data[i]["groups"]){
        //             groups_on_section.push(
        //                 {
        //                     "value": data[i]["groups"][j]["title"],
        //                     "label": data[i]["groups"][j]["title"],
        //                     "id": data[i]["groups"][j]["id"],
        //                 }
        //             );
        //         };
        //         groups[data[i]["name"]] = [...groups_on_section];
        //         info[data[i]["name"]] = {"description": data[i]["description"],
        //         "cost": data[i]["cost"]};
        //     };
        //     setForSections(sections);
        //     setForGroups(groups);
        //     setInfoAboutSections(info);
        // })
    }, [URL]);

    // console.log(id_group);

    useEffect(() => {
        // if (group){
        //     axios.get(`${URL}/lessons/?section=${id_section}&group=${id_group}`, {
        //         responseType: 'json',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     }).then((response) => {
        //         const data = response.data;
        //         setLessons(data);
        //     })
        // }
    }, [group, URL, id_section, id_group]);

    const setNewSection = (newSection) => {
        setSection(newSection);
        setGroup(null);
        setLessons([]);
        setIDSection(newSection["id"]);
    };

    const setNewGroup = (newGroup) => {
        setGroup(newGroup);
        setIDGroup(newGroup["id"]);
    };

    return (
        <Fragment>
            <Helmet>
                <title>
                    Наши секции
                </title>
            </Helmet>
            <div className={classess.h}>
                <h1>
                    Наши секции
                </h1>
            </div>
            <div className={classess.container}>
                <div className={classess.sections}>
                    <div className={classess.selector}>
                        <Select
                            className={classess.mySelect}
                            value={section}
                            options={forSections}
                            onChange={setNewSection}
                            placeholder={"Выберите секцию"}
                            isSearchable={false}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#6e8edd',
                                    primary50: '#6e8edd',
                                    primary: '#6e8edd',
                                }
                            })}
                        />
                    </div>
                
                {section !== null
                    ?
                    <div className={classess.layout}>
                        <AboutSection
                            name={section["value"]}
                            image={png}
                            description={infoAboutSections[section["value"]]["description"]}
                        />
                    </div>
                    :
                    <div/>
                }
                </div>
                <div className={classess.groups}>
                    <div className={classess.selector}>
                        <Select
                            isDisabled={section === null
                                ? true
                                : false
                            }
                            className={classess.mySelect}
                            value={group}
                            options={section !== null
                                ? forGroups[section["value"]]
                                : []
                            }
                            onChange={setNewGroup}
                            placeholder={"Выберите группу"}
                            isSearchable={false}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#d3d3d3',
                                    primary50: '#d3d3d3',
                                    primary: 'rgb(197, 135, 218)',
                                }
                            })}
                        />
                    </div>
                    {/* <MyCalendar
                        myEventsList={lessons}
                    /> */}
                </div>
            </div>
        </Fragment>
    );
};

export default Sections;