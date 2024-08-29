import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../../store/productActions';
import SuccessToast, { showToast } from '../toast/SucessToast';


function NewDeals() {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const [isSuccess, setSuccess] = useState(false)

    React.useEffect(() => {
        dispatch(fetchApi());
    }, [dispatch]);

    const addCart = (item) => {
        setSuccess(true)
        showToast("Item added! 🛒");
        console.log("Item", JSON.stringify(item))
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        });
    };

    return (
        <div>
            {isSuccess ? <SuccessToast /> : null}

            <div className='text-center mt-4 mb-4 font-semibold text-xl'>
                <h2>DAILY DEALS!</h2>
            </div>

            <div className='flex justify-evenly'>
                <h4>New Arrivals</h4>
                <h4 className='realtive left-3'>Best Sellers</h4>
                <h4>Sale Item</h4>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6 max-w-[90%] mx-auto p-1 '>
                {products.map((item) => (
                    <div key={item.id} className="relative overflow-hidden">
                        <img
                            src={item.img}
                            alt="product"
                            className="h-[300px] w-full object-cover rounded-lg transition-all duration-300 ease-in-out hover:h-[350px]"
                        />
                        <div className="absolute inset-1 flex items-center justify-start p-5">
                            <h5 className=" font-medium text-white bg-black bg-opacity-50 px-2 py-1 rounded-lg ">{item.product_name}</h5>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 rounded-lg hover:opacity-100 transition-opacity duration-300">
                            <h5 className="text-white text-lg">₹ {item.price}</h5>
                            <h5 className="text-white text-sm">Discount - {item.discount}</h5>
                            <button className="mt-2 px-4 py-2 bg-[brown] text-white rounded" onClick={() => addCart(item)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>




        </div>
    )
}

export default NewDeals
