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
import LocomotiveScroll from 'locomotive-scroll';
// import { checkUserAuthentication } from './utils/auth';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

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
    path: '/userpanel',
    element: <Dashboard text={'user'} />,
    errorElement: <NotFound />,
  },
  {
    path: '/adminpanel',
    element: <Dashboard text={'admin'} />,
    errorElement: <NotFound />,
  }
  // Other routes...
]);

// function PrivateRoute({ children }) {
//   const isAuthenticated = checkUserAuthentication();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return <RouterProvider router={router} />;
}

export default App;