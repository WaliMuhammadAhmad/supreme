import React from 'react';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Approach from './pages/Approach';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Slip from './pages/Slip';
import Stats from './dashboard/content/Stats';
// import NewProject from './dashboard/content/NewProject';
// import Users from './dashboard/content/Users';
// import Profile from './dashboard/content/Profile';
// import Progress from './dashboard/content/Progress';
import LocomotiveScroll from 'locomotive-scroll';
// import { checkUserAuthentication } from './utils/auth';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
    path: '/services',
    element: <Services />,
    errorElement: <NotFound />,
  },
  {
    path: '/work',
    element: <Work />,
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
    path: '/slip',
    element: <Slip />,
    errorElement: <NotFound />,
  },
  {
    path: '/approach',
    element: <Approach />,
    errorElement: <NotFound />,
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <NotFound />,
  },
  {
    path: '/signup',
    element: <SignUp />,
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