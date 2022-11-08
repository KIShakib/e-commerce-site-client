import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./FeatureSection.css";
import featureImg1 from "../../Assets/Image/home/ingredient.png";
import featureImg2 from "../../Assets/Image/home/kitchen.png";
import featureImg3 from "../../Assets/Image/home/choose.png";
import featureImg4 from "../../Assets/Image/home/delivery-man.png";

const FeatureSection = () => {
    return (
        <div className="py-16 bg-yellow-50 overflow-hidden">
            <div className="container m-auto px-6 space-y-8  md:px-12">
                <div className='my-14'>
                    <p className='text-4xl font-bold foods-text text-center'><span className='text-red-600'>My</span> Catering Features</p>
                    <p className='text-center foods-header mt-1'>I always try to make delicious food with fresh ingredients. <br /> For which my customers like my food more...</p>
                </div>
                <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="relative group hover:bg-red-600 transition hover:z-[1] hover:shadow-2xl">
                        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                            <img src={featureImg1} className="w-10" width="512" height="512" alt="burger illustration" />

                            <div className="space-y-2">
                                <h5 className="text-xl text-gray-800 font-bold transition group-hover:text-yellow-600 feature-title">Fresh Ingredients</h5>
                                <p className="text-sm text-gray-600 feature-description">I go to the market every morning and buy all ingredient by myself. Fot that, I can ensure fresh food.</p>
                            </div>
                            <Link to="" className="flex justify-between items-center group-hover:text-yellow-600">
                                <span className="text-sm">Read more</span>
                                <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group hover:bg-red-600 transition hover:z-[1] hover:shadow-2xl">
                        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                            <img src={featureImg2} className="w-10" width="512" height="512" alt="burger illustration" />

                            <div className="space-y-2">
                                <h5 className="text-xl text-gray-800 font-bold transition group-hover:text-yellow-600 feature-title">Home Made</h5>
                                <p className="text-sm text-gray-600 feature-description">Everything I serve is homemade. I made all of food in my home kitchen. So you can test a flavour like your own home.</p>
                            </div>
                            <Link to="" className="flex justify-between items-center group-hover:text-yellow-600">
                                <span className="text-sm">Read more</span>
                                <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group hover:bg-red-600 transition hover:z-[1] hover:shadow-2xl">
                        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                            <img src={featureImg3} className="w-10" width="512" height="512" alt="burger illustration" />

                            <div className="space-y-2">
                                <h5 className="text-xl text-gray-800 font-bold transition group-hover:text-yellow-600 feature-title ">Customizable Option</h5>
                                <p className="text-sm text-gray-600 feature-description">Customer can customize their order by adding or decreasing some ingredients, like chilli, masala, or others.</p>
                            </div>
                            <Link to="" className="flex justify-between items-center group-hover:text-yellow-600">
                                <span className="text-sm">Read more</span>
                                <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group hover:bg-red-600 transition hover:z[1] hover:shadow-2xl lg:hidden xl:block">
                        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                            <img src={featureImg4} className="w-10" width="512" height="512" alt="burger illustration" />

                            <div className="space-y-2">
                                <h5 className="text-xl text-gray-800 font-bold transition group-hover:text-yellow-600 feature-title">30 Minutes Home Delivery</h5>
                                <p className="text-sm text-gray-600 feature-description">My delivery man will deliver the food to your door within 30 minutes only. Don't have to worry about the delivery time</p>
                            </div>
                            <Link to="" className="flex justify-between items-center group-hover:text-yellow-600">
                                <span className="text-sm">Read more</span>
                                <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;