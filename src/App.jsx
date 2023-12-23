import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ideas from "./pages/Ideas";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </>
  );
}

export default App;
