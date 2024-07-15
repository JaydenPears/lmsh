// import libs:
import React, { useState, useEffect } from 'react';
import { 
    Group,
    CardGrid,
    Title,
    ContentCard,
    Text,
    ButtonGroup,
    Button,
 } from '@vkontakte/vkui';
 import { getWindowSize } from '../../getWindowSize';
 import { store, add, remove } from '../../context/itemsCart.mjs';

// import static:
import '@vkontakte/vkui/dist/vkui.css';
import firstPhoto from './../../assets/first_item.jpg';
import secondPhoto from './../../assets/shirt.jpg';

const Assortment = () => {
    const [items, setItems] = useState([
        {
            "id": 1,
            "title": "Что-то",
            "price": 1000,
            "quantity": 5,
            "thumbnail": firstPhoto,
        },
        {
            "id": 2,
            "title": "Футболка",
            "price": 750,
            "quantity": 3,
            "thumbnail": secondPhoto,
        }
    ]);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [currentState, setCurrentState] = useState(store.getState());

    const getCurrentTitle = (string) => {
        if (string.length > 20){
            return `${string.substr(0, 20)}...`;
        }
        return string;
    }

    useEffect(() => {
        // fetch(`https://dummyjson.com/carts/1`)
        // .then(response => response.json())
        // .then((data) => {
        //     setItems(data['products']);
        // })
        // .catch(error => console.error(error));
    }, []);
    console.log(items);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const addItem = (id) => {
        let countItems = items[id]["quantity"];
        let item_id = items[id]["id"];
        let cost = items[id]["price"];
        if (!Object.keys(currentState).includes(item_id.toString())){
           store.dispatch(add([item_id, {...currentState}, cost]));
        }
        else if (Object.keys(currentState).includes(item_id.toString()) && currentState[item_id]["count"] + 1 <= countItems){
            store.dispatch(add([item_id, {...currentState}, cost]));
        }
        setCurrentState(store.getState());
    }

    const removeItem = (id) => {
        let item_id = items[id]["id"];
        if (currentState[item_id]["count"] - 1 >= 0){
            store.dispatch(remove([item_id, currentState]));
        }
        setCurrentState(store.getState());
    }

    return (
        <Group
            style={{width: "75%"}}
            header={<Title level="2" style={{marginTop: "16px", marginBottom: "16px", marginLeft: "16px"}}>
                        Ассортимент
                    </Title>}>
            <CardGrid size={windowSize["innerWidth"] < 600
                ? "l"
                : "s"
            }>
                {items.map((elem, index) => 
                    <ContentCard
                        key={elem["id"]}
                        header={
                            <Title level="3">{ getCurrentTitle(elem["title"]) }</Title>
                        }
                        src={elem["thumbnail"]}
                        caption={
                            <ButtonGroup>
                                <Button
                                    id={elem["id"]}
                                    size="l"
                                    appearance='positive'
                                    onClick={(e) => addItem(index, elem["id"])}
                                    disabled=
                                    {currentState[elem["id"]] !== undefined
                                        ? elem["quantity"] === currentState[elem["id"]]["count"]
                                            ? true
                                            : false
                                        : false
                                    }
                                >
                                    {currentState[elem["id"]] !== undefined
                                        ? elem["quantity"] === currentState[elem["id"]]["count"]
                                            ? "+"
                                            : "+"
                                        : "+"
                                    }
                                </Button>
                                <Button
                                    id={elem["id"]}
                                    size="l"
                                    disabled={true}
                                    style={{backgroundColor: "#6e8edd"}}
                                >
                                    {!Object.keys(currentState).includes(elem["id"].toString())
                                        ? 0
                                        : currentState[elem["id"]]["count"]
                                    }
                                </Button>
                                <Button
                                    id={elem["id"]}
                                    size="l"
                                    appearance='negative'
                                    onClick={(e) => removeItem(index, elem["id"])}
                                    disabled={currentState[elem["id"]] !== undefined
                                        ? currentState[elem["id"]]["count"] === 0
                                            ? true
                                            : false
                                        : true
                                    }
                                >
                                    {currentState[elem["id"]] !== undefined
                                        ? currentState[elem["id"]]["count"] === 0
                                            ? "-"
                                            : "-"
                                        : "-"
                                    }
                                </Button>
                            </ButtonGroup>
                        }
                        width={400}
                        height={200}
                        text={
                            <Text>
                                <b>Стоимость товара: {elem["price"]} руб.</b>
                            </Text>
                        }
                    />
                )}
            </CardGrid>
        </Group>
    );
};

export default Assortment;