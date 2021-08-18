// You dont need to pass id.
// Why?
// Because item.id contains the same information
export default function ShoppingItem({ item, id, markDone }) {
  // You can add destructuring so you can use shorter names
  const { name, price } = item; // and same with "id", but you need to remove from the function arguments on top.

  return (
    <div className="items">
      <div>
        <input type="checkbox" onChange={() => markDone(id)} />
      </div>
      <p>{name}</p>
      <p>{price}:-</p>
    </div>
  );
}
