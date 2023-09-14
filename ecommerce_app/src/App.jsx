import '@fontsource/roboto/300.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import { RootLayout } from './Components/RootLayout';
import { HomePage } from './Components/HomePage/HomePage';
import { Signup } from './Components/Signup/Signup';
import { Login } from './Components/Login/Login';
import { Cart } from './Components/Cart/Cart';
import { ProductsDetails } from './Components/ProductsDetails/ProductsDetails';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout></RootLayout>}>
        <Route path='/homepage' element={<HomePage></HomePage>}></Route>
        <Route index element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product' element={<ProductsDetails></ProductsDetails>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Route>
    )
  )
  return (
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div >

  )
}

export default App
