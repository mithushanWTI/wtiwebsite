import React from 'react'
import Header from '../components/Header'
import heroImage from '/assets/thailand.jpg';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import SubscribeSection from '../components/Subscription';


const Blog = () => {
  return (
    <div>
      <Header />
      {/* Hero Section */}
<section className="relative w-full h-[55vh] md:h-[85vh] flex items-center justify-center bg-cover bg-top text-white overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <div
          className="absolute inset-0 bg-cover bg-top zoom-animation"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative p-6 text-center rounded-lg">
    <h2 className="text-2xl md:text-3xl font-light font-montez">Your Journey Starts Here</h2>
    <h1 className="text-4xl md:text-8xl font-bold mt-2">BLOG</h1>
  </div>
</section>

<section>
  <BlogCard/>
</section>

<SubscribeSection/>
<Footer/>
    </div>
  )
}

export default Blog
