import React, { useState } from 'react';
import "./Cart.css"
import AppHeader from '../../components/AppHeader/AppHeader'
import AppFooter from '../../components/AppFooter/AppFooter'
import { useDispatch, useSelector } from 'react-redux'
import SucessToast, { showToast } from '../../components/toast/SucessToast';

const deleteSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: "brown" }} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
);

const priceSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: "brown" }} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

);

const quantitySvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: "brown" }} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>

)



const Cart = () => {
    const CartItems = useSelector((state) => state.cart.cartItems);
    const cartPrice = useSelector((state) => state.cart.totalPrice)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const [isDelete, setDelete] = useState(false)
    const dispatch = useDispatch()

    const removeItem = (item) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item
        });
        setDelete(true);
        showToast("Item removed! 🗑️");
    }

    return (
        <div>
            <AppHeader />
            {isDelete ? <SucessToast /> : null}

            {CartItems.length < 1 ? <p className='text-center  mt-5 text-[brown] font-bold'>Your shopping cart is waiting to be filled</p> : (<div>
                <div className="overflow-x-auto w-[90%] mx-auto text-center mt-5">
                    <table className="w-full border-separate border border-slate-500 bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-slate-600 p-2">Image</th>
                                <th className="border border-slate-600 p-2">Product Title</th>
                                <th className="border border-slate-600 p-2">₹Price</th>
                                <th className="border border-slate-600 p-0">Quantity</th>
                                <th className="border border-slate-600 p-0">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CartItems.map((item, index) => (
                                <tr key={index} className="bg-white border-b border-slate-200">
                                    <td className="border border-slate-600 p-2 flex justify-center items-center">
                                        <img src={item.img} alt="img" className="h-[50px] w-[50px] rounded-full object-cover transition-all duration-300 ease-in-out" />
                                    </td>
                                    <td className="border border-slate-600 p-2">{item.product_name}</td>
                                    <td className="border border-slate-600 p-2">
                                        ₹{(parseInt(item.price.replace(/,/g, '')) * item.quantity).toLocaleString('en-IN')}
                                    </td>
                                    <td className="border border-slate-600 p-2">{item.quantity}</td>
                                    <td className="border border-slate-600 p-2">
                                        <div className="flex justify-center cursor-pointer items-center h-full" onClick={() => removeItem(item.id)}>
                                            {deleteSvg}
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto w-[90%] mx-auto  mt-5">
                    <div className='flex '> {quantitySvg} totalQuantity : {totalQuantity} </div>
                    <div className='flex'>  {priceSvg} Price : ₹{ }{parseFloat(cartPrice).toLocaleString('en-IN')}/- </div>
                </div>
                <div className='flex justify-evenly	'>
                    <button className='checkout_btn'>Checkout</button>
                    <button className='checkout_btn'>Add More</button>
                </div>
            </div>)}


            <div className='mt-[50px]'>
                <AppFooter />
            </div>
        </div>
    )
}

export default Cart
