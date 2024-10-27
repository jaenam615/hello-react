export default function Slots({val1, val2, val3}){
    const allCorrect = val1 === val2 && val2 === val3;
    return (
        <div>
            <h2>Slot Machine</h2>
            <h3>{val1} {val2} {val3}</h3>
            {allCorrect ? <p style={{color:"green"}}>You Win!</p> : <p style={{color:"red"}}>You Lose!</p>}
            {allCorrect && <p>Congrats!</p>}
        </div>
    )
}