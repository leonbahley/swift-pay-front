import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import Cards from "./pages/Cards";
import SharedLayout from "./components/SharedLayout";
import Transactions from "./pages/Transactions";
import Donate from "./pages/Donate";
import { PublicRoute } from "./components/PublicRoute";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<PrivateRoute component={Cards} />} />
          <Route
            path="transactions"
            element={<PrivateRoute component={Transactions} />}
          />
          <Route path="donate" element={<PrivateRoute component={Donate} />} />
        </Route>

        <Route path="login" element={<PublicRoute component={Login} />}></Route>
        <Route
          path="register"
          element={<PublicRoute component={Register} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
