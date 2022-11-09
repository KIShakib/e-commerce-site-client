import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodReview from '../FoodReview/FoodReview';

const FoodReviews = ({ food }) => {
    const [reviews, setReviews] = useState([]);

    const { category, foodName, origin, ingredient, person, photoURL, price, _id, description } = food;

    useEffect(() => {
        fetch(`http://localhost:5000/reviewbyid${_id}`)
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

                <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        reviews.map(review => <FoodReview key={review._id} review={review}></FoodReview>)
                    }
                </div>

                <div className='flex justify-center mt-8'>
                    <Link to={`/addreview/${_id}/${foodName}`} className="btn rounded bg-[#EB0029] border-none text-white hover:animate-pulse">
                        ADD YOUR REVIEW
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodReviews;