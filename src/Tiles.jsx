import ColorBox from "./ColorBox";
import "./Tiles.css";

export default function Tiles({colors}){
    const boxes = [];
    for (let i = 0; i < 25; i++){
        boxes.push(<ColorBox colors = {colors}/>);
    }
    return (
        <div className = "ColorGrid">
            {boxes}
        </div>
    )
}