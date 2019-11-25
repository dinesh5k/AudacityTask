import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer.jsx";
import AddReactionToGrid from "./components/AddReactionToGrid.jsx";
import ReactionsGrid from "./components/ReactionsGrid.jsx";
import "./styles/styles.css";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store} className="App">
      <AddReactionToGrid />
      <ReactionsGrid />
    </Provider>
  );
}
export default App;
