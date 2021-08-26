// NPM Packages
import { useState } from "react";

// Project files
import Form from "./Form";

export default function Button({items, setItems}){
    // Local State
    const [toggleForm, setToggleForm] = useState(false);

    // Methods
    function createItem(itemData) {
        setItems([...items, itemData]);
    }

    return(
        <div className="main-form">
            <div>
                <button className="button-main"onClick={()=> toggleForm ? setToggleForm(false) : setToggleForm(true)}>
                {toggleForm === false? "Add item" : "Hide form"}
                </button>
            </div>
            {toggleForm && (<Form onSubmit={(itemData)=> createItem(itemData)}/>)}
        </div>
    )
}