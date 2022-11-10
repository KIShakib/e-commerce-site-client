import React from 'react';
import chef from "../../Assets/Image/home/happy-male-chef-cook-restaurant-kitchen.jpg"

const ChefDetail = () => {
    return (
        <div className="lg:grid grid-cols-2 bg-yellow-100 shadow-xl">
            <figure className='w-full'><img className='w-full' src={chef} alt="Chef" /></figure>
            <div className="">
                <div className='my-8'>
                    <p className='text-4xl font-bold foods-text text-center h-10'>KHUBAIBUL ISLAM<span className='text-red-600'> SHAKIB</span></p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='flex flex-col text-center'>
                            <span className='font-sm font-bold'>CATERING</span>
                            <div className="radial-progress bg-primary text-primary-content font-bold border-4 border-primary" style={{ "--value": 90 }}>90%</div>
                        </div>
                        <div className='flex flex-col text-center'>
                            <span className='font-sm font-bold'>FOOD</span>
                            <div className="radial-progress bg-primary text-primary-content font-bold border-4 border-primary" style={{ "--value": 95 }}>95%</div>
                        </div>
                        <div className='flex flex-col text-center'>
                            <span className='font-sm font-bold'>COOKING</span>
                            <div className="radial-progress bg-primary text-primary-content font-bold border-4 border-primary" style={{ "--value": 95 }}>95%</div>
                        </div>
                        <div className='flex flex-col text-center'>
                            <span className='font-sm font-bold'>DELIVERY</span>
                            <div className="radial-progress bg-primary text-primary-content font-bold border-4 border-primary" style={{ "--value": 85 }}>85%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetail;