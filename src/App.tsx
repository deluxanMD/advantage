import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App" data-testid="App.Container">
      {count > 0 && <h1>Heading</h1>}
    </div>
  );
};

export default App;
