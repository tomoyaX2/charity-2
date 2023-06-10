import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./modules";
import { AboutUs } from "./modules/AboutUs";
import "rsuite/dist/rsuite.min.css";
import { Documents } from "./modules/Documents";
import { Events } from "./modules/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/documents",
        element: <Documents />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/contacts",
        element: <Events />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
