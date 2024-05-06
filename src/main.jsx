import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root.jsx';
import About from './routes/About';
import Prezzi from './routes/Prezzi';
import Contattaci from './routes/Contattaci';
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/prezzi",
    element: <Prezzi/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/contattaci",
    element: <Contattaci/>,
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
