
import './App.css'


import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Header from './components/Header'
import Footer from './components/Footer'



import Skills from './components/Skills'



const Router = createBrowserRouter([

  {
    path: '/',
    element: <div>
      <Header />
      <Home />
      <About/>
      <Footer />

    </div>,
  },
 
  {
    path: '/about',
    element: <div>
      <Header />
      <About />
      <Footer />

    </div>,
  },
  {
    path: '/skills',
    element: <div>
      <Header />
      <Skills />
      <Footer />

    </div>,
  },
  {
    path: '/projects',
    element: <div>
      <Header />
      <Project />
      <Footer />

    </div>,
  },
  {
    path: '/contact',
    element: <div>
      <Header />
      <Contact />
      <Footer />

    </div>,
  }
])

function App() {

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
