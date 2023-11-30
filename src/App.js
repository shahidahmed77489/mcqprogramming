import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./Components/LogInPage/LogInPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LogInPage />} />
      </Routes>
    </>
  );
}

export default App;
