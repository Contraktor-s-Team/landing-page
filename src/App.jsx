import React from 'react'
import CustomerLandingPage from './pages/CustomerLandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArtisanLandingPage from './pages/ArtisanLandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLandingPage />
  },
  { 
    path: "/artisan",
    element: <ArtisanLandingPage />
  }
  ])
function App() {
  return ( <RouterProvider router={router} /> );
}

export default App