export default function ShoppingItem({item, markDone}){
    const { id, name, price, isDone } = item;
    return(
        <div className="items">
            { isDone === false ? 
            <div>
                <input type="checkbox" onChange={() => markDone(id)}/>
            </div> : null}
            <p>{name}</p> 
            <p>{price}:-</p>
        </div>
    )
}