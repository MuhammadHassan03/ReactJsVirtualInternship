import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import { Main } from './Components/Main';
import { Projects } from './Components/Projects';
import { AboutMe } from './Components/AboutMe';
import { Skills } from './Components/Skills';
import { RootLayout } from './Components/RootLayout';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import AOS from 'aos';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout></RootLayout>}>
        <Route index element={<Main></Main>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
      </Route>
    ))
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
