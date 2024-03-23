import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Approach from './pages/Approach';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Stats from './dashboard/content/Stats';
// import NewProject from './dashboard/content/NewProject';
// import Users from './dashboard/content/Users';
// import Profile from './dashboard/content/Profile';
// import Progress from './dashboard/content/Progress';
import LocomotiveScroll from 'locomotive-scroll';
// import { checkUserAuthentication } from './utils/auth';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  // {
  //   path: '/dashboard',
  //   element: (
  //     <PrivateRoute>
  //       <Dashboard />
  //     </PrivateRoute>
  //   ),
  // },
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: '/project',
    element: <Project />,
    errorElement: <NotFound />,
  },
  {
    path: '/approach',
    element: <Approach />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/dashboard/:pageName',
        element: <Stats />
      }
    ],
  }
  // Other routes...
]);

function PrivateRoute({ children }) {
  const isAuthenticated = checkUserAuthentication();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return <RouterProvider router={router} />;
}

export default App;