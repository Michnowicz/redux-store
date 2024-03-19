import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';
import Loged from './components/Loged/Loged';
import Products from './components/Products/Products';


function App() {

  const pages = createBrowserRouter([
    {
      path:"/",
      element: <Products/>
    },
    {
      path:"/loged",
      element: <Loged/>
    },
    {
      path:"/login",
      element: <Login/>
    },

  ])

  return (
    <>
      
      <RouterProvider router={pages}>
      </RouterProvider>
    </>
  )
}

export default App
