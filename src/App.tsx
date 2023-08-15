import { useRef } from "react";
import "./styles.css";

export default function App() {
  const appRef = useRef(null);

  const toggleDialog = () => {};

  return (
    <div className="App" ref={appRef}>
      <h1>Some App</h1>

      <div className="small left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        doloremque minus soluta qui inventore quos aspernatur corrupti
        explicabo, nisi eligendi!
        <button onClick={toggleDialog}>open dialog</button>
      </div>

      <div className="small right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        doloremque minus soluta qui inventore quos aspernatur corrupti
        explicabo, nisi eligendi!
        <button onClick={toggleDialog}>open dialog</button>
      </div>
    </div>
  );
}
