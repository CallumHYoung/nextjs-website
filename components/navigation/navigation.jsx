import styles from './navigation.module.css';
import Title from '../title/title';

import { useState } from 'react';

export default function Navigation(){
    const [dropdownShow, setDropdownShow] = useState(false);

    const testFunction = () => {
        setDropdownShow(!dropdownShow);
    }
    
    return (
        <>
        <div className={styles.navbar}>
            <a
            className={styles.titleAnchor}
            onClick={testFunction}>
                <Title
                className="title"
                />
            </a>
            {dropdownShow ? 
            <ul className={styles.options}>
                <li>Home</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
            : <></>}
        </div>
        </>
    )
}