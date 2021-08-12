import {useEffect, useState} from "react";
//local files
import logo from "./assets/images/logo.jpg";
import Instructions from "./components/Instructions";
import ShoppingItem from "./components/ShoppingItem";
import Form from "./components/Form";
//styles
import "./styles/style.css";

export default function App() {
  //State
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

  function sortListByName() {
    const sorted = items.sort((a,b) => a.name > b.name);

    setItems([...sorted]);
    localStorage.setItem("items", JSON.stringify(items));
  }

  function sortListByPrice() {
    const sorted = items.sort((a,b) => a.price - b.price);

    setItems([...sorted]);
    localStorage.setItem("items", JSON.stringify(items));
  }

  //Lists
  const UncompletedItems = (items.filter((item) => !item.isDone).map((item) =>
    <ShoppingItem key={item.id} item={item} markDone={markDone}/>
  ));
  const CompletedItems = (items.filter((item) => item.isDone).map((item) =>
    <ShoppingItem key={item.id} item={item}/>
  ));

  return (
    <div className="App">
      <div className="nav">
        <img src={logo} alt="a logotype in blue and yellow that says eika"/>
      </div>
      {/*This shows welcome + instructions if the list is empty, if not empty then the shopping list*/}
      {items.length === 0 ? <Instructions/> :
      <div className="main-page">
        <h1>My shopping list</h1>
        <div className="sorting">
          <p>Sort by:</p>
          <p className="underline" onClick={sortListByName}>Name</p>
          <p className="underline" onClick={sortListByPrice}>Price</p>
        </div>
        {UncompletedItems}
      </div>}
      {/*Add item form is always present */}
      <div className="main-form">
        <div>
        <button onClick={()=> toggleForm ? setToggleForm(false) : setToggleForm(true)}>
          Add item
        </button>
        </div>
        {toggleForm && (<Form onSubmit={(itemData)=> createItem(itemData)}/>)}
      </div>
      {/*This shows completed items if it is not empty*/}
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

