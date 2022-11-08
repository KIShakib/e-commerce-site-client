import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaThList } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const FoodDetails = () => {
    const food = useLoaderData();
    const { category, foodName, origin, ingredient, person, photoURL, price, _id, description } = food;
    return (
        <div>
            <div>
                <div className="min-h-screen from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br pb-10">
                    <div className="w-full md:w-7/12 pt-5 px-4 mx-auto text-center">
                        <div className="text-sm text-white py-1">
                            This components requires
                            <Link className="text-white font-semibold"
                            >Material Tailwind CSS & JS
                            </Link>
                            for the shadows, ripple effects and card classes. <br /><br />
                            A component by<Link className="text-white font-semibold" alt="abc">
                                Creative Tim </Link>.
                        </div>
                    </div>

                    <div
                        className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16"
                    >
                        <div className="card">
                            <div className="card-header mx-4 -mt-6">
                                <PhotoProvider>
                                    <PhotoView src={photoURL}>
                                        <img
                                            className="w-auto rounded-lg"
                                            src={photoURL}
                                            alt="food-card-img"
                                        />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className="card-body">
                                <h4 className="capitalize font-bold text-4xl text-center shadow-2xl card-heading-txt text-pink-600">
                                    {foodName}</h4>
                                <p className="mb-4 feature-description text-justify">
                                    {description}
                                </p>
                            </div>
                            <div className='flex justify-center gap-x-2 mb-2 font-bold'>
                                <p className='from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br px-5 rounded'>BDT {price}</p>
                                <p className='from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br px-5 rounded'>For {person} Person</p>
                            </div>
                            <div className='flex justify-center gap-x-2 mb-2 font-bold'>
                                <p className='from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br px-5 rounded'>{category}</p>
                                <p className='from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br px-5 rounded'>{origin}</p>
                            </div>
                            <div className='grid grid-cols-3 mx-auto my-2'>
                                {
                                    ingredient.map(ingrdt =>
                                        <div key={ingrdt}>
                                            <span className="flex items-center gap-x-2 text-pink-600 font-bold">
                                                <FaThList></FaThList>
                                                {ingrdt}
                                            </span>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;