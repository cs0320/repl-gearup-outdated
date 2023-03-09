import { useState } from "react";
import "../styles/App.css";
import Header from "./components/Header";

function App() {
  // The data state is an array of strings, which is passed to our components
  // You may want to make this a more complex object, but for now it's just a string
  const [history, setHistory] = useState<string[]>([]);

  return (
    <div>
      <Header />
      <div className="repl">
        {/* TODO: Add HistoryBox */}
        <hr />
        {/* TODO: Add InputBox */}
      </div>
    </div>
  );
}

export default App;
