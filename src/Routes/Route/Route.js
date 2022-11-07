import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../../Layouts/AdminLayout";
import Main from "../../Layouts/Main";
import AddProducts from "../../Pages/Admin/AddProducts/AddProducts";
import Home from "../../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "/admin/addproduct",
                element: <AddProducts></AddProducts>
            }
        ]
    }
])