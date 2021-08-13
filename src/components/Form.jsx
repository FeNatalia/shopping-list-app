import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function Form({ onSubmit }){
    const [name, setName] = useState("");
    const [price, setPrice] =useState("");
    const [isDone, setIsDone] =useState(false);
    const [id, setId] = useState(uuidv4());

    const handleSubmit = (e) => {
        e.preventDefault();
        if (price<=0) {
            return alert("The price must be a number which is more than 0");
        }
        if (name.trim() === "" || price.trim() === ""){
            return alert("You must write all item details");
        } else 
        {
            onSubmit({
                name: name,
                price: price,
                isDone: isDone,
                id: id
            })

            setName("");
            setPrice("");
            setIsDone(false);
            setId(uuidv4());
        }
    }

    return(
        <div>
            <h3>Add a new shopping item:</h3>
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <div>
                <button type="button" onClick={handleSubmit}>Ok</button>
            </div>
        </div>
    )
}