import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import BlogPage from './pages/BlogPage';
import AuthorPage from './pages/AuthorPage';

const router = createBrowserRouter([
  {
  path:'/',
  element: <BlogListPage />,
  },
  {
    path:'/blog',
    element: <BlogPage />,
    },
    {
      path:"/author",
      element: <AuthorPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
);


