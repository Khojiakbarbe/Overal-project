
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

import { useDispatch } from 'react-redux'
import { addSavat } from '../Redux/appSlice'

function SinglePage() {
    const dispatch = useDispatch()
    const[active,setActive] = useState(null)

    const { state } = useLocation()




    const [count, setCount] = useState(0)
    const toCart = {
        count:count
    }
    return (
        <>
            <Navbar />
            <div className='container text-xl w-[80%] mx-auto grid lg:grid-cols-2 justify-center'>
                <div className='p-10'>
                    <img src={state.data.attributes.image} className='rounded-lg w-full md:h-[500px]' alt="" />
                </div>
                <div className=''>
                    <h2 className='text-3xl font-bold mt-5'>{state.data.attributes.title[0].toUpperCase() + state.data.attributes.title.slice(1)}</h2>
                    <p className='my-3'>$ {state.data.attributes.price}</p>
                    <p>{state.data.attributes.description}</p>

                    <p>Colors</p>
                    <div>
                        {
                            state.data.attributes.colors.map(p => <button
                                onClick={() => {
                                  setActive(p);
                                }}
                                className={` ${
                                  active === p ? "border-[1px] border-black" : ""
                                } w-[25px] h-[25px] border-1px  rounded-full`}
                                style={{ backgroundColor: p }}
                              ></button>)
                        }
                    </div>

                    <label htmlFor="amount">Amount</label>
                    <br />
                    <select className='w-[50%] rounded-lg border p-1 px-2 my-3' id='amount'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <br />
                    <button onClick={() => dispatch(addSavat(state.data))} className='bg-blue-500 p-3 rounded-lg mt-5'>ADD TP BUG</button>
                </div>
            </div>
        </>
    )
}

export default SinglePage