import React from 'react'
import Nav from './Nav'
import brandsList from '../assets/json/brands.json';
import trendingList from '../assets/json/trending.json';
import { Brand, Trending } from './interfaces';

const Home = () => {
    const brands: Brand[] = brandsList;
    const trendings: Trending[] = trendingList;
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
                <div className='flex flex-col items-center my-2'>
                    <p className='my-2 text-[40px] text-gray-600'>TOP TRENDING...</p>
                    <div className='flex flex-wrap gap-4 w-full justify-center'>
                        {trendingList.map((trending) => (
                            <div className='w-[300px] h-fit py-2 px-1 border border-gray-300' key={trending.id}>
                                {/* <div className='h-[400px] relative'>
                                    <img className='object-cover w-full h-full' src={trending.image} alt="" />
                                    <div className='absolute bottom-0 w-full opacity-0 hover:opacity-100'>
                                        <button className='bg-pink-500 w-full py-2 text-white'>Add to cart</button>
                                    </div>
                                </div> */}
                                <div className='h-[400px] relative' style={{ backgroundImage: `url(${trending.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='absolute bottom-0 w-full opacity-0 hover:opacity-100'>
                                        <button className='bg-pink-500 w-full py-2 text-white'>Add to cart</button>
                                    </div>
                                </div>

                                <p>{trending.name}</p>
                                <div className='flex'>
                                    <p className='mx-1'>{trending.originalPrice}</p>
                                    <s className='mx-1'>{trending.oldPrice}</s>
                                </div>
                                <div className='flex'>
                                    {trending.sizes.map((size) => (
                                        <div className='bg-black text-white text-[10px] w-5 h-5 mx-1 text-center p-[2px]' key={size}>
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <img src="https://www.berrylush.com/cdn/shop/files/partywear_dresses_8b39fdce-9b20-4e7b-914a-0719a77c6759.jpg?v=1710218758" alt="" />
                {/* top rated section */}
                <div className='flex flex-col items-center'>
                    <p className='my-2 text-[40px] text-gray-600'>TOP RATED...</p>
                    <div className='flex flex-wrap gap-4 w-full justify-center'>
                        {trendingList.map((trending) => (
                            <div className='w-[300px] h-fit py-2 px-1 border border-gray-300' key={trending.id}>
                                <div className='h-[400px] relative' style={{ backgroundImage: `url(${trending.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='absolute bottom-0 w-full opacity-0 hover:opacity-100'>
                                        <button className='bg-pink-500 w-full py-2 text-white'>Add to cart</button>
                                    </div>
                                </div>

                                <p>{trending.name}</p>
                                <div className='flex'>
                                    <p className='mx-1'>{trending.originalPrice}</p>
                                    <s className='mx-1'>{trending.oldPrice}</s>
                                </div>
                                <div className='flex'>
                                    {trending.sizes.map((size) => (
                                        <div className='bg-black text-white text-[10px] w-5 h-5 mx-1 text-center p-[2px]' key={size}>
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* community section */}
                <div className='my-5 text-center'>
                    <p className='my-2 text-[40px] text-gray-600'>Our Community</p>
                    <p className='my-2 text-[15px] text-gray-600'>Tag us @LoremIpsum_com and use #loremIpsum to get featured</p>
                </div>
            </div>
        </div>
    )
}

export default Home