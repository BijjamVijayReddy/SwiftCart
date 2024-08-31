import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assests/logo.png"
import SpinLoader from '../../components/spinLoader/SpinLoader';
import { fetchApi } from '../../services/api';

const eyeSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "brown" }} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

const eyeSlash = (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "brown" }} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
);

function Login() {
    const navigate = useNavigate();
    const [isShow, setShow] = useState(false);
    const [data, setData] = useState({
        userEmail: "",
        userPassword: ""
    });

    const navigateHandler = () => {
        navigate("/signUp");
    };

    const passwordHandler = () => {
        setShow((prevShow) => !prevShow);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const userData = JSON.stringify(data);
            const result = await fetchApi('POST', "/login", userData);
            console.log(JSON.stringify(result.token));
            sessionStorage.setItem("token", result.token);
            navigate("/dashboard");
        } catch (error) {
            // console.error(JSON.stringify(error));
            alert("Invalid email or password.")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div>

            <div className="overflow-x-auto w-[80%] sm:w-[30%] mx-auto mt-[8%] bg-[#fcfcfc]">
                <img src={logo} alt="logo" className="h-[60px] mx-auto" />
                <h2 className="text-[26px] text-center mt-[25px]">Log in to Swift Cart</h2>
                <h5 className="text-center text-[15px] mb-[15px] mt-[5px]">Welcome back. Please log in to continue.</h5>
                <form onSubmit={submitHandler}>
                    <div className="mb-6 mt-[10%]">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input
                            type="email"
                            name="userEmail"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-[rgb(27, 27, 27)]-900 text-sm rounded-[5px] block w-full p-2.5 dark:placeholder-gray-400"
                            placeholder="john.doe@company.com"
                            required
                            value={data.userEmail}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-7">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                            type={isShow ? 'text' : 'password'}
                            name="userPassword"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] block w-full p-2.5 dark:placeholder-gray-400"
                            placeholder="•••••••••"
                            required
                            value={data.userPassword}
                            onChange={handleChange}
                        />
                        <span
                            className="cursor-pointer justify-end flex relative -top-[35px] -left-[10px]"
                            onClick={passwordHandler}
                        >
                            {isShow ? eyeSvg : eyeSlash}
                        </span>
                    </div>
                    <div className="flex items-start mb-7">
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Don't have an account?{' '}
                            <span
                                onClick={navigateHandler}
                                className="text-[brown] cursor-pointer hover:underline font-semibold"
                            >
                                Sign up now!
                            </span>.
                        </label>
                    </div>
                    <div className="w-full bg-[brown] rounded-[5px]">
                        <button
                            type="submit"
                            className="w-[99%] bg-brown-500 font-medium h-[44px] border-none px-[24px] py-[10px] text-white text-sm text-center"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Login;
