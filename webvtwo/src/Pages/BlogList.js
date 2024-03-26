import React from 'react';
import BlogCard from '../components/BlogCard';
import './style/BlogList.css'
import { Header } from '../components/ScrollupandHeader';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../components/assets/img/portfolio/blogcode.png'


function HeroCarousel() {
  const images = [
   'https://static.vecteezy.com/system/resources/previews/013/466/054/original/abstract-square-box-concept-digital-technology-futuristic-modern-cryptocurrency-blockchain-connection-network-on-purple-background-vector.jpg',
   'https://img.freepik.com/premium-photo/programming-languages-tech-purple-background-with-code-elements-lines-light_272306-166.jpg',
   'https://www.springboard.com/blog/wp-content/uploads/2019/08/sb-blog-future-of-ai-700x286.png',

   
  ]
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000} transitionTime={1000} className='carouselImage'>
      <div >
        <img src={images[0]} alt="Carousel 1" />
      </div>
      <div>
        <img src={images[1]} alt="Carousel 2" />
      </div>
      <div>
        <img src={images[2]} alt="Carousel 3" />
      </div>
    </Carousel>
  );
}

function BlogList({ blogPosts }) {
  return (
    <div className='blog'>
      <Header />
      <div style={{background:'gray', height:'50vh'}}>
      <HeroCarousel />
      </div>
      <div className="blog-list">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default BlogList;