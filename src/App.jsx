// NPM Packages
import { useEffect, useState } from "react";
// Project files
import Logo from "./assets/images/logo.jpg";
import Instructions from "./screens/Instructions";
import NormalScreen from "./screens/NormalScreen";
import "./styles/style.css";

export default function App() {
  // Local State
  const [items, setItems] = useState([]);

  // Methods
  useEffect(() => {
    const data = localStorage.getItem("items");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <div className="nav">
        <img src={Logo} alt="a logotype in blue and yellow that says eika" />
      </div>
      {items.length === 0 ? (
        <Instructions items={items} setItems={setItems} />
      ) : (
        <NormalScreen items={items} setItems={setItems} />
      )}
    </div>
  );
}
