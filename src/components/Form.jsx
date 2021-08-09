import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function Form({ onSubmit }){
    const [name, setName] = useState("");
    const [price, setPrice] =useState("");
    const [isDone, setIsDone] =useState(false);
    const [id, setId] = useState(uuidv4());

    const handleSubmit = () => {
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

    const validateForm = () => {
        const errors = {};
        if (!name) errors.name = "You must write the item name";
        if (!price) errors.price = "You must write the item price";
        return errors;
    }

    return(
        <div className="main-page">
        <form>
            <h3>Add a new shopping item:</h3>
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button type="button" onClick={handleSubmit}>Add</button>
        </form>
        </div>
    )
}