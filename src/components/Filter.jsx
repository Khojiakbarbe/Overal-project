import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData, loading } from '../Redux/appSlice';


function Filter() {
    const dispatch = useDispatch();


    const [filter, setFilter] = useState({
        product: '',
        category: 'all',
        company: 'all',
        sort: 'a-z',
        price: 100000
    })


    const [re_get, setRe_get] = useState(true)

    useEffect(() => {
        axios.get(`https://strapi-store-server.onrender.com/api/products?search=${filter.product}&category=${filter.category}&company=${filter.company}&order=${filter.sort}&price=${filter.price}`)
            .then(res => {
                dispatch(addData(res.data.data))
            })
            .catch(err => console.log(err))
    }, [re_get])


    
    function submit(e) {
        e.preventDefault();
        setRe_get(!re_get)
    }

    return (

        <form onSubmit={submit} className='grid items-center sm:grid-cols-2 md:grid-cols-3 rounded-md lg:grid-cols-4 bg-[#F0F6FF] p-5 gap-5'>
            <div>
                <label htmlFor="price">Serarch Product</label>
                <br />
                <input type='search' name='product' value={filter.product} onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value
                })} className='w-full rounded-xl p-1 px-2 my-3' />
            </div>
            <div>
                <label className='' htmlFor="category">Category</label>
                <br />
                <select id='category' className='w-full rounded-xl p-1 px-2 my-3' name='category' onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value
                })}>
                    <option value="all">all</option>
                    <option value="kids">Kids</option>
                    <option value="chairs">Chairs</option>
                    <option value="tables">Tables</option>
                    <option value="beds">Beds</option>
                    <option value="sofas">Sofas</option>
                </select>
            </div>
            <div>
                <label className='' htmlFor="company">Company</label>
                <br />
                <select id='company' className='w-full rounded-xl p-1 px-2 my-3' name='company' onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value
                })}>
                    <option value="all">all</option>
                    <option value="modenza">Modenza</option>
                    <option value="luxora">Luxora</option>
                    <option value="homestead">Homestead</option>
                    <option value="cumfora">Cumfora</option>
                    <option value="sofas">Sofas</option>
                </select>
            </div>

            <div>
                <label htmlFor="sort">Sort By  </label>
                <br />
                <select id='sort' className='w-full rounded-xl p-1 px-2 my-3' name='sort' onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value
                })}>
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                    <option value="high">high</option>
                    <option value="low">low</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Select Price {filter.price / 100}.00</label>
                <br />
                <input type="range" className='w-[90%] mx-auto' value={filter.price / 1000} onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value * 1000
                })} id="price" name="price" min="0" max="100" />
            </div>
            <button className='bg-blue-600 text-white font-bold rounded-lg h-6'>SEARCH</button>
        </form>
    )
}

export default Filter