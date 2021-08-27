// NPM Packages
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ onSubmit }) {
  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValidation()) {
      onSubmit({
        id: uuidv4(),
        name: name,
        price: price,
        isDone: false,
      });

      setName("");
      setPrice("");
    }
  }

  function inputValidation() {
    if (name.trim() === "") {
      return alert("You must write the item name");
    } else if (price.trim() === "") {
      return alert("You must write the item price");
    } else if (price <= 0) {
      return alert("The price must be a number which is more than 0");
    } else {
      return true;
    }
  }

  return (
    <div>
      <h3>Add a new shopping item:</h3>
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
        <button className="button-main" type="button" onClick={handleSubmit}>
          Add item
        </button>
    </div>
  );
}
