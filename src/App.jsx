import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

//components
import Nav from "./components/Nav/Nav";
//pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Login from "./pages/Login";
import About from "./pages/About";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";
import Resume from "./pages/Resume";
import Super from "./pages/Super";
import Tax from "./pages/Tax";
import Profile from "./pages/Profile";

//styles
import "./App.css";
import "./index.css";


const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children:
      [{
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/work/:id",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/super",
        element: <Super />,
      },
      {
        path: "/tax",
        element: <Tax />,
      },
      ],
  },]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;