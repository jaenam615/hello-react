import {useState} from 'react';
import './Toggler.css';

export default function Toggler(){
    
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    
    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    };

    const changeCount = () => {
        setCount(count + 2);
    }

    const face = isHappy ? "😊" : "😢";
    
    return (
        <>
            <p className = "Toggler" onClick = {toggleIsHappy}>{face}</p>
            <button onClick = {changeCount}>{count}</button>
        </>
    )
}