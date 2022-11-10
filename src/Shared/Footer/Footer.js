import React from 'react';
import { FaGoogle, FaFacebook, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="relative bg-blueGray-200 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-red-600 foods-text">SHAKIB'S KITCHEN</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find me on any of these platforms, I respond within 1-2 hours.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex text-2xl gap-x-4 text-red-500">
                            <FaGoogle></FaGoogle>
                            <FaFacebook></FaFacebook>
                            <FaPhone></FaPhone>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4 ">
                        <div className="w-full lg:w-4/12 px-4">
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >MIT License</Link>
                                </li>
                                <li>
                                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Terms &amp; Conditions</Link>
                                </li>
                                <li>
                                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Contact With Me</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                        Copyright © <span id="get-current-year">2022</span> <span className='font-bold'>Shakib's Kitchen</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;