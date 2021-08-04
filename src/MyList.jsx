import {useState} from "react";
import ShoppingItem from "./ShoppingItem";
import MyForm from "./MyForm";

export default function MyList(){

    const [items, setItems] = useState([]);

    function createItem(itemData) {
        setItems([itemData, ...items]);
    }

    const ItemsArray = items.map((item) => (
        <ShoppingItem key={item.id} item={item}/>
    ));

    return(
        <div className="main-page">
            <h1>My shopping list</h1>
            <MyForm onSubmit={(itemData)=> createItem(itemData)}/>
            {ItemsArray}
            <h3>Completed items</h3>
        </div>
    )
}