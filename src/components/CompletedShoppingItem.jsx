export default function ShoppingItem({ item }) {
  // destructuring to make better, see ShoppingItem for more info.
  return (
    <div className="completed-items">
      <p>{item.name}</p>
      <p>{item.price}:-</p>
    </div>
  );
}
