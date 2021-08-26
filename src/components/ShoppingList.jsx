// NPM Packages
import { useState } from "react";
// Project files
import ShoppingItem from "../components/ShoppingItem";

export default function ShoppingList({ items, setItems }){
    // Local state
    const [toggleCompletedList, setCompletedList] = useState(false);

    // Methods
    function markAsDone(id){
        const newItems = [...items].map((item) => {
          if (item.id === id) {
            item.isDone = !item.isDone
          }
          return item
        })
        setItems(newItems);
    }

    //Lists
    const UncompletedItems = (items.filter((item) => !item.isDone).map((item) =>
    <ShoppingItem key={item.id} item={item} markAsDone={markAsDone}/>
    ));
    const CompletedItems = (items.filter((item) => item.isDone).map((item) =>
    <ShoppingItem key={item.id} item={item}/>
    ));    

    return(
        <div>
            {UncompletedItems}
            {CompletedItems.length > 0 &&
            <div>
            <button className="underline" onClick={()=> toggleCompletedList ? setCompletedList(false) : setCompletedList(true)}>
            {toggleCompletedList === false ? "View completed items" : "Hide completed items"}
            </button>
            {toggleCompletedList && CompletedItems}
            </div>}
        </div>
    )
}