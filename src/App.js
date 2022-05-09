import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

function App() {
  return (
    <div className="app">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Header />
        <Outlet />
      </StateProvider>
    </div>
  );
}

export default App;
