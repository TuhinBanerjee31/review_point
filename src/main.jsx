import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";
import InterviewTips from "./pages/InterviewTips.jsx";
import SiecorpArticlesList from "./pages/SiecorpArticlesList.jsx";
import SiecorpArticles from "./pages/SiecorpArticles.jsx";
import SiecorpArticles2 from "./pages/SiecorpArticles2.jsx";
import SiecorpArticles3 from "./pages/SiecorpArticles3.jsx";
import SiecorpArticles4 from "./pages/SiecorpArticles4.jsx";
import SiecorpArticles5 from "./pages/SiecorpArticles5.jsx";
import SiecorpArticles6 from "./pages/SiecorpArticles6.jsx";
import Policy from "./pages/Policy.jsx";
import Contact from "./pages/Contact.jsx";
import KiewitArticles from "./pages/KiewitArticles.jsx";
import VinciArticles from "./pages/VinciArticles.jsx";
import BechtelArticles from "./pages/BechtelArticles.jsx";
import CscArticles from "./pages/CscArticles.jsx";
import AcsArticles from "./pages/AcsArticles.jsx";
import HochtiefArticles from "./pages/HochtiefArticles.jsx";
import BouyguesArticles from "./pages/BouyguesArticles.jsx";
import LtArticles from "./pages/LtArticles.jsx";
import SkanskaArticles from "./pages/SkanskaArticles.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />{" "}
      {/* Use 'index' for the default route */}
      <Route path="reviews" element={<ReviewPage />} />
      <Route path="success-stories" element={<SuccessStories />} />
      <Route path="interview-tips" element={<InterviewTips />} />
      <Route path="siecorp-articles-list" element={<SiecorpArticlesList />} />
      <Route path="siecorp-articles" element={<SiecorpArticles />} />
      <Route path="siecorp-articles-2" element={<SiecorpArticles2 />} />
      <Route path="siecorp-articles-3" element={<SiecorpArticles3 />} />
      <Route path="siecorp-articles-4" element={<SiecorpArticles4 />} />
      <Route path="siecorp-articles-5" element={<SiecorpArticles5 />} />
      <Route path="siecorp-articles-6" element={<SiecorpArticles6 />} />
      <Route path="privacy-policy" element={<Policy />} />
      <Route path="contact" element={<Contact />} />
      <Route path="kiewit-articles" element={<KiewitArticles />} />
      <Route path="vinci-articles" element={<VinciArticles />} />
      <Route path="bechtel-articles" element={<BechtelArticles />} />
      <Route path="csc-articles" element={<CscArticles />} />
      <Route path="acs-articles" element={<AcsArticles />} />
      <Route path="hochtief-articles" element={<HochtiefArticles />} />
      <Route path="bouygues-articles" element={<BouyguesArticles />} />
      <Route path="lt-articles" element={<LtArticles />} />
      <Route path="skanska-articles" element={<SkanskaArticles />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
