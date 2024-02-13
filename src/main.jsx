import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Feed from "./pages/Feed";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Internships from "./pages/Internships";
import Profile from "./pages/Profile";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/Community",
    element: <Community />,
  },
  {
    path: "/Resources",
    element: <Resources />,
  },
  {
    path: "/Internships",
    element: <Internships />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
