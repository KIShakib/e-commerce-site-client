import React, { useContext } from 'react';
import { FaGoogle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const User = () => {
    const { user, logOut, theme } = useContext(AuthContext);

    useDynamicTitle("User");


    return (
        <div>
            {
                user
                    ?
                    <div className={` ${theme ? "bg-gray-900" : "bg-yellow-100"} font-sans h-screen w-full flex flex-row justify-center items-center`}>
                        <div className={`card w-96 mx-auto ${theme ? "bg-slate-700 text-slate-300" : "bg-white"} rounded-none`}>
                            <img className="w-32 h-32 mx-auto rounded-full border-8 border-white" src={user.photoURL} alt="" />
                            <div className="text-center mt-2 text-3xl font-medium">{user?.displayName}</div>
                            {
                                user.email &&
                                <div className="text-center mt-2 font-light text-sm flex items-center justify-center">
                                    <FaGoogle></FaGoogle>{user?.email}
                                </div>
                            }
                            <small className="text-center font-semibold text-base flex items-center justify-center"><FaUser></FaUser> {user?.uid.toUpperCase()}</small>
                            <hr className="mt-8" />
                            <div className="flex p-4">
                                <div className="w-1/2 text-center">
                                    <span className="font-bold">1.8 k</span> Followers
                                </div>
                                <div className="w-0 border border-gray-300">

                                </div>
                                <div className="w-1/2 text-center">
                                    <span className="font-bold">2.0 k</span> Following
                                </div>
                            </div>
                            <button className='btn btn-sm btn-outline btn-primary rounded-none w-[60%] mx-auto mb-4'>Update Profile</button>
                            <button onClick={logOut} className='btn btn-sm btn-outline btn-accent rounded-none w-[30%] mx-auto mb-4'>Log Out</button>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 className='my-56 text-center text-xl '>Your Are Not Logged In. Please
                            <Link to="/login" className='underline-offset-4 underline'> Login</Link>
                        </h2>
                    </div>
            }
        </div>
    );
};

export default User;