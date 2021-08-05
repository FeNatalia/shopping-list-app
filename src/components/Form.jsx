import {useState} from "react";

export default function Form({ onSubmit }){
    const [name, setName] = useState("");
    const [price, setPrice] =useState("");
    const [isDone, setIsDone] =useState(false);

    const handleSubmit = () => {
        onSubmit({
            name: name,
            price: price,
            isDone: isDone
        })

        setName("");
        setPrice("");
        setIsDone(false);
    }

    const validateForm = () => {
        const errors = {};
        if (!name) errors.name = "You must write the item name";
        if (!price) errors.price = "You must write the item price";
        return errors;
    }

    return(
        <form>
            <h3>Add a new shopping item:</h3>
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button type="button" onClick={handleSubmit}>Add</button>
        </form>
    )
}