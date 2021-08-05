export default function ShoppingItem({item}){
    return(
        <div className="completed-items">
            <p>{item.name}</p> 
            <p>{item.price}:-</p>
        </div>
    )
}