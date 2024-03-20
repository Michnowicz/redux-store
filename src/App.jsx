import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';
import Loged from './components/Loged/Loged';
import Products from './components/Products/Products';
import UniqueProduct from './components/UniqueProduct/UniqueProduct';

import { useSelector } from 'react-redux';


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
    {
      path:"/:location",
      element: <Products/>
    },
    {
      path:"/:location/:id",
      element: <UniqueProduct/>
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
