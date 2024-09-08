import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/dashboard';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../common/components/ErrorPage';
import { RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/admin',
        element: <Dashboard />,
        errorElement: <ErrorPage />
    },

])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
