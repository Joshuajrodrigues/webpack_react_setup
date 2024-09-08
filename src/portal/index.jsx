import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ErrorPage from '../common/components/ErrorPage';
import Posts from './pages/posts';
import PostsList from './components/postsList';




const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <PostsList />
            },
            {
                path: "/post/:id",
                element: <Posts />
            }
        ]
    },


])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
