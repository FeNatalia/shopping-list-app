import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isDone, setIsDone] = useState(false); // no neccesary, check comment inside handleSubmit() for more info
  const [id, setId] = useState(uuidv4());

  //   Here you arent validating if the name is valid or the price is a number
  const handleSubmit = () => {
    onSubmit({
      name: name,
      price: price,
      isDone: isDone,
      id: id,
    });

    setName("");
    setPrice("");
    setIsDone(false); // i review your code, in any part of this Form.jsx component you are changing the value of the isDone. You could get away with using a simple isDone: false
    setId(uuidv4());
  };

  // not used, never put in production code that is not used -1
  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = "You must write the item name";
    if (!price) errors.price = "You must write the item price";
    return errors;
  };

  return (
    <form>
      <h3>Add a new shopping item:</h3>
      {/* Good, compact code here. Congrats */}
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
