import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./modules";
import { AboutUs } from "./modules/AboutUs";
import "rsuite/dist/rsuite.min.css";
import { Documents } from "./modules/Documents";
import { Event1 } from "./modules/Events/1";
import { Event2 } from "./modules/Events/2";
import { Event3 } from "./modules/Events/3";
import { Event4 } from "./modules/Events/4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/documents",
    element: <Documents />,
  },
  {
    path: "/event",
    children: [
      {
        path: "/event/1",
        element: <Event1 />,
      },
      {
        path: "/event/2",
        element: <Event2 />,
      },
      {
        path: "/event/3",
        element: <Event3 />,
      },
      {
        path: "/event/4",
        element: <Event4 />,
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
