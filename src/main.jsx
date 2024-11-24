import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./PersonalDetail/LoginPage.jsx";
import About from "./NavbarBtn/About.jsx";
import SignUpForm from "./PersonalDetail/SIgnUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Heading-Part/Navbar.jsx";
import Contact from "./NavbarBtn/Contact.jsx";
import Service from "./NavbarBtn/Service.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Service",
    element: <Service />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUpForm />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
