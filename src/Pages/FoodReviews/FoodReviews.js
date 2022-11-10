import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import FoodReview from '../FoodReview/FoodReview';

const FoodReviews = ({ food }) => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext)
    const { category, foodName, origin, ingredient, person, photoURL, price, _id, description } = food;

    useEffect(() => {
        fetch(`https://shakibs-kitchen-server.vercel.app/reviewbyid/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, []);



    return (
        <div className="pb-16 bg-yellow-50 overflow-hidden">
            <div className="container m-auto px-6 space-y-8  md:px-12">
                <div className='my-14'>
                    <p className='text-4xl font-bold foods-text text-center'>Customers Review About  <span className='text-red-600'>{foodName}</span></p>
                    <p className='text-center foods-header mt-1'>Here is the customers review about {foodName}. <br /> They are sharing how they feel about this food. <br /> I try to improve my service after taking their feedback.</p>
                </div>

                <div>
                    {
                        reviews.length === 0
                            ?
                            <div className="flex flex-col items-center p-10">
                                <h5 className="text-xl text-gray-800 font-bold transition group-hover:text-yellow-600 feature-title">No Review Yet</h5>
                                <p className="text-sm text-gray-600 feature-description">Give The First Review</p>
                            </div>
                            :
                            <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                                {
                                    reviews.map(review => <FoodReview key={review._id} review={review}></FoodReview>)
                                }
                            </div>
                    }
                </div>

                <div className='flex justify-center mt-8'>
                    <Link to={`/addreview/${_id}/${foodName}`} className="btn rounded bg-[#EB0029] border-none text-white hover:animate-pulse">
                        {
                            user ? "ADD YOUR REVIEW"
                                : "LOGIN TO ADD YOUR REVIEW"
                        }
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodReviews;