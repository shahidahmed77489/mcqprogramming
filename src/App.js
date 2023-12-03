import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./Components/LogInPage/LogInPage";
import FinalResult from "./Components/FinalResult/FinalResult";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LogInPage />} />
        <Route exact path="/finalresult" element={<FinalResult />} />
      </Routes>
    </>
  );
}

export default App;
