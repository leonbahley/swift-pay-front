import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import Cards from "./pages/Cards";
import SharedLayout from "./components/SharedLayout";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
