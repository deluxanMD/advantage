import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App" data-testid="App.Container">
      {count > 0 && <h1>Heading</h1>}
      <button onClick={() => setCount((oldValue) => oldValue + 1)}>
        Increment button
      </button>
    </div>
  );
};

export default App;
