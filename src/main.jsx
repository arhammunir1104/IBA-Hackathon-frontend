
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";
import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <h1>Error Page</h1>,
  children: [
    {
    path: "",
    element: <HomePage />
  },
    {
    path: "login",
    element: <Login />
  },
    {
    path: "signup",
    element: <Signup />
  }]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
