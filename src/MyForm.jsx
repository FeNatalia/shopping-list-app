import {useState} from "react";

export default function MyForm({ onSubmit }){
    const [name, setName] = useState("");
    const [price, setPrice] =useState("");

    const handleSubmit = () => {
        onSubmit({
            name: name,
            price: price
        })

        setName("");
        setPrice("");
    }

    return(
        <form>
            <p>Add a new shopping item:</p>
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button type="button" onClick={handleSubmit}>Add</button>
        </form>
    )
}