import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import ListPost from './pages/Post/ListPost';
import CreatePost from './pages/Post/CreatePost';
import EditPost from './pages/Post/EditPost';
import Login from './pages/Login/Login';
import ListCategory from './pages/Category/ListCategory';
import { AuthProvider } from './contexts/AuthContext';
import CreateCategory from './pages/Category/CreateCategory';
import PrivateRoute from './Config/PrivateRoute';

const router = createBrowserRouter(


  [
    {
      path: "/login",
      element:
        <AuthProvider>
          <Login />
        </AuthProvider>
    },
    {
      path: '/',
      element:
        <AuthProvider>
          <PrivateRoute>
            <App />
          </PrivateRoute>
        </AuthProvider>,
      children: [
        {
          path: '/posts',
          element:
            <ListPost />
        },
        {
          path: '/posts/create',
          element: <CreatePost />
        },
        {
          path: '/posts/edit/:id',
          element: <EditPost />
        },

        {
          path: '/categories',
          element:
            <ListCategory />
        },
        {
          path: '/categories/create',
          element: <CreateCategory />
        },
        // {
        //   path: '/posts/edit/:id',
        //   element: <EditPost />
        // },


      ],

    },
  ]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();