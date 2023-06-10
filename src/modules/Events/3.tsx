import { Header } from '../../components/Header';
import { useCallback, useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const Event3 = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      url: 'https://cdn.xmanga.org/charity/41.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/42.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/43.jpeg',
    },
    { url: 'https://cdn.xmanga.org/charity/44.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/45.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/46.jpeg' },
    { url: 'https://cdn.xmanga.org/charity/47.jpeg' },
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
      </div>
    </div>
  );
};

export { Event3 };
