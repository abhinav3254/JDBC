import React from 'react'
import './Nav.css'
import menCategoriesDataSet from '../assets/json/men_categories.json';
import womenCategoriesDataSet from '../assets/json/women_categories.json';
import { GenderCategory } from './interfaces';
import logo from '../assets/others/logo.svg'

const Nav = () => {
    const menCategory: GenderCategory = menCategoriesDataSet;
    const womenCategory: GenderCategory = womenCategoriesDataSet;

    return (
        <div className='flex w-screen justify-between items-center shadow-md p-2'>
            <img className='h-8' src={logo} alt="" />
            <div className="navbar w-1/2 p-1">
                <div className="dropdown">
                    <button className="dropbtn flex items-center">
                        <p>MEN</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className="dropdown-content">
                        <div className='flex flex-wrap px-10 py-5'>
                            {menCategory.categories.map((data, key) => (
                                <div className='w-1/5' key={key}>
                                    <h5 className='text-red-500'>{data.name}</h5>
                                    <div className='p-2'>
                                        {data.subcategories.map((sub, key) => (
                                            <li className='list-none' key={key}>
                                                <ul className='cursor-pointer text-sm'>{sub}</ul>
                                            </li>
                                        ))}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn flex items-center">
                        <p>WOMEN</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className="dropdown-content">
                        <div className='flex flex-wrap px-10 py-5'>
                            {womenCategory.categories.map((data, key) => (
                                <div className='w-1/5' key={key}>
                                    <h5 className='text-red-500'>{data.name}</h5>
                                    <div className='p-2'>
                                        {data.subcategories.map((sub, key) => (
                                            <li className='list-none' key={key}>
                                                <ul className='cursor-pointer text-sm'>{sub}</ul>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-1/2 px-2'>
                {/* search bar */}
                <div className='flex items-center border border-black w-2/3 p-1'>
                    <input className='w-full h-full border-none outline-none px-2' type="text" placeholder='Search for products,brands and more' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div className='flex flex-col text-black items-center justify-center text-[14px] mx-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p>Profile</p>
                </div>
                <div className='flex flex-col text-black items-center justify-center text-[14px] mx-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p>Wishlist</p>
                </div>
                <div className='flex flex-col text-black items-center justify-center text-[14px] mx-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p>Bag</p>
                </div>
            </div>
        </div>
    )
}

export default Nav