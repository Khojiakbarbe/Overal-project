
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/Navbar';
import { decProduct, incProduct, removeProduct } from '../Redux/appSlice';


function Cart() {

    const dispatch = useDispatch()

    const state = useSelector(state => state.products.savat);

    const notify = () => toast.error("Item removed from card", {
        position: toast.POSITION.TOP_CENTER
    });

    function removeF(title){
        dispatch(removeProduct(title))
        notify()
    }

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className='w-[80%] mx-auto my-5' >
                <h1 className='text-2xl font-bold text-[#394E6A]'>{state.length ? 'Shopping Cart' : 'Your Cart Is Empty'}</h1>
                <hr className='my-5' />
                <div className='grid grid-cols-2'>
                    {
                        state.map(cart => <div key={cart.img} className='flex gap-10 my-5'>
                            <img src={cart.img} className='h-[400px] w-[300px] rounded-lg' alt="" />
                            <div>
                                <h1 className='text-4xl font-bold'>{cart.title}</h1>
                                <p className='text-xl font-bold my-5'>{cart.company}</p>
                                <p>Price:${cart.price / 100}</p>
                                <p className='flex items-center my-5 gap-4'>Color: <button className='w-5 h-5 rounded-full' style={{ background: cart.color }} /></p>
                                <p>Amount</p>
                                <div className='flex justify-center bg-blue-700 text-2xl text-white rounded-lg p-1 gap-10 mb-10'>
                                    <button className='bg-slate-500 flex items-center px-3 rounded-lg' onClick={() => dispatch(incProduct(cart.title))}>-</button>
                                    <span>{cart.count}</span>
                                    <button onClick={() => dispatch(decProduct(cart.title))} className='flex items-center px-3 rounded-lg bg-slate-500'>+</button>
                                </div>
                                <p onClick={() => removeF(cart.title)} className='hover:underline cursor-pointer text-blue-700'>Remove</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Cart