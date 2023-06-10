import { Header } from '../../components/Header';
import { useCallback, useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const Event1 = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      url: 'https://cdn.xmanga.org/charity/1.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/2.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/3.jpeg',
    },
    { url: 'https://cdn.xmanga.org/charity/4.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/5.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/6.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/7.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/8.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/9.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/10.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/11.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/12.jpeg' },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className='flex w-full flex-col w-full'>
      <Header />
      <div className='flex flex-col items-center justify-center mt-4 w-full'>
        {isViewerOpen && (
          <ImageViewer
            src={images.map((el) => el.url)}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
        <div className='flex flex-col w-full flex-wrap items-center justify-center'>
          {images.map((el, index) => (
            <img
              src={el.url}
              alt='carousel'
              className='mt-4 shadow-md cursor-pointer'
              onClick={() => openImageViewer(index)}
            />
          ))}
        </div>
        <div className='flex flex-row'>
          <video
            src='https://cdn.xmanga.org/charity/13.mp4'
            controls
            className='w-[600px] h-[500px] mx-4 rounded-md my-8'
          />
          <video
            src='https://cdn.xmanga.org/charity/14.mp4'
            controls
            className='w-[600px] h-[500px] mx-4 rounded-md my-8'
          />
        </div>
      </div>
    </div>
  );
};

export { Event1 };
