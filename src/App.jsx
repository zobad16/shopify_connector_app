import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import DashboardLayout from "./layouts/Dashboard";
import LoginLayout from "./layouts/Login";
import User from "../src/pages/User/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          exact
          element={<Home />}
          render={() => {
            <Layout>
              <DashboardLayout />
            </Layout>;
          }}
        />
        <Route
          path="/login"
          element={<Login />}
          render={() => {
            <Layout>
              <LoginLayout />
            </Layout>;
          }}
        />
      </Routes>
    </div>
  );
}

export default App;
