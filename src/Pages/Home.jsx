import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../component/Navbar'
import img from '../assets/img.png'

function Home() {

  const [data, setData] = useState([])


  useEffect(() => {
    axios.get('https://strapi-store-server.onrender.com/api/products?featured=true')
      .then(res => {
        setData(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Navbar />
      <div className='w-[80%] mx-auto my-10'>
        <div className='lg:grid grid-cols-2'>
          <div>
            <h1 className='text-7xl font-bold text-[#394E6A] my-5'>We’re changing the way people shop.</h1>
            <p className='text-xl my-7 text-[#394E6A]'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
            <button className='bg-blue-500 hover:bg-blue-700 transition duration-500 text-white p-3 rounded-lg'>OUR PRODUCTS</button>
          </div>
          <img src={img} className='p-11 hidden lg:inline rounded-lg' />
        </div>
        <h1 className='text-2xl font-bold'>Featured Products</h1>
        <hr className='my-5' />
        <div className='grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 p-'>
          {
            data.map(data => {
              return <div key={data.id} className='text-center mx-auto w-full shadow-[#cfc5c5f8] shadow-lg p-5 rounded-lg '>
                <img src={data.attributes.image} className='rounded-lg h-[200px] md:h-[300px] w-full' alt="" />
                <p>{data.attributes.title[0].toUpperCase() +
                  data.attributes.title.slice(1)}</p>
                <span>${data.attributes.price}</span>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home