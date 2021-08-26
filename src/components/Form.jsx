// NPM Packages
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function Form({ onSubmit }){
    // Local state
    const [name, setName] = useState("");
    const [price, setPrice] =useState("");

    // Methods
    function handleSubmit(e) {
        e.preventDefault();
        if (name.trim() === ""){
            return alert("You must write the item name");
        }
        else if (price.trim() === "") {
            return alert("You must write the item price");
        }          
        else if (price<=0) {
            return alert("The price must be a number which is more than 0");
        }  
        else {
            onSubmit({
                name: name,
                price: price,
                isDone: false,
                id: uuidv4()
            })

            setName("");
            setPrice("");
        }
    }

    return(
        <div>
            <h3>Add a new shopping item:</h3>
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <div>
                <button className="button-main" type="button" onClick={handleSubmit}>Add item</button>
            </div>
        </div>
    )
}