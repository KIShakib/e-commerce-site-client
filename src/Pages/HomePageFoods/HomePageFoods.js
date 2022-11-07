import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePageFood from '../HomePageFood/HomePageFood';
import "./HomePageFoods.css";

const HomePageFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/homepagefoods")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    return (
        <div>
            <div className='mb-14'>
                <p className='text-4xl font-bold foods-text text-center'><span className='text-red-600'>Some</span> Delicious Food</p>
                <p className='text-center foods-header'>Here Is Your Some Delicious Food Items. I Serve Various Kind Of Dishes, Bowl, Platter etc. <br /> You Can Find More On Foods Page. Can Placed Your Desire Order.</p>
            </div>
            <div className='lg:grid grid-cols-3'>
                {
                    foods.map(food => <HomePageFood key={food._id} food={food}></HomePageFood>)
                }
            </div>
            <div className='flex justify-center mt-8'>
                <Link to="/foods" className="btn rounded bg-[#EB0029] border-none text-white hover:animate-pulse">MORE ITEMS</Link>
            </div>
        </div>
    );
};

export default HomePageFoods;