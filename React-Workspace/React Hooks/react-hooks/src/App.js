import "./App.css";
import Ref from "./components/Ref";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";

function App() {
  return (
    <div className="App">
      <div className="components">
        <div className="box">
          <UseState></UseState>
        </div>
        <div className="box">
          <UseEffect></UseEffect>
        </div>
        <div className="box">
          <UseContext></UseContext>
        </div>
        <div className="box">
          <Ref></Ref>
        </div>
      </div>
    </div>
  );
}

export default App;
