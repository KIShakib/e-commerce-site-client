import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/Image/Logo/Shakib's_Kitchen.png";
import userPhoto from "../../Assets/Image/Authentication_Image/user.png";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-white h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        <li><Link to="/" className='hover:text-red-700 font-bold'>Home</Link></li>
                        <li><Link to="/foods" className='hover:text-red-700 font-bold'>Foods</Link></li>
                        <li><Link to="/blogs" className='hover:text-red-700 font-bold'>Blogs</Link></li>
                        <li>
                            {
                                user && <Link to="/myreviews" className='hover:text-red-700 font-bold'>My Reviews</Link>
                            }
                        </li>
                        <li>
                            {
                                user && <Link to="/admin" className='hover:text-red-700 font-bold'>Admin Dashboard</Link>
                            }
                        </li>
                        <li>
                            <div className='lg:hidden'>
                                {
                                    user?.uid &&
                                    <Link className='bg-[#EB0029] rounded-full p-1' to="/user">
                                        {
                                            user.photoURL ? <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                                                : <img src={userPhoto} alt="/user" />
                                        }
                                    </Link>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to="/">
                    <img className='w-28 rounded-full' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg">
                    <li><Link to="/" className='hover:text-red-700 font-bold'>Home</Link></li>
                    <li><Link to="/foods" className='hover:text-red-700 font-bold'>Foods</Link></li>
                    <li><Link to="/blogs" className='hover:text-red-700 font-bold'>Blogs</Link></li>
                    <li>
                        {
                            user && <Link to="/myreviews" className='hover:text-red-700 font-bold'>My Reviews</Link>
                        }
                    </li>
                    <li>
                        {
                            user && <Link to="/admin" className='hover:text-red-700 font-bold'>Admin Dashboard</Link>
                        }
                    </li>
                </ul>
            </div>
            <div>

            </div>
            <div className="navbar-end gap-x-4">
                <div>
                    {
                        user?.uid ?
                            <button
                                onClick={() => {
                                    logOut();
                                    toast.success("LogOut Successfully")
                                }}
                                className="btn rounded bg-[#EB0029] border-none text-white hover:animate-pulse">
                                LOGOUT
                            </button>
                            : <Link to="/login" className="btn rounded bg-[#EB0029] border-none text-white hover:animate-pulse">LOGIN NOW</Link>
                    }
                </div>
                <div className='hidden lg:flex'>
                    {
                        user?.uid &&
                        <Link to="/user" className='bg-[#EB0029] rounded-full p-1'>
                            {
                                user.photoURL ? <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                                    : <img src={userPhoto} alt="/user" />
                            }
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;