import React from 'react'
import CustomerLandingPage from './pages/CustomerLandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArtisanLandingPage from './pages/ArtisanLandingPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLandingPage />
  },
  { 
    path: "/artisan",
    element: <ArtisanLandingPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
  ])
function App() {
  return ( <RouterProvider router={router} /> );
}

export default App