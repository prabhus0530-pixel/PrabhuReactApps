import { useState } from "react";
import { SayHallo } from './SayHallo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease111
      </button>


    </div>
  );
}

export default App;