import React from 'react';

const EditReview = ({ reviewText, _id, reviewerEmail, handleReviewEdit }) => {
    const reviewEditForm = e => {
        e.preventDefault()
        const form = e.target;
        const reviewTextEdit = form.reviewTextEdit.value;
        const newRatings = form.newRatings.value;
        handleReviewEdit(_id, reviewerEmail, reviewTextEdit, newRatings)
        form.reset();
    }
    return (
        <form onSubmit={reviewEditForm} className="mt-4">

            <div className="mb-3">
                <label className="mb-2 block font-bold">Edit Review</label>
                <textarea type="text" name='reviewTextEdit' placeholder="Write Your Review..." className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
            </div>

            <div className="mb-3">
                <label className="block font-bold">Your Ratings</label>
                <input
                    type="range"
                    name="newRatings"
                    min="1"
                    max="5"
                    className="block w-full py-1 text-gray-500" />
                <label className=" font-bold flex lg:gap-x-[105px] gap-x-[75px]">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </label>
            </div>

            <div className="mb-3">
                <button type='submit' className="mb-1.5 block w-full text-center font-bold text-white bg-[#9e182e] hover:bg-[#EB0029] px-2 py-1.5 rounded-none">EDIT REVIEW</button>
            </div>
        </form>
    );
};

export default EditReview;