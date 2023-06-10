import { Header } from '../../components/Header';
import { useCallback, useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const Event4 = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      url: 'https://cdn.xmanga.org/charity/31.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/32.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/33.jpeg',
    },
    { url: 'https://cdn.xmanga.org/charity/34.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/35.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/36.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/37.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/38.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/39.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/310.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/311.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/312.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/313.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/314.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/315.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/316.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/317.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/318.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/319.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/320.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/321.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/322.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/321.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/324.jpeg' },
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
        </div>
        <div className='flex flex-row w-full flex-wrap'>
          <video
            src='https://cdn.xmanga.org/charity/326.mp4'
            controls
            className='w-[500px] h-[400px] mx-4 rounded-md my-8'
          />
          <video
            src='https://cdn.xmanga.org/charity/327.mp4'
            controls
            className='w-[500px] h-[400px] mx-4 rounded-md my-8'
          />
          <video
            src='https://cdn.xmanga.org/charity/328.mp4'
            controls
            className='w-[500px] h-[400px] mx-4 rounded-md my-8'
          />
          <video
            src='https://cdn.xmanga.org/charity/329.mp4'
            controls
            className='w-[500px] h-[400px] mx-4 rounded-md my-8'
          />
          <video
            src='https://cdn.xmanga.org/charity/330.mp4'
            controls
            className='w-[500px] h-[400px] mx-4 rounded-md my-8'
          />
        </div>
      </div>
    </div>
  );
};

export { Event4 };
