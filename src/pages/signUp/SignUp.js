import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assests/logo.png"
import SpinLoader from '../../components/spinLoader/SpinLoader';

const eyeSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "brown" }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>

);

const eyeSlash = (<svg xmlns="http://www.w3.org/2000/svg" style={{ color: "brown" }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>
)

function SignUp() {
    const navigate = useNavigate();
    const [isShow, setShow] = useState(false);
    const [show, setIsShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false);


    const naviagteHandler = () => {
        setIsLoading(true)
        setTimeout(() => {
            navigate("/login")
        }, 2000)
    };

    const passwordHandler = () => {
        setShow((prevShow) => !prevShow);
    };

    const confrimPasswordHandler = () => {
        setIsShow((prevShow) => !prevShow);
    }

    return (
        <div>
            {isLoading ? <SpinLoader /> : (<div className="overflow-x-auto w-[40%] mx-auto mt-12 bg-[#fcfcfc]">
                <img src={logo} alt="logo" className="h-[50px]  mx-auto" />
                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2 mt-[20px]">
                        <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border  text-sm rounded-[5px]  w-full p-2.5 " placeholder="john" required />
                        </div>
                        <div>
                            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text" id="last_name" className="bg-gray-50 border  text-gray-900 text-sm rounded-[5px] block w-full p-2.5" placeholder="doe" required />
                        </div>
                        <div>
                            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel" id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " maxLength={10} placeholder=" + 91 -94914 67216" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alternate Number</label>
                            <input type="tel" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " maxLength={10} placeholder=" + 91 -94914 67216" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " placeholder="john.doe@company.com" required />
                    </div>
                    <div class="mb-0">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type={isShow ? 'password' : "Text"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " placeholder="•••••••••" required /><span className="cursor-pointer justify-end flex relative -top-[35px] -left-[10px]" onClick={passwordHandler}>{isShow ? eyeSlash : eyeSvg}</span>
                    </div>
                    <div class="mb-0">
                        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type={show ? 'password' : "Text"} id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " placeholder="•••••••••" required /> <span className="cursor-pointer justify-end flex relative -top-[35px] -left-[10px]" onClick={confrimPasswordHandler}>{show ? eyeSlash : eyeSvg}</span>
                    </div>
                    <div class="flex items-start mb-4">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-gray-600 hover:underline dark:text-gray-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="w-[99%] bg-[brown] font-medium h-[44px] border-none px-[24px] py-[10px] text-white text-sm text-center">Submit</button>

                    <div class="flex items-start mt-4">
                        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? <span onClick={naviagteHandler} className="text-[brown] cursor-pointer hover:underline  font-semibold"> Sign in now.</span></label>
                    </div>
                </form>

            </div>)}

        </div>
    )
}

export default SignUp
