import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Blog() {
  const { name } = useParams();
  console.log(name);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`https://mrbasketo-server.vercel.app/blog/${name}`);
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [name]);

  return (
    <div style={{ background: 'black', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {blogData ? (
        <div>
          <div style={{ backgroundImage: `url(${blogData.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh' }}>
            {/* Hero section with background image */}
          </div>
          <div style={{ padding: '20px', color: 'white' }}>
            <h1>{blogData.name}</h1>
            <p>{blogData.content}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Blog;
