function handleFormSubmit(e){
    e.preventDefault();
    console.log("submitted the form");
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}