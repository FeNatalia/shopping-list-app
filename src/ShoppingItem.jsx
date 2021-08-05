export default function ShoppingItem({item, index, markDone}){
    return(
        <div className="items">
            <div>
                <input type="checkbox" onClick={() => markDone(index)}/>
            </div>
            <p>{item.name}</p> 
            <p>{item.price}:-</p>
        </div>
    )
}