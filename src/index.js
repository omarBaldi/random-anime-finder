import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Provider from "./context/animeContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>
);
