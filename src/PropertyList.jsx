import Property from "./Property";
import "./PropertyList.css";

function PropertyList({properties}){
    return (
        <div className="PropertyList">
        {properties.map((p) => (
            <Property key={p.id} {...p}/>   
        ))}
        </div>
    );
}

export default PropertyList;