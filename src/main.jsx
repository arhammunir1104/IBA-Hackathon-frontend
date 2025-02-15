import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Queries from './Pages/Queries.jsx';
import './index.css';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "",
        element: <div>LandingPage</div>,
      },
      {
        path: "queries", 
        element: <Queries />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup", 
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
