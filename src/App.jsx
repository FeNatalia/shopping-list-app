/**
 * It looks like you are using Prettier BUT... with some rules changed.
 * The whole point of using Prettier is that everyone uses the same format.
 */

import { useEffect, useState } from "react";
//local files
// call this one Project files, because even the node_modules folder is "local" once is installed into your hard drive.
import logo from "./assets/images/logo.jpg"; // not obligatory, but use uppercase to denote an import instead of a normal variable.
import Instructions from "./components/Instructions";
import ShoppingItem from "./components/ShoppingItem";
import Form from "./components/Form";
//styles
import "./styles/style.css"; // no need to create other category. Styles are part of the local files.

// Good one line export.
// On a separate note, this component is too long (100+ lines) it should be broken down into more sub components. -1 (Readabilty)
export default function App() {
  //State
  // take the time to separate global for local state.
  // here everything is local, but for future projects take it into consideration
  const [items, setItems] = useState([]); // good name, maybe even better than list
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleCompletedList, setCompletedList] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("items");
    if (data) setItems(JSON.parse(data)); // can be moved into 1 line, and Prettier is ok with it.
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function createItem(itemData) {
    setItems([...items, itemData]);
  }

  // maskAsDone feels like a better name.
  function markDone(id) {
    const newItems = [...items].map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setItems(newItems);
  }

  /**
   * This should belong to a sorter component becuase:
   * 1. Is making App.jsx too big (100+ lines)
   * 2. Instructions.jsx does not need it,
   * thus you are putting very specific functionality
   * in the top of the component tree. -1 (Reusability)
   */
  function sortListByName() {
    const sorted = items.sort((a, b) => a.name > b.name);

    setItems([...sorted]);
    localStorage.setItem("items", JSON.stringify(items));
  }

  // same as sort by name
  function sortListByPrice() {
    const sorted = items.sort((a, b) => a.price - b.price);

    setItems([...sorted]);
    localStorage.setItem("items", JSON.stringify(items));
  }

  //Lists
  // to make the project better structured you could have created a separate List or ShoppingList component
  const UncompletedItems = items
    .filter((item) => !item.isDone)
    .map((item) => (
      <ShoppingItem key={item.id} item={item} markDone={markDone} />
    ));
  const CompletedItems = items
    .filter((item) => item.isDone)
    .map((item) => <ShoppingItem key={item.id} item={item} />);

  return (
    <div className="App">
      <div className="nav">
        <img src={logo} alt="a logotype in blue and yellow that says eika" />
      </div>
      {/*This shows welcome + instructions if the list is empty, if not empty then the shopping list*/}
      {items.length === 0 ? (
        <Instructions />
      ) : (
        /**
         * If you have a nice 1 line Instruction screen,
         * the same could have being done to the "Shopping", "Normal" or "Main" screen,
         * to keep it organized. -1
         */
        <div className="main-page">
          <h1>My shopping list</h1>
          <div className="sorting">
            <p>Sort by:</p>
            {/* P tags should not have onClick -1 (Readability) */}
            {/* The correct semantic tag should be <button> and then remove the background with CSS */}
            <p className="underline" onClick={sortListByName}>
              Name
            </p>
            <p className="underline" onClick={sortListByPrice}>
              Price
            </p>
          </div>
          {UncompletedItems}
        </div>
      )}
      {/*Add item form is always present */}
      <div className="main-form">
        <div>
          <button
            onClick={() =>
              toggleForm ? setToggleForm(false) : setToggleForm(true)
            }
          >
            Add item
          </button>
        </div>
        {toggleForm && <Form onSubmit={(itemData) => createItem(itemData)} />}
      </div>
      {/*This shows completed items if it is not empty*/}
      {CompletedItems.length > 0 ? (
        <div className="main-page">
          {/* Againg the correct tag is button -1 */}
          {/* This could be refactor like this using the ! to auto toggle between true and false in 1 line */}
          <button
            className="button underline"
            onClick={() => setCompletedList(!toggleCompletedList)}
          >
            View completed items
          </button>
          <p
            className="underline"
            onClick={() =>
              toggleCompletedList
                ? setCompletedList(false)
                : setCompletedList(true)
            }
          >
            View completed items
          </p>
          {toggleCompletedList && CompletedItems}
        </div>
      ) : null}
    </div>
  );
}
