import { useEffect, useState } from 'react';

import styles from './gacha.module.css';

const getItem = (rarity) => {
    switch(rarity){
        case 3:
            return {
                name: "★★★",
                image: ""
            };
        case 4:
            return {name: "★★★★"};
        case 5:
            return {name: "★★★★★"};
    }
}

export default function Gacha(props) {
    const [items, setItems] = useState([]);

    const roll = () => {
        const num = Math.random() * 1000;
        switch(true){
            case (num < 10):
                setItems([...items, getItem(5)]);
                break;
            case (num < 100):
                setItems([...items, getItem(4)]);
                break;
            case (num < 1000):
                setItems([...items, getItem(3)]);
                break;
        }
    }

    useEffect(() => {
        // setItems([{name: "tits"}, {name: "boobs"}])
    }, [])
    return (
        <>
            <button
            onClick={roll}>
                Roll
            </button>
            <ul>
                { 
                    items ? 
                    items.map(i => {
                        return <li className={styles.item}>{i.name}</li>
                    }) :
                    <></>
                }
            </ul>
        </>
    )
}