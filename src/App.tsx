import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
