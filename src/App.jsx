import {useEffect, useState} from "react";

//local files
import Nav from "./components/Nav";
import Instructions from "./components/Instructions";
import ShoppingItem from "./components/ShoppingItem";
import Form from "./components/Form";

//styles
import "./styles/style.css";

export default function App() {

  const [items, setItems] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleCompletedList, setCompletedList] = useState(false);

  useEffect(()=> {
    const data =localStorage.getItem("items");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items])
  
  function createItem(itemData) {
    setItems([...items, itemData]);
  }

  function markDone(id){
    const newItems = [...items].map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
      return item
    })
    setItems(newItems);
  }

  const UncompletedItems = (items.filter((item) => !item.isDone).map((item) =>
    <ShoppingItem key={item.id} item={item} markDone={markDone}/>
  ));

  const CompletedItems = (items.filter((item) => item.isDone).map((item) =>
    <ShoppingItem key={item.id} item={item}/>
  ));


  return (
    <div className="App">
      <Nav/>
      {items.length === 0 ? <Instructions/> : null}
      {items.length !== 0 ?
      <div className="main-page">
        <h1>My shopping list</h1>
        {UncompletedItems}
      </div> : null}
      <div className="main-page">
      <button onClick={()=> toggleForm ? setToggleForm(false) : setToggleForm(true)}>
        Add item
      </button>
      {toggleForm && (<Form onSubmit={(itemData)=> createItem(itemData)}/>)}
      </div>
      {CompletedItems.length > 0 ?
      <div className="main-page">
        <p className="underline" onClick={()=> toggleCompletedList ? setCompletedList(false) : setCompletedList(true)}>
          View completed items
        </p>
        {toggleCompletedList && CompletedItems}
      </div> : null}
    </div>
  );
}

