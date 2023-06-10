import { Header } from '../components/Header';
import background from '../assets/background.jpeg';
import head from '../assets/head.jpeg';
import director from '../assets/director.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ImageViewer from 'react-simple-image-viewer';

import { Panel } from 'rsuite';
import { Link } from 'react-router-dom';
import { BankDetails } from '../components/BankDetails';
import { useState, useCallback } from 'react';

const Landing = () => {
  const [isViewer1Open, setIsViewer1Open] = useState(false);
  const [isViewer2Open, setIsViewer2Open] = useState(false);
  const [isViewer3Open, setIsViewer3Open] = useState(false);
  const [isViewer4Open, setIsViewer4Open] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);
  const openImageViewer1 = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewer1Open(true);
  }, []);
  const openImageViewer2 = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewer2Open(true);
  }, []);
  const openImageViewer3 = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewer3Open(true);
  }, []);
  const openImageViewer4 = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewer4Open(true);
  }, []);

  const closeImageViewer1 = () => {
    setCurrentImage(0);
    setIsViewer1Open(false);
  };

  const closeImageViewer2 = () => {
    setCurrentImage(0);
    setIsViewer2Open(false);
  };

  const closeImageViewer3 = () => {
    setCurrentImage(0);
    setIsViewer3Open(false);
  };

  const closeImageViewer4 = () => {
    setCurrentImage(0);
    setIsViewer4Open(false);
  };

  const images1 = [
    {
      url: 'https://cdn.xmanga.org/charity/1.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/2.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/3.jpeg',
    },
  ];
  const images2 = [
    {
      url: 'https://cdn.xmanga.org/charity/21.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/22.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/23.jpeg',
    },
  ];
  const images3 = [
    {
      url: 'https://cdn.xmanga.org/charity/41.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/42.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/43.jpeg',
    },
  ];
  const images4 = [
    {
      url: 'https://cdn.xmanga.org/charity/31.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/32.jpeg',
    },
    {
      url: 'https://cdn.xmanga.org/charity/33.jpeg',
    },
  ];

  return (
    <div className='flex flex-col w-full'>
      <Header />
      <img
        src={background}
        alt='background'
        className='absolute mt-40 w-full h-[400px] z-[-1]'
      />
      <div className='flex flex-row justify-between items-center px-4 mt-4'>
        <div className='flex flex-row items-center justify-center shadow-lg  px-4 py-4 mr-8 rounded-md bg-white'>
          <div className='flex flex-col items-start justify-between h-[280px] text-black-100'>
            <h3 className='text-lg'>Голова Правління</h3>
            <h3>Ребець Борис Григорович</h3>
            <span className='text-lg underline'>+380937175717</span>
          </div>
          <img
            src={head}
            alt='head'
            className='w-[300px] h-[300px] rounded-md ml-2'
          />
        </div>
        <div className='flex flex-row items-center justify-center shadow-lg  px-4 py-4 rounded-md bg-white'>
          <div className='flex flex-col items-start justify-between h-[280px] text-black-100 '>
            <h3 className='text-lg'>Виконавчий директор</h3>
            <h3>Черватюк Ярослав Юрійович</h3>
            <span className='text-lg underline'>+380989445993</span>
          </div>
          <img
            src={director}
            alt='director'
            className='w-[300px] h-[300px] rounded-md ml-2'
          />
        </div>
      </div>

      <div className='flex flex-col items-start justify-start w-full mt-20 px-4 flex-wrap w-full'>
        <Panel
          header='Діяльність волонтерів Фонду'
          collapsible
          bordered
          className='w-full'
        >
          <div className='flex flex-col items-start'>
            {isViewer1Open && (
              <ImageViewer
                src={images1.map((el) => el.url)}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer1}
              />
            )}
            <div className='flex flex-row w-full'>
              {images1.map((el, index) => (
                <img
                  src={el.url}
                  className='w-[450px] h-[600px] p-4 cursor-pointer'
                  alt='carousel'
                  onClick={() => openImageViewer1(index)}
                />
              ))}
            </div>
            <Link to='/event/1'>
              <div className='flex cursor-pointer items-center justify-center ml-4'>
                <span className='mr-2'>Переглянути</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </Panel>
        <Panel
          header='Фонд допомагає ВПО'
          collapsible
          bordered
          className='w-full mt-4'
        >
          <div className='flex flex-col items-start'>
            {isViewer2Open && (
              <ImageViewer
                src={images2.map((el) => el.url)}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer2}
              />
            )}
            <div className='flex flex-row w-full flex-wrap'>
              {images2.map((el, index) => (
                <img
                  src={el.url}
                  className='w-[600px] h-[500px] p-4 cursor-pointer'
                  alt='carousel'
                  onClick={() => openImageViewer2(index)}
                />
              ))}
            </div>
            <Link to='/event/2'>
              <div className='flex cursor-pointer items-center justify-center ml-4'>
                <span className='mr-2'>Переглянути</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </Panel>
        <Panel
          header=' Гуманітарна допомога від Фонду медичним закладам'
          collapsible
          bordered
          className='w-full mt-4'
        >
          <div className='flex flex-col items-start'>
            {isViewer3Open && (
              <ImageViewer
                src={images3.map((el) => el.url)}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer3}
              />
            )}
            <div className='flex flex-row w-full flex-wrap'>
              {images2.map((el, index) => (
                <img
                  src={el.url}
                  className='w-[450px] h-[400px] p-4 cursor-pointer'
                  alt='carousel'
                  onClick={() => openImageViewer3(index)}
                />
              ))}
            </div>
            <Link to='/event/3'>
              <div className='flex cursor-pointer items-center justify-center ml-4'>
                <span className='mr-2'>Переглянути</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </Panel>
        <Panel
          header=' Допомога ЗСУ від Фонду'
          collapsible
          bordered
          className='w-full mt-4'
        >
          <div className='flex flex-col items-start'>
            {isViewer4Open && (
              <ImageViewer
                src={images4.map((el) => el.url)}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer4}
              />
            )}
            <div className='flex flex-row w-full flex-wrap'>
              {images4.map((el, index) => (
                <img
                  src={el.url}
                  className='w-[450px] h-[400px] p-4 cursor-pointer'
                  alt='carousel'
                  onClick={() => openImageViewer4(index)}
                />
              ))}
            </div>
            <Link to='/event/4'>
              <div className='flex cursor-pointer items-center justify-center ml-4'>
                <span className='mr-2'>Переглянути</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </Panel>
      </div>
      <BankDetails />
    </div>
  );
};

export { Landing };
