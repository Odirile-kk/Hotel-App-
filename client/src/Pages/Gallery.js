import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import Navbar from "../components/Navbar";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'https://images.pexels.com/photos/65779/pexels-photo-65779.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2842886/pexels-photo-2842886.jpeg?auto=compress&cs=tinysrgb&w=400',
   ' https://images.pexels.com/photos/346776/pexels-photo-346776.jpeg?auto=compress&cs=tinysrgb&w=400',
   'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
   'https://images.pexels.com/photos/17910657/pexels-photo-17910657/free-photo-of-decoration-with-flower-arrangement-on-table-in-hotel-hall.jpeg?auto=compress&cs=tinysrgb&w=400',
   'https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=400',
   'https://images.pexels.com/photos/5269897/pexels-photo-5269897.jpeg?auto=compress&cs=tinysrgb&w=400',
   'https://images.pexels.com/photos/5076439/pexels-photo-5076439.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
    {!isViewerOpen && (
      <div className="navbar-container">
        <Navbar />
      </div>
    )}

    <div style={{ margin: '5%', marginTop: isViewerOpen ? '0' : '8%' }}>
      <div style={{ margin: '5%' }}>
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width={250}
            height={250}
            key={index}
            style={{ margin: '2px' }}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  </>
);
};

export default Gallery;
