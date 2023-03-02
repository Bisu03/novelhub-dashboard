import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import UserManagment from "./pages/UserManagment";
import Announcement from "./pages/Announcement";
import Managenovel from "./pages/Managenovel";
import Suggestion from "./pages/Suggestion";
import Login from "./pages/Login";
import PrivateRoutes from "./routes/Privateroutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<PrivateRoutes />}>
          <Route
            exact
            path="/"
            element={<>dashboard under development</>}></Route>
          <Route path="/usermanagment" element={<UserManagment />}></Route>
          <Route path="/suggestion" element={<Suggestion />}></Route>
          <Route path="/announcement" element={<Announcement />}></Route>
          <Route path="/namagenovel" element={<Managenovel />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
