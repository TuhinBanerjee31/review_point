import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import ReviewPage from './pages/ReviewPage.jsx';
import SuccessStories from './pages/SuccessStories.jsx';
import InterviewTips from './pages/InterviewTips.jsx';
import SiecorpArticlesList from './pages/SiecorpArticlesList.jsx'
import SiecorpArticles from './pages/SiecorpArticles.jsx'
import SiecorpArticles2 from './pages/SiecorpArticles2.jsx'
import SiecorpArticles3 from './pages/SiecorpArticles3.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<App />} /> {/* Use 'index' for the default route */}
      <Route path='reviews' element={<ReviewPage />} />
      <Route path='success-stories' element={<SuccessStories />} />
      <Route path='interview-tips' element={<InterviewTips />} />
      <Route path='siecorp-articles-list' element={<SiecorpArticlesList />} />
      <Route path='siecorp-articles' element={<SiecorpArticles />} />
      <Route path='siecorp-articles-2' element={<SiecorpArticles2 />} />
      <Route path='siecorp-articles-3' element={<SiecorpArticles3 />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
