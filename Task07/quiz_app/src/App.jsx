import { Root } from './Components/Root'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { StartPage } from './Components/Pages/StartPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Components/Store/Store';
import { QuizPage } from './Components/Pages/QuizPage';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root></Root>}>
        <Route index element={<StartPage />} />
        <Route path='/quiz' element={<QuizPage/>}></Route>
      </Route>
    )
  )

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App