import Navbar from "./components/Navbar";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserManagment from "./pages/UserManagment";
import Announcement from "./pages/Announcement";
import Managenovel from "./pages/Managenovel";
import Suggestion from "./pages/Suggestion";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/announcement",
    element: <Announcement />,
  },
  {
    path: "/suggestion",
    element: <Suggestion />,
  },
  {
    path: "/namagenovel",
    element: <Managenovel />,
  },
  {
    path: "/usermanagment",
    element: <UserManagment />,
  },
  {
    path: "/",
    element: <>hello</>,
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
