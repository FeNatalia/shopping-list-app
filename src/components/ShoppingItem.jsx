export default function ShoppingItem({item, markDone}){
    return(
        <div className="items">
            { item.isDone === false ? 
            <div>
                <input type="checkbox" onChange={() => markDone(item.id)}/>
            </div> : null}
            <p>{item.name}</p> 
            <p>{item.price}:-</p>
        </div>
    )
}