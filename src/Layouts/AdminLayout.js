import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../Pages/Admin/Dashboard/Dashboard';

const AdminLayout = () => {
    return (
        <div>
            <div className="lg:flex">
                <DashBoard></DashBoard>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;