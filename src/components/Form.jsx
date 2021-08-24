import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // this was not neccesary at all

/**
 * Even with the comment added on handleSubmit(),
 * look how clean this component look because is only 50 lines long. Good job on it.
 * Now compare it to App.jsx to see the difference between the two.
 */
export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [id, setId] = useState(uuidv4());

  /**
   * Use functions instead of constants
   * This method is trying to do too much:
   * 1. Is checking the price first, it should check first the product name.
   * 2. The validation cases could be refactored to look more elengantly.
   * Check my requestItem method for a clean example.
   * -1 (Readability and Reusability)
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (price <= 0) {
      return alert("The price must be a number which is more than 0");
    }
    if (name.trim() === "" || price.trim() === "") {
      return alert("You must write all item details");
    } else {
      onSubmit({
        name: name,
        price: price,
        isDone: isDone,
        id: id,
      });

      setName("");
      setPrice("");
      setIsDone(false);
      setId(uuidv4()); // the sedId should be done before not after. It meas you have an new Id floating around before you actually need it.
    }
  };

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
      <div>
        <button type="button" onClick={handleSubmit}>
          Ok
        </button>
      </div>
    </div>
  );
}
