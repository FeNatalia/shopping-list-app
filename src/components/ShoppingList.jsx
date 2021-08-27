// Project files
import ShoppingItem from "../components/ShoppingItem";

export default function ShoppingList({ items, setItems }) {
  // Methods
  function markAsDone(id) {
    const newItems = [...items].map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setItems(newItems);
  }

  //Lists
  const UncompletedItems = items
    .filter((item) => !item.isDone)
    .map((item) => (
      <ShoppingItem key={item.id} item={item} markAsDone={markAsDone} />
    ));

  return (
    <div>
      {UncompletedItems.length > 0 
      ? (UncompletedItems) 
      : (<p>No pending items to show</p>
      )}
    </div>
  );
}
