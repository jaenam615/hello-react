export default function Greeter({name = "Everyone", from="Anonymous"}) {
    return (
        <>
        <h1>Hi there, {name}!</h1>
        <h2>from {from}</h2>
        </>
    );}