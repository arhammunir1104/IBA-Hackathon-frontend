
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <h1>Error Page</h1>,
  children: [
    {
    path: "",
    element: <h1>HelloWork</h1>
  }]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
        <App />,
  </RouterProvider> 
)
