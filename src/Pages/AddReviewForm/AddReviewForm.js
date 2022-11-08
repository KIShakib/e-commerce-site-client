import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AddReviewForm = () => {
    const [food, setFood] = useState({});
    const { _id } = useParams();
    const { category, foodName, origin, ingredient, person, photoURL, price, description } = food;

    useEffect(() => {
        fetch(`http://localhost:5000/food/${_id}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [_id]);


    const handleReviewSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const reviewerEmail = form.email.value;
        const reviewText = form.reviewText.value;
        const ratings = form.ratings.value;
        const foodId = _id;
        const review = {
            reviewerEmail,
            reviewText,
            ratings,
            foodName,
            foodId,
        }
        
    }


    return (
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
            <div className="lg:grid grid-cols-2 shadow-md">
                <div className="flex flex-wrap content-center justify-center rounded-l-md bg-yellow-50 w-[24rem] h-[32rem]">
                    <div className="w-72">
                        <p className='text-2xl font-bold foods-text text-center'>Write Your Review For  <span className='text-red-600'>{foodName}</span></p>



                        <form onSubmit={handleReviewSubmit} className="mt-4">

                            <div className="mb-3">
                                <label className="mb-2 block font-bold">Your Email</label>
                                <input type="email" name='email' placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                            </div>

                            <div className="mb-3">
                                <label className="mb-2 block font-bold">Your Review</label>
                                <textarea type="text" name='reviewText' placeholder="Write Your Review..." className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                            </div>

                            <div className="mb-3">
                                <label className="block font-bold">Your Ratings</label>
                                <input
                                    type="range"
                                    name="ratings"
                                    min="1"
                                    max="5"
                                    className="block w-full py-1 text-gray-500" />
                                <label className=" font-bold flex gap-x-14 ml-2">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                </label>
                            </div>

                            <div className="mb-3">
                                <button type='submit' className="mb-1.5 block w-full text-center font-bold text-white bg-[#9e182e] hover:bg-[#EB0029] px-2 py-1.5 rounded-none">SUBMIT REVIEW</button>
                            </div>
                        </form>




                    </div>
                </div>
                <div className="flex flex-wrap content-center justify-center rounded-r-md w-[24rem] h-[32rem]">
                    <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src={photoURL} alt='' />
                </div>
            </div>
            <div className="mt-3 w-full">
                <p className="text-center font-bold text-gray-800">Your Feedback Will Help Me To Improve My Service.<br />Feel Free To Give Your Review.</p>
            </div>
        </div>
    );
};

export default AddReviewForm;