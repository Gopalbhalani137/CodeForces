import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../layout/Home";
import Homemain from "../Components/Homemain";
import Repo from "../Components/Repo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element:<Homemain />
      },
      {
        path: "/repo",
        element:<Repo />
      }
    ]
  }
]);
export default router;
