// NPM Packages
import { useState } from "react";

// Project files
import ButtonAddItem from "../components/ButtonAddItem";
import ButtonToggle from "../components/ButtonToggle";
import ShoppingList from "../components/ShoppingList";
import ShoppingItem from "../components/ShoppingItem";
import Sorter from "../components/Sorter";

export default function NormalScreen({ items, setItems }) {
  // Local state
  const [toggleCompletedList, setCompletedList] = useState(false);

  const CompletedItems = items
    .filter((item) => item.isDone)
    .map((item) => <ShoppingItem key={item.id} item={item} />);

  return (
    <div className="main-page">
      <h1>My shopping list</h1>
      <Sorter items={items} setItems={setItems} />
      <ShoppingList items={items} setItems={setItems} />
      <ButtonAddItem items={items} setItems={setItems} />
      {CompletedItems.length > 0 && (
        <ButtonToggle
          toggleCompletedList={toggleCompletedList}
          onClick={() =>
            toggleCompletedList
              ? setCompletedList(false)
              : setCompletedList(true)
          }
        />
      )}
      {toggleCompletedList && CompletedItems}
    </div>
  );
}
