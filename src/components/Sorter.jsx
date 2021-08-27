export default function Sorter({ items, setItems }) {
  // Methods
  function sortListByName() {
    const sorted = items.sort((a, b) => a.name > b.name);

    setItems([...sorted]);
    localStorage.setItem("items", JSON.stringify(items));
  }

  function sortListByPrice() {
    const sorted = items.sort((a, b) => a.price - b.price);

    setItems([...sorted]);
    localStorage.setItem("items", JSON.stringify(items));
  }

  return (
    <div className="sorting">
      <p>Sort by:</p>
      <button className="button-secondary" onClick={sortListByName}>
        Name
      </button>
      <button className="button-secondary" onClick={sortListByPrice}>
        Price
      </button>
    </div>
  );
}
