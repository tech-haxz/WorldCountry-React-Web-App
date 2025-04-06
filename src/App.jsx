import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Country } from "./pages/Country.jsx";
import { Contact } from "./pages/Contact.jsx";
import { About } from "./pages/About.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import './App.css';
import { CountryDetails } from "./components/Layout/CountryDetails.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div><h1>Not Found</h1></div>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country/:name",
          element: <CountryDetails />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
