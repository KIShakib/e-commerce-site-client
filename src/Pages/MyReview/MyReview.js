import React from 'react';
import { FaTrash, FaEdit } from "react-icons/fa";
import EditReview from '../EditReview/EditReview';

const MyReview = ({ myReview, handleReviewEdit, handleReviewDelete }) => {


    const { foodPhotoURL, foodName, addedDate, ratings, reviewText, _id, reviewerEmail, reviewerName, foodId } = myReview;
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="">
                        <img className="w-24 rounded-lg"
                            src={foodPhotoURL}
                            alt="" />
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{foodName}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {addedDate.split(',')}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">{ratings}</span>
                </span>
            </td>
            <td className="py-5 border-b border-gray-200 bg-white text-sm">
                <textarea className='border border-gray-800 w-2/3 p-2' readOnly name="reviewText" value={reviewText} id="" cols="40" rows="2"></textarea>
            </td>
            <td className="py-5 pb-20 h-full border-b border-gray-200 bg-white text-sm flex items-center gap-x-1">
                <button
                    className='btn btn-sm btn-accent rounded-none'
                >

                    <label htmlFor="my-modal">
                        <FaEdit className='text-yellow-400 text-xl flex items-center justify-center'></FaEdit>
                    </label>
                </button>



                {/* Review Edit Modal Start */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box rounded-none">
                        <EditReview
                            reviewText={reviewText}
                            handleReviewEdit={handleReviewEdit}
                            _id={_id}
                            reviewerEmail={reviewerEmail}
                        >

                        </EditReview>
                        <div className="modal-action">
                            <button className='font-extrabold text-2xl text-yellow-500 bg-slate-300 w-10 h-10 rounded-full'>
                                <label htmlFor="my-modal">
                                    X
                                </label>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Review Edit Modal End */}





                <button
                    onClick={() => handleReviewDelete(_id, reviewerEmail)}
                    className='btn btn-sm btn-accent rounded-none'>

                    <FaTrash className='text-yellow-400 text-xl flex items-center justify-center'></FaTrash>

                </button>
            </td>
        </tr>
    );
};

export default MyReview;