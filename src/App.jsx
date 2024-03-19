import './App.css'
import { RouterProvider, createBrowserRouter, useNavigate  } from 'react-router-dom';

import Login from './components/Login/Login';

function App() {

  const pages = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
