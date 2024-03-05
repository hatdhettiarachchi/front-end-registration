import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration1 from "./pages/Registration1";

function App() {
  return (
    <Router>
      <div className="App">
        <Registration1 />
      </div>
    </Router>
  );
}

export default App;
