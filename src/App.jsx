
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import HomePage from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    [
      {path:"/",element:<Registration/>},
      {path:"/login",element:<Login/>},
      {path:"/home",element:<HomePage/>},
      {path:"/register",element:<Registration/>},

    ]
  )
  

  return <RouterProvider router={router}/>
}


export default App
