import { useNavigate } from 'react-router-dom'
import { BsMoonFill } from 'react-icons/bs'
function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='bg-[#F0F6FF]'>
      <div className='flex justify-between w-[80%] mx-auto  p-3'>
        <h1 className='bg-blue-600 text-white text-2xl font-bold rounded-lg py-2 px-4' >C</h1>
        <div className='flex gap-3'>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/products')}>Products</button>
          <button>Cart</button>
        </div>
        <div className='flex gap-3'>
          <button><BsMoonFill /></button>
          <button>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar