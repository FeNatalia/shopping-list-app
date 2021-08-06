export default function ShoppingItem({item, id, markDone}){
    return(
        <div className="items">
            <div>
                <input type="checkbox" onChange={() => markDone(id)}/>
            </div>
            <p>{item.name}</p> 
            <p>{item.price}:-</p>
        </div>
    )
}