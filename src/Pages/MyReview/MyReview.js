import React from 'react';

const MyReview = ({ myReview }) => {
    console.log(myReview);
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
            <td className="py-5 border-b border-gray-200 bg-white text-sm">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-sm rounded-none">TAKE ACTION</label>
                    <ul tabIndex={0} className="dropdown-content menu rounded-box w-28 gap-y-1">
                        <li><button className='btn btn-sm btn-accent rounded-none text-xs'>EDIT REVIEW</button></li>
                        <li><button className='btn btn-sm btn-accent rounded-none text-xs'>DELETE REVIEW</button></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default MyReview;