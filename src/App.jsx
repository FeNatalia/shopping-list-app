import Nav from "./components/Nav";
import Instructions from "./components/Instructions";
import "./styles/style.css";
import { useState } from "react";
import ShoppingItem from "./components/ShoppingItem";
import CompletedShoppingItem from "./components/CompletedShoppingItem";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = useState([]);

  function createItem(itemData) {
    setItems([...items, itemData]);
  }

  function markDone(id) {
    const newItems = [...items].map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setItems(newItems);
  }

  const UncompletedItems = items
    .filter((item) => !item.isDone)
    .map((item) => (
      <ShoppingItem
        key={item.id}
        id={item.id}
        item={item}
        markDone={markDone}
      />
    ));

  const CompletedItems = items
    .filter((item) => item.isDone)
    .map((item) => (
      <CompletedShoppingItem key={item.id} id={item.id} item={item} />
    ));

  return (
    <div className="App">
      <Nav />
      {items.length === 0 ? (
        <Instructions />
      ) : (
        <div className="main-page">
          <h1>My shopping list</h1>
          <Form onSubmit={(itemData) => createItem(itemData)} />
          {UncompletedItems}
          <h3>Completed items</h3>
          {CompletedItems}
        </div>
      )}
      {items.length === 0 ? (
        <Form onSubmit={(itemData) => createItem(itemData)} />
      ) : null}
    </div>
  );
}
