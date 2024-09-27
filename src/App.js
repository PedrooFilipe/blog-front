import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login/Login'
import PrivateRoute from './Config/PrivateRoute';
import ListCategory from './pages/Category/ListCategory';
import MainLayout from './layout/MainLayout';
import ListPost from './pages/Post/ListPost';
import EditPost from './pages/Post/EditPost';
import CreatePost from './pages/Post/CreatePost';


const App = () => {
  return (
    <AuthProvider >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<MainLayout />}>
            <Route path="/home" element={
              <PrivateRoute >
                <Home />
              </PrivateRoute>
            }
            />



            <Route path="/categories"
              element={
                <PrivateRoute>
                  <ListCategory />
                </PrivateRoute>
              }
            />

            {/* <Route path="/categories/edit/:id"
              element={
                <PrivateRoute>
                  <EditCate />
                </PrivateRoute>
              }
            /> */}

            <Route path="/posts"
              element={
                <PrivateRoute>
                  <ListPost />
                </PrivateRoute>
              }
            />

            <Route path="/posts/edit/:id"
              element={
                <PrivateRoute>
                  <EditPost />
                </PrivateRoute>
              }
            />

            <Route path="/posts/create"
              element={
                <PrivateRoute>
                  <CreatePost />
                </PrivateRoute>
              }
            />

          </Route>
        </Routes>
      </Router>
    </AuthProvider>

  );
};

export default App;