import { useState } from 'react';

export default function ColorBox({colors}){
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    const [color, setColor] = useState(randColor);
    const changeColor = () => {
        randColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randColor);
    }

    return (
        <div>
            <div style={{backgroundColor: color, width: "50px", height: "50px"}} onClick = {changeColor}></div>
        </div>
    )
}