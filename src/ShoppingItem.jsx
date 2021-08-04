export default function ShoppingItem({item}){
    return(
        <div className="items">
            <div>
                <input type="checkbox"/>
            </div>
            <p>{item.name}</p> 
            <p>{item.price}:-</p>
        </div>
    )
}