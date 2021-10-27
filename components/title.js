import Link from 'next/link'
import React, { useState, useEffect } from 'react';

const ms = 50;
const ms1 = 100;
const ms2 = 200;
const ms3 = 500;
const ms4 = 2000;
const animation = [
    { "s": "_", "ms": ms2 },
    { "s": "C", "ms": ms1 },
    { "s": "C_", "ms": ms1 },
    { "s": "CA", "ms": ms1 },
    { "s": "CA_", "ms": ms1 },
    { "s": "CAL", "ms": ms1 },
    { "s": "CAL_", "ms": ms1 },
    { "s": "CALL", "ms": ms1 },
    { "s": "CALL_", "ms": ms1 },
    { "s": "CALLU", "ms": ms3 },
    { "s": "CALLU_", "ms": ms1 },
    { "s": "CALLUM", "ms": ms1 },
    { "s": "CALLUM_", "ms": ms2 },
    { "s": "CALLUM ", "ms": ms2 },
    { "s": "CALLUM _", "ms": ms1 },
    { "s": "CALLUM Y", "ms": ms1 },
    { "s": "CALLUM Y_", "ms": ms1 },
    { "s": "CALLUM YO", "ms": ms1 },
    { "s": "CALLUM YO_", "ms": ms1 },
    { "s": "CALLUM YOU", "ms": ms1 },
    { "s": "CALLUM YOU_", "ms": ms1 },
    { "s": "CALLUM YOUN", "ms": ms1 },
    { "s": "CALLUM YOUN_", "ms": ms1 },
    { "s": "CALLUM YOUNG_", "ms": ms1 },
    { "s": "CALLUM YOUNG ", "ms": ms3 },
    { "s": "CALLUM YOUNG_", "ms": ms3 },
    { "s": "CALLUM YOUNG ", "ms": ms3 },
    { "s": "CALLUM YOUNG_", "ms": ms3 },
    { "s": "CALLUM YOUNG", "ms": ms },
    { "s": "CALLUM YOUNG", "ms": ms },
    { "s": "CALLUM YOUN", "ms": ms },
    { "s": "CALLUM YOU", "ms": ms },
    { "s": "CALLUM YO", "ms": ms },
    { "s": "CALLUM Y", "ms": ms },
    { "s": "CALLUM ", "ms": ms },
    { "s": "CALLUM", "ms": ms },
    { "s": "CALLU", "ms": ms },
    { "s": "CALL", "ms": ms },
    { "s": "CAL", "ms": ms },
]

let updateFrame = (counter, setTitle) => {
    if (counter < animation.length) {
        setTimeout(() => {
            setTitle(animation[counter].s)
            updateFrame(++counter, setTitle)
        }, animation[counter].ms);
    }
}

const titleStyle = {
    "fontSize": "3vw * 2vh",
    "fontFamily": "'Bungee Hairline', cursive;",
    "color": "#efce71",
    "textAlign": "center"
}

export default function Title(props) {
    const [title, setTitle] = useState('');
    let index = 0;

    useEffect(() => {
        updateFrame(index, setTitle);
    }, []);

    return (
        <>
            <h1 style={titleStyle}>
                {title}
            </h1>
        </>
    )
}