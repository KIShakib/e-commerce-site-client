import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../../Layouts/AdminLayout";
import Main from "../../Layouts/Main";
import AddReviewForm from "../../Pages/AddReviewForm/AddReviewForm";
import AddProducts from "../../Pages/Admin/AddProducts/AddProducts";
import AdminProgress from "../../Pages/AdminsProgress/AdminProgress";
import Login from "../../Pages/Authentication/Login/Login";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import Blogs from "../../Pages/Blogs/Blogs";
import FoodDetails from "../../Pages/FoodDetails/FoodDetails";
import Foods from "../../Pages/Foods/Foods";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import User from "../../Pages/User/User";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/foods",
                element: <Foods></Foods>
            },
            {
                path: "/fooddetails/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: "/addreview/:_id/:foodName",
                element: <PrivateRoute><AddReviewForm></AddReviewForm></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/user",
                element: <User></User>
            },
            {
                path: "/myreviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "/admin",
                element: <AdminProgress></AdminProgress>
            },
            {
                path: "/admin/addproduct",
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            }
        ]
    }
])