import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import featureImg1 from "../../Assets/Image/home/ingredient.png";
import featureImg2 from "../../Assets/Image/home/kitchen.png";
import featureImg3 from "../../Assets/Image/home/choose.png";
import featureImg4 from "../../Assets/Image/home/delivery-man.png";
import Rating from 'react-rating';

const FoodReview = ({ review }) => {
    console.log(review);
    const { reviewerName, reviewerPhotoURL, reviewerEmail, reviewText, ratings, addedDate, addedTimeEncrypted, foodId, foodName, _id } = review;
    return (
        <div className="relative group hover:bg-red-600 transition hover:z-[1] hover:shadow-2xl">
            <div className="w-full h-full relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 flex flex-col justify-evenly">
                <img src={reviewerPhotoURL} className="w-8 rounded-full" width="512" height="512" alt="burger illustration" />

                <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-bold transition group-hover:text-yellow-600 feature-title">{reviewerName}</h5>
                    <p className="text-sm text-gray-600 feature-description">{reviewText}</p>
                </div>
                <div className="flex justify-between items-center group-hover:text-yellow-600">
                    <span className="text-sm">{addedDate.split(",")}</span>
                    <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <Rating
                            placeholderRating={ratings}
                            readonly={true}
                            emptySymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-grey.png" className="icon" alt="/" />}
                            placeholderSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-red.png" className="icon" alt="/" />}
                            fullSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-yellow.png" className="icon" alt="/" />}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FoodReview;