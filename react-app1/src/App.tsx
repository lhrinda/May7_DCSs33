import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>This is a button</Button>
    </div>
  );
}

export default App;
