import React, { useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import MyReview from '../MyReview/MyReview';

const MyReviews = () => {
    const [dependency, setDependency] = useState("")
    const [myReviews, setMyReviews] = useState([]);
    const { user, logOut } = useContext(AuthContext);
    const [loader, setLoader] = useState(true);
    const { displayName, email, photoURL } = user;

    useDynamicTitle("My Reviews")

    useEffect(() => {
        fetch(`https://shakibs-kitchen-server.vercel.app/myallreview/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("_vld_tkn")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error(`UnAuthorized Access ${res.status}`)
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data);
                setLoader(false);
            })
    }, [user?.email, dependency]);


    const handleReviewDelete = (id, reviewerEmail) => {
        const proceed = window.confirm("Are You Sure To Delete This Service?")
        if (proceed) {
            fetch(`https://shakibs-kitchen-server.vercel.app/deletereview/${id}/${reviewerEmail}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingReview = myReviews.filter(myReview => myReview._id !== id);
                        setMyReviews(remainingReview);
                        toast.success("Review Deleted Successfully...");
                    }
                })
        }

    }


    const handleReviewEdit = (_id, reviewerEmail, reviewTextEdit, newRatings) => {
        setDependency(reviewTextEdit)
        const updatedReview = {
            reviewTextEdit,
            newRatings
        }
        fetch(`https://shakibs-kitchen-server.vercel.app/updatereview/${_id}/${reviewerEmail}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ updatedReview })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const editedReview = myReviews.find(myReview => myReview._id === _id);

                    editedReview.reviewText = reviewTextEdit;
                    editedReview.ratings = newRatings;

                }
            })
    }


    return (
        <div className="antialiased font-sans bg-gray-200">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">




                    <div className="flex justify-center bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl ">
                        <div className="py-6">
                            <img className="w-12 h-12 mx-auto rounded-full object-cover shadow" src={photoURL} alt="avatar" />
                            <div className="flex items-center justify-center mt-2">
                                <h2 className="text-lg text-center font-semibold text-gray-900 -mt-1">{displayName}</h2>
                            </div>
                            <div className="mt-4 flex justify-center items-center">
                                <div className="flex justify-center items-center text-gray-700">
                                    <svg fill="none" viewBox="0 0 24 24" className="w-8 h-8" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                    <span className='text-3xl font-bold'>{myReviews.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        {
                            myReviews.length === 0 &&
                            <div>
                                <p className='text-4xl font-bold foods-text text-center mt-10'>YOU HAVEN'T GIVE  <span className='text-red-600'> ANY REVIEW YET</span></p>
                            </div>
                        }
                    </div>

                    <div>
                        {
                            myReviews.length > 0 &&
                            <div>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="flex flex-row mb-1 sm:mb-0">
                                        <div className="relative">
                                            <select
                                                className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                                <option>{myReviews.length}</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <select
                                                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                                <option>All</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block relative">
                                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                                <path
                                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input placeholder="Search"
                                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                                    </div>
                                </div>
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
                                {
                                    !loader &&
                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                            <table className="min-w-full leading-normal">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            FOOD IMAGE
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            FOOD NAME
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            REVIEW TIME
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            RATINGS
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            MY REVIEW
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            ACTIONS
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        myReviews.map(myReview => <MyReview
                                                            key={myReview._id}
                                                            myReview={myReview}
                                                            handleReviewDelete={handleReviewDelete}
                                                            handleReviewEdit={handleReviewEdit}
                                                        >

                                                        </MyReview>)
                                                    }
                                                </tbody>
                                            </table>
                                            <div
                                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                                <span className="text-gray-900 font-bold">
                                                    Showing {myReviews.length} Reviews
                                                </span>
                                                <div className="inline-flex mt-2 xs:mt-0">
                                                    <button
                                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                                        Prev
                                                    </button>
                                                    <button
                                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyReviews;