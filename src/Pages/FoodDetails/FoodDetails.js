import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaThList } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import FoodReviews from '../FoodReviews/FoodReviews';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const FoodDetails = () => {
    const food = useLoaderData();
    const { category, foodName, origin, ingredient, person, photoURL, price, _id, description } = food;

    useDynamicTitle("Food Details")
    return (
        <div>
            <div>
                <div className="min-h-screen from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br pb-5">
                    <div className='mb-14 pt-5'>
                        <p className='text-4xl font-bold foods-text text-center'>Detail About <span className='text-red-600 font-extrabold'>{foodName}</span></p>
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
            <div>
                <FoodReviews food={food}></FoodReviews>
            </div>
        </div>
    );
};

export default FoodDetails;