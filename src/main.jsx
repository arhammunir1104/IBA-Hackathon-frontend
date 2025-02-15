
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";
import Queries from './Pages/Queries.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <h1>Error Page</h1>,
  children: [
    {
    path: "",
    element: <div>LandingPage</div>
  },
    {
    path: "/queries",
    element: <Queries />
  }]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
        <App />,
  </RouterProvider> 
)
