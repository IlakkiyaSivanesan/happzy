import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Hoppzy from "./Components/Header/Hoppzy";
import Tariff from "./Components/Header/Tariff";
import Careers from "./Components/Header/Careers";
import PartnerWithUs from "./Components/Header/PartnerWithUs";
import Location from "./Components/Header/Location";
import Login from "./Components/Header/Login";
import Header from "./Components/Header/Header";

// Import Header component

const AppLayout = () => (
    <div>
        <Header />  {/* Header component */}
        <Outlet />  {/* Placeholder for nested routes */}
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Hoppzy />,
            },
            {
                path: '/tariff',
                element: <Tariff />,
            },
            {
                path: '/careers',
                element: <Careers />,
            },
            {
                path: '/partnerwithus',
                element: <PartnerWithUs />,
            },
            {
                path: '/location',
                element: <Location />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} />
);
