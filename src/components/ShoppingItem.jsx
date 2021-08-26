export default function ShoppingItem({item, markAsDone}){
  const { id, name, price, isDone } = item;
  return(
    <div className={ isDone===false? "items": "completed-items" }>
        { isDone === false && 
        <div>
            <input type="checkbox" onChange={() => markAsDone(id)}/>
        </div>}
        <p>{name}</p> 
        <p>{price}:-</p>
    </div>
  )
}