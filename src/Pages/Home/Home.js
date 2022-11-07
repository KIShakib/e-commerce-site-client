import React from 'react';
import HomePageFoods from '../HomePageFoods/HomePageFoods';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="relative w-full">
                <div>
                    <marquee className="bg-red-600 h-14 flex items-center">
                        <h1 className='text-3xl font-bold mq-text'>Shakib's Kitchen</h1>
                    </marquee>
                </div>
                <div className="relative bg-yellow-50">
                    <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
                        <div className="flex items-center flex-wrap px-2 md:px-0">
                            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12 hero-text">Your favorite dishes, right at your door...</h1>
                                <form action="" className="w-full mt-12">
                                    <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                                        <select className="hidden p-3 rounded-full bg-transparent md:block md:p-4" name="domain" id="domain">
                                            <option value="design">FastFood</option>
                                            <option value="development">Biriyani</option>
                                            <option value="marketing">Kacchi</option>
                                            <option value="marketing">Murog Polao</option>
                                        </select>
                                        <input placeholder="Khoj : The Search..." className="w-full p-4 rounded-full" type="text" />
                                        <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12">
                                            <span className="hidden text-yellow-900 font-semibold md:block">
                                                Search
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-yellow-900 md:hidden" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-8 text-gray-700 lg:w-10/12 intro-text">Hello! I'm Khubaibul Islam Shakib. I cook different kinds of food at home. Cooked in completely domestic environment. Full hygenic is maintained. All raw materials are collected daily and fresh.</p>
                            </div>
                            <div className="ml-auto  lg:w-6/12">
                                <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="h-2/3" alt="food illustration" loading="lazy" width="4500" height="4500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Foods Div */}
            <div className='my-28'>
                <HomePageFoods></HomePageFoods>
            </div>
        </div>
    );
};

export default Home;