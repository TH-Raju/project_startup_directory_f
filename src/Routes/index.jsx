import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddStartup from "../Pages/AddStartup";
import Search from "../Pages/Home/Search";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addstartup",
        element: <AddStartup />,
      },
      {
        path: "/search/:searchTerm",
        loader: ({ params }) =>
          fetch(
            `https://startup-directory-5vyho7snc-th-raju.vercel.app/api/v1/startup/search?searchTerm=${params.searchTerm}`
          ),
        element: <Search />,
      },
    ],
  },
]);
