
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'

function App() {

  // const [filter, setFilter] = useState({
  //   name: '',
  //   vals: ''
  // })
  // useEffect(() => {
  //   axios.get('https://strapi-store-server.onrender.com/api/products')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  //   console.log('requested');
  // }, [filter])

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
    }
  ])

  return (
    <div >
      <RouterProvider router={routes} />
    </div>
  )
}

export default App