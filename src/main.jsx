import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import ReviewPage from './pages/ReviewPage.jsx';
import SuccessStories from './pages/SuccessStories.jsx';
import InterviewTips from './pages/InterviewTips.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<App />} /> {/* Use 'index' for the default route */}
      <Route path='reviews' element={<ReviewPage />} />
      <Route path='success-stories' element={<SuccessStories />} />
      <Route path='interview-tips' element={<InterviewTips />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
