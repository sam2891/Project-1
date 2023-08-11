import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarreact from "./components/navbar";
import Carousalreact from "./components/carousel";

function App() {
  return (
    <div className="App">
      <Navbarreact />
      <Carousalreact />
    </div>
  );
}

export default App;
