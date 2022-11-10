import React, { useState, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch("https://shakibs-kitchen-server.vercel.app/foods")
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setLoader(false);
            })
    }, [])
    // const foods = useLoaderData();
    console.log(foods);

    useDynamicTitle("Foods")

    return (
        <div>
            <div className='my-14'>
                <p className='text-4xl font-bold foods-text text-center'><span className='text-red-600'>All</span> Delicious Food</p>
                <p className='text-center foods-header'>Here Is Your Some Delicious Food Items. I Serve Various Kind Of Dishes, Bowl, Platter etc. <br /> You Can Find More On Foods Page. Can Placed Your Desire Order.</p>
            </div>
            <div>
                <div>
                    {
                        loader &&
                        <div className='w-full h-full flex justify-center items-center'>
                            <Blocks
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                            />
                        </div>
                    }
                </div>
                <div className='lg:grid grid-cols-2 lg:w-2/3 mx-auto gap-5'>
                    {
                        foods.map(food => <Food key={food._id} food={food}></Food>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;