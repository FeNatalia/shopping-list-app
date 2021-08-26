// Project files
import Button from "../components/Button";
import ShoppingList from "../components/ShoppingList";
import Sorter from "../components/Sorter";

export default function NormalScreen({items, setItems}){

    return (
        <div className="main-page">
            <h1>My shopping list</h1>
            <Sorter items={items} setItems={setItems}/>
            <Button items={items} setItems={setItems}/>
            <ShoppingList items={items} setItems={setItems}/>
        </div>
    );
}