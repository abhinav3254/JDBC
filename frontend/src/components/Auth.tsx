import { useState } from "react";
import facebook from '../assets/social/facebook.svg'
import instagram from '../assets/social/instagram.svg'
import twitter from '../assets/social/twitter.svg'

import { useNavigate } from 'react-router-dom';

const Auth = () => {

    const navigate = useNavigate();
    const [loginPage, setLoginPage] = useState(true);

    const goToHome = () => {
        navigate('home');
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">

            <div className="flex shadow-xl h-1/2 w-1/2">

                {/* left image */}
                <div className="w-1/2 h-full">
                    <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/portrait-surprised-young-woman-look-amazed-camera-holding-shopping-bags-see-discounts-store-standing-blue-background_1258-70361.jpg?size=626&ext=jpg&ga=GA1.1.1843427183.1715420098&semt=ais_user" alt="" />
                </div>
                {/* right side */}
                {loginPage && (
                    <div className="w-1/2 flex flex-col px-5">
                        <p className="text-xl">Unlock Exclusive Access: Fashion Awaits Behind the Login</p>
                        <div className="border border-gray-500 px-2 py-1 my-1">
                            <input className="border-none outline-none w-[100%]" type="text" placeholder="Enter Email" />
                        </div>
                        <div className="border border-gray-500 px-2 py-1 my-1">
                            <input className="border-none outline-none w-[100%]" type="text" placeholder="Enter Password" />
                        </div>
                        <div className="flex justify-end text-sm">
                            <p>Forgot Password?</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="bg-blue-500 text-white w-[50%] py-2 my-1" onClick={() => { goToHome() }}>Login</button>
                            <p className="my-2 text-sm">New to our style community? <span className="text-red-500 cursor-pointer" onClick={() => setLoginPage(false)}>Join us now!</span></p>
                        </div>
                        {/* social icons */}
                        <div className="flex flex-col items-center">
                            <p className="text-blue-500 my-1">Follow Us on Social</p>
                            <div className="flex justify-around items-center cursor-pointer w-full my-1">
                                <img className="w-9 h-9" src={facebook} alt="" />
                                <img className="w-8 h-8" src={instagram} alt="" />
                                <img className="w-9 h-9" src={twitter} alt="" />
                            </div>
                        </div>
                    </div>
                )}
                {!loginPage && (
                    <div className="w-1/2 flex flex-col px-5">
                        <p className="text-xl">Unlock Exclusive Access: Your Fashion Journey Begins Here!</p>
                        <div className="border border-gray-500 px-2 py-1 my-1">
                            <input className="border-none outline-none w-[100%]" type="text" placeholder="Enter Name" />
                        </div>
                        <div className="border border-gray-500 px-2 py-1 my-1">
                            <input className="border-none outline-none w-[100%]" type="text" placeholder="Enter Email" />
                        </div>
                        <div className="border border-gray-500 px-2 py-1 my-1">
                            <input className="border-none outline-none w-[100%]" type="text" placeholder="Enter Phone" />
                        </div>
                        <div className="border border-gray-500 px-2 py-1 my-1">
                            <select className="w-full h-full border-none outline-none">
                                <option disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="border border-gray-500 px-2 py-1 my-1">
                            <input className="border-none outline-none w-[100%]" type="text" placeholder="Enter Password" />
                        </div>
                        <div className="flex my-1">
                            <input className="mr-1" type="checkbox" />
                            <p className="ml-1 text-sm">Agree to <span className="text-red-500">Terms & Conditions <sup>*</sup></span> </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="bg-blue-500 text-white w-[50%] py-2 my-1" onClick={() => { goToHome() }}>Register</button>
                            <p className="my-2 text-sm">Already a part of our style family? <span className="text-red-500 cursor-pointer" onClick={() => setLoginPage(true)}>Login Here</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Auth