import { Button } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

const App = () => {
  return (
    <div className="App" data-testid="App.Container">
      <h1>Headings</h1>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <AccessAlarm />
      <ThreeDRotation />
    </div>
  );
};

export default App;
