import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarreact from "./components/navbar";
import Carousalreact from "./components/carousel";
import Cardreact from "./components/card";
import Productcat from "./components/productcat";

function App() {
  return (
    <div className="App">
      <Navbarreact />
      <Carousalreact />
      <Productcat title={"CLOTHES"} />
      <Cardreact />
      <Productcat title={"ELECTRONICS"} />
    </div>
  );
}

export default App;
