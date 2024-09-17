
import React from 'react';
import "./AppFooter.css"
import logo from "../../assests/logo.png";



const AppFooter = () => {
    return (
        <div className='AppFooter'>
            <div className='grid grid-cols-4 flow-row auto-rows-max'>
                <div>
                    <img src={logo} alt="logo" className='img' />
                    <p className='text-xs'>Tasty Treat: Where Flavor Meets Delight, Every Bite is a Journey of Pure Enjoyment!</p>
                </div>

                <div>
                    <h4>About Us</h4>
                    <h6 className='text-xs'>Our Stores</h6>
                    <h6 className='text-xs'>Terms & Conditions</h6>
                    <h6 className='text-xs'>Privacy Policy</h6>
                </div>

                <div>
                    <h4>Contact</h4>
                    <h6 className='text-xs'>+91-9491467216</h6>
                    <h4>Email</h4>
                    <h6 className='text-xs'>bijjamvijayreddy@gmail.com</h6>
                </div>

                <div>
                    <h4>Newsletter</h4>
                    <input placeholder='Enter Email For Latest NEWS' /> <button className='send_btn'>Send</button>
                </div>
            </div>

            <div>
                <p className='text-xs mt-3'>Copyright - 2024, website made by Vijay. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default AppFooter
