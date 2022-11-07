import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePageFood.css";

const HomePageFood = ({ food }) => {
    const { category, foodName, origin, ingredient, person, photoURL, price, _id } = food;
    return (
        <div className="relative group w-96 h-96 overflow-hidden bg-black m-auto">
            <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={photoURL} alt="food" />
            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full flex place-content-center">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10 card-heading-txt">
                        {foodName}
                    </p>
                </div>
                <div className="absolute w-full flex place-content-center mt-20">
                    <p className="font-sans text-center w-4/5 text-white mt-5">
                        {
                            ingredient.map(ingrdt => <span className='text-white font-bold mx-1' key={ingrdt}>{ingrdt}.</span>)
                        }
                    </p>
                </div>
                <Link to={`/details/${_id}`} className="btn rounded bg-[#8d1529] border-none text-white hover:bg-[#EB0029] absolute left-1/4 bottom-4 font-bold h-10 w-48">SEE DETAILS</Link>
            </div>
        </div>
    );
};

export default HomePageFood;