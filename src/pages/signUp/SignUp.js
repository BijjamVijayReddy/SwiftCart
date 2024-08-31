import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assests/logo.png"
import SpinLoader from '../../components/spinLoader/SpinLoader';
import { fetchApi } from '../../services/api';
import SuccessToast, { showToast } from '../../components/toast/SucessToast';
import ErrorTaost, { errorToast } from '../../components/toast/ErrorTaost';

const eyeSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "brown" }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
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
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setData] = useState({
        firstName: "",
        lastName: "",
        userMobile: "",
        alterMobile: "",
        userEmail: "",
        userPassword: "",
        isAccepted: false
    });
    const [isSaved, setSaved] = useState(false);
    const [isError, setError] = useState(false)

    const naviagteHandler = () => {
        setIsLoading(true)
        setTimeout(() => {
            navigate("/login")
        }, 1000)
    };

    const passwordHandler = () => {
        setShow((prevShow) => !prevShow);
    };

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setData({
            ...userData, [name]: type === 'checkbox' ? checked : value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = JSON.stringify(userData);

        try {
            const result = await fetchApi('POST', "/create", data);
            console.log(JSON.stringify(result));
            setSaved(true)
            showToast("Registration successful! ✅ Welcome to our platform.");
            setData({
                firstName: "",
                lastName: "",
                userMobile: "",
                alterMobile: "",
                userEmail: "",
                userPassword: "",
                isAccepted: false
            });

            // console.log("Form reset:", userData);
        } catch (error) {
            alert(JSON.stringify(error.response.data))
            setError(true);
            errorToast(error.response.data)
            console.log(error.response.data);
        }
    };



    return (
        <div>
            {isSaved ? <SuccessToast /> : null};
            {isError ? <ErrorTaost /> : null}
            {isLoading ? <SpinLoader /> : (<div className="overflow-x-auto w-[40%] mx-auto mt-[3%] bg-[#fcfcfc]">
                <img src={logo} alt="logo" className="h-[50px]  mx-auto" />
                <h2 className="text-[26px] text-center mt-[15px] ">Sign up for Swift Cart today!</h2>
                <h5 className="text-center text-[15px] mb-[5px] mt-[0px]">Welcome! Please sign up to get started.</h5>

                <form >
                    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-[30px]">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border  text-sm rounded-[5px]  w-full p-2.5 " placeholder="john" name="firstName" value={userData.firstName} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text" id="last_name" className="bg-gray-50 border  text-gray-900 text-sm rounded-[5px] block w-full p-2.5" placeholder="doe" name="lastName" value={userData.lastName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " maxLength={10} placeholder=" + 91 -94914 67216" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="userMobile" value={userData.userMobile} onChange={handleChange} required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alternate Number</label>
                            <input type="tel" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " maxLength={10} placeholder=" + 91 -94914 67216" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="alterMobile" value={userData.alterMobile} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " placeholder="john.doe@company.com" name="userEmail" value={userData.userEmail} onChange={handleChange} required />
                    </div>
                    <div className="mb-0">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type={isShow ? 'password' : "Text"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:bg-gray-700 " placeholder="•••••••••" required name="userPassword" value={userData.userPassword} onChange={handleChange} /><span className="cursor-pointer justify-end flex relative -top-[35px] -left-[10px]" onClick={passwordHandler}>{isShow ? eyeSlash : eyeSvg}</span>
                    </div>

                    <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                name="isAccepted"
                                checked={userData.isAccepted}
                                onChange={handleChange}
                                required
                            />  </div>
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-gray-600 hover:underline dark:text-gray-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" onClick={submitHandler} className="w-[99%] bg-[brown] font-medium h-[44px] border-none px-[24px] py-[10px] rounded-[5px] text-white text-sm text-center">Submit</button>

                    <div className="flex items-start mt-4">
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? <span onClick={naviagteHandler} className="text-[brown] cursor-pointer hover:underline  font-semibold"> Sign in now.</span></label>
                    </div>
                </form>

            </div>)}

        </div>
    )
}

export default SignUp
