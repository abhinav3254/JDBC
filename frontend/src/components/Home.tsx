import React from 'react'
import Nav from './Nav'
import brandsList from '../assets/json/brands.json';
import { Brand } from './interfaces';

const Home = () => {
    const brands: Brand[] = brandsList;
    return (
        <div>
            <Nav />
            <div>
                <img src="https://www.berrylush.com/cdn/shop/files/Web_banner_desktop_1.png?v=1715399773" alt="" />
                {/* brands section */}
                <div className='flex flex-col w-full items-center p-2'>
                    <p className='my-2 text-[40px] text-gray-600'>SHOP BY BRANDS...</p>
                    <div className='flex flex-wrap gap-2 m-auto'>
                        {brands.map((brand) => (
                            <div className='
                            w-[150px] h-[100px] p-2 border border-black flex flex-col justify-center items-center cursor-pointer
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 duration-300
                            ' key={brand.id}>
                                <img className='w-full h-[80%] object-contain' src={brand.logo} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <img src="https://www.berrylush.com/cdn/shop/files/NA_banner01_6d358222-3884-4e57-aa42-833d13396a03.jpg?v=1710148573" alt="" />
                {/* trending now section */}
                <div></div>
            </div>
        </div>
    )
}

export default Home