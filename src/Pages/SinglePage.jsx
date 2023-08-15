import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { addSavat } from '../Redux/appSlice'

import Navbar from '../components/Navbar'

function SinglePage() {
    const dispatch = useDispatch()
    const [active, setActive] = useState(null)

    const { state } = useLocation()

    const notify = () => toast.success("Item added to cart!", {
        position: toast.POSITION.TOP_CENTER
    });



    const [toCart, setToCart] = useState({
        title: state.data.attributes.title,
        company: state.data.attributes.company,
        color: '',
        count: 0,
        price: state.data.attributes.price,
        img: state.data.attributes.image
    })


    useEffect(() => {
        setToCart({ ...toCart, color: active })
    }, [active])

    function addTOCard() {
        notify()
        dispatch(addSavat(toCart))
    }

    return (
        <>
            <ToastContainer position="top-right" />
            <Navbar />
            <div className='container text-xl w-[80%] mx-auto grid lg:grid-cols-2 justify-center'>
                <div className='p-10'>
                    <img src={state.data.attributes.image} className='rounded-lg w-full md:h-[500px]' alt="" />
                </div>
                <div className=''>
                    <h2 className='text-3xl text-[#394E6A] font-bold mt-5'>{state.data.attributes.title[0].toUpperCase() + state.data.attributes.title.slice(1)}</h2>
                    <p className='font-bold text-[#C7C9D2]'>{state.data.attributes.company}</p>
                    <p className='my-3'>$ {state.data.attributes.price}</p>
                    <p className='text-lg text-[#394E6A]'>{state.data.attributes.description}</p>

                    <p>Colors</p>
                    <div className='flex gap-2'>
                        {
                            state.data.attributes.colors.map(p => <button name='color' key={p}
                                onClick={() => {
                                    setActive(p)
                                }}
                                className={` ${active === p ? "border-[3px] border-black" : ""
                                    } w-[25px] h-[25px] border-1px  rounded-full`}
                                style={{ backgroundColor: p }}
                            ></button>)
                        }
                    </div>

                    <label htmlFor="amount">Amount</label>
                    <br />
                    <select onChange={(e) => setToCart({ ...toCart, [e.target.name]: e.target.value })} name='count' className='w-[50%] rounded-lg border p-1 px-2 my-3' id='amount'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <br />
                    <button onClick={() => addTOCard()} className='bg-blue-900 text-white p-3 rounded-lg mt-5'>ADD TO BUG</button>
                </div>
            </div>
        </>
    )
}

export default SinglePage