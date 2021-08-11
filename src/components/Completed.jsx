import { useState } from "react";

export default function Completed({CompletedItems}){
    const [toggleCompletedList, setCompletedList] = useState(false);

    return(
    <div className="main-page">
        <p className="underline" onClick={()=> toggleCompletedList ? setCompletedList(false) : setCompletedList(true)}>
        View completed items
        </p>
        {toggleCompletedList && CompletedItems}
    </div>
    )
}