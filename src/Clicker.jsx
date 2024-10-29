function handleClick(){
    console.log("Clicked the button")
}

function handleHover(){
    console.log("Hovered over the button")
}

export default function Clicker({message, buttonText}){
    return(
        <div>
            <p>Click the button</p>
            <button onClick={()=>alert(message)}>{buttonText}</button>
            <p>Hover over me</p>
            <button onMouseOver={handleHover}>Hover</button>
        </div>
    )
}