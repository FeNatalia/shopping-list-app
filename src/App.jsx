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
      <Form onSubmit={(itemData)=> createItem(itemData)}/>
      {items.length !== 0 ?
      <div className="main-page">
        <h1>My shopping list</h1>
        {UncompletedItems}
        <h3>Completed items</h3>
        {CompletedItems}
      </div> : null}
    </div>
  );
}

