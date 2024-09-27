import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import card2 from "../assets/siecorp_logo.png";
import ArticleCard from '../components/ArticleCard';

const SiecorpArticlesList = () => {
  return (
    <div className='bg-[#E9F1FA] font-Quicksand'>
      <Nav />
      <div className='min-h-screen'>
      <h2 className="font-semibold text-5xl text-center pt-6">
      <img src={card2} alt="..." className="h-12 mx-auto" />Siecorp Articles List
      </h2>

      <div className='flex flex-wrap gap-6 justify-center py-14'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default SiecorpArticlesList
