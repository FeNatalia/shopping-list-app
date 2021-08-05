import Nav from "./Nav";
import Instructions from "./Instructions";
import "./styles/style.css";
import {useState} from "react";
import ShoppingItem from "./ShoppingItem";
import CompletedShoppingItem from "./CompletedShoppingItem";
import Form from "./Form";

export default function App() {

  const [items, setItems] = useState([]);


  function createItem(itemData) {
      setItems([...items, itemData]);
  }

  function markDone(index){
      const newItems = [...items];
      newItems[index].isDone = true;
      setItems(newItems);
  }

  const UncompletedItems = (items.filter((item) => !item.isDone).map((item,index) =>
    <ShoppingItem key={index} index={index} item={item} markDone={markDone}/>
  ));

  const CompletedItems = (items.filter((item) => item.isDone).map((item,index) =>
    <CompletedShoppingItem key={index} index={index} item={item}/>
  ));

  return (
    <div className="App">
      <Nav/>
      {items.length === 0 ? <Instructions/> :
      <div className="main-page">
        <h1>My shopping list</h1>
        <Form onSubmit={(itemData)=> createItem(itemData)}/> 
        {UncompletedItems}
        <h3>Completed items</h3>
        {CompletedItems}
      </div>}
      {items.length ===0 ? <Form onSubmit={(itemData)=> createItem(itemData)}/> : null}
    </div>
  );
}

