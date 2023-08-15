
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import SinglePage from './Pages/SinglePage'

function App() {


  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />
    },{
      path:'/products',
      element:<Products />
    },
    {
      path:'/single',
      element:<SinglePage />
    }
  ])

  return (
    <div >
      <RouterProvider router={routes} />
    </div>
  )
}

export default App