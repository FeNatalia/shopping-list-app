import {useEffect, useState} from "react";

//local files
import Nav from "./components/Nav";
import Instructions from "./components/Instructions";
import ShoppingItem from "./components/ShoppingItem";
import Form from "./components/Form";
import Completed from "./components/Completed";
import Uncompleted from "./components/Uncompleted";

//styles
import "./styles/style.css";

export default function App() {

  const [items, setItems] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);

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
      {/*This shows welcome and instructions if the list is empty*/}
      {items.length === 0 ? <Instructions/> : null}

      {/*This shows a shopping list items if the list is not empty */}
      {items.length !== 0 ? <Uncompleted UncompletedItems={UncompletedItems}/> : null}
      
      {/*Add item form is always present */}
      <div className="main-form">
          <button onClick={()=> toggleForm ? setToggleForm(false) : setToggleForm(true)}>
            Add item
          </button>
        {toggleForm && (<Form onSubmit={(itemData)=> createItem(itemData)}/>)}
      </div>
      
      {/*This shows completed items if it is not empty*/}
      {CompletedItems.length > 0 ? <Completed CompletedItems={CompletedItems}/> : null}
    </div>
  );
}

