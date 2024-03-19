import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';
import Loged from './components/Loged/Loged';


function App() {

  const pages = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/loged",
      element: <Loged/>
    },

  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
