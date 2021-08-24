/**
 * markDone sounds like a property,
 * markAsDone sounds more like a function passed from the parent,
 * to call from here (a callback)
 */
export default function ShoppingItem({ item, markDone }) {
  const { id, name, price, isDone } = item;

  // add an space between the destructuring const and the returned JSX
  return (
    <div className={isDone === false ? "items" : "completed-items"}>
      {isDone === false ? (
        <div>
          <input type="checkbox" onChange={() => markDone(id)} />
        </div>
      ) : null}
      <p>{name}</p>
      <p>{price}:-</p>
    </div>
  );
}
