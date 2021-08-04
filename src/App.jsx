import Nav from "./Nav";
import Instructions from "./Instructions";
import "./styles/style.css";
import MyList from "./MyList";

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Instructions/>
      <MyList/>
    </div>
  );
}

