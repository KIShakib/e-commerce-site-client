import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div>
            <div className='my-14'>
                <p className='text-4xl font-bold foods-text text-center'><span className='text-red-600'>All</span> Delicious Food</p>
                <p className='text-center foods-header'>Here Is Your Some Delicious Food Items. I Serve Various Kind Of Dishes, Bowl, Platter etc. <br /> You Can Find More On Foods Page. Can Placed Your Desire Order.</p>
            </div>
            <div className='lg:grid grid-cols-2 lg:w-2/3 mx-auto gap-5'>
                {
                    foods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;