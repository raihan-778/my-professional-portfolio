import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Route";
import BgParticles from "./shared/BgParticles/BgParticles";

function App() {
  return (
    <div className="App">
      <BgParticles />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
