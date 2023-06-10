import { Header } from "../components/Header";
import background from "../assets/background.jpeg";
import head from "../assets/head.jpeg";
import director from "../assets/director.jpeg";
import { Carousel } from "rsuite";
import {
  image1,
  image10,
  image11,
  image12,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  video1,
  video2,
} from "../assets/1";
import { image21, image22, image23, image24 } from "../assets/2";
import {
  image31,
  image310,
  image311,
  image312,
  image314,
  image315,
  image316,
  image317,
  image318,
  image319,
  image32,
  image320,
  image321,
  image322,
  image323,
  image324,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  video31,
  video32,
  video33,
  video34,
  video35,
} from "../assets/3";

const Landing = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <img
        src={background}
        alt="background"
        className="absolute mt-40 w-full h-[400px]"
      />
      <div className="flex flex-row justify-between items-center px-4 z-10 mt-4">
        <div className="flex flex-row items-center justify-center shadow-lg  px-4 py-4 mr-8 rounded-md bg-white">
          <div className="flex flex-col items-start justify-between h-[280px] text-black-100">
            <h3 className="text-lg">Голова Правління</h3>
            <h3>Ребець Борис Григорович</h3>
            <span className="text-lg underline">+38 0937175717</span>
          </div>
          <img
            src={head}
            alt="head"
            className="w-[300px] h-[300px] rounded-md"
          />
        </div>
        <div className="flex flex-row items-center justify-center shadow-lg  px-4 py-4 rounded-md bg-white">
          <div className="flex flex-col items-start justify-between h-[280px] text-black-100 ">
            <h3 className="text-lg">Виконавчий директор</h3>
            <h3>Черватюк Ярослав Юрійович</h3>
            <span className="text-lg underline">+38 0989445993</span>
          </div>
          <img
            src={director}
            alt="director"
            className="w-[300px] h-[300px] rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full mt-20 px-4 flex-wrap">
        <div className="flex flex-col items-start">
          <span className="text-lg px-4 border-l-8 border-yellow-300 font-semibold border-b-2 w-full">
            Діяльність волонтерів Фонду
          </span>
          <div className="flex flex-row w-full">
            <Carousel className="w-[400px] my-8 rounded-md" shape="bar">
              <img src={image1} height="250" alt="carousel" />
              <img src={image2} height="250" alt="carousel" />
              <img src={image3} height="250" alt="carousel" />
              <img src={image4} height="250" alt="carousel" />
              <img src={image5} height="250" alt="carousel" />
              <img src={image6} height="250" alt="carousel" />
              <img src={image7} height="250" alt="carousel" />
              <img src={image8} height="250" alt="carousel" />
              <img src={image9} height="250" alt="carousel" />
              <img src={image10} height="250" alt="carousel" />
              <img src={image11} height="250" alt="carousel" />
              <img src={image12} height="250" alt="carousel" />
            </Carousel>
            <video
              src={video1}
              controls
              className="w-[500px] h-[400px] mx-4 rounded-md my-8"
            />
            <video
              src={video2}
              controls
              className="w-[500px] h-[400px] mx-4 rounded-md my-8"
            />
          </div>
        </div>
        <div className="flex flex-col items-start ml-4">
          <span className="text-lg px-4 border-l-8 border-yellow-300 font-semibold border-b-2 w-full">
            Фонд допомагає ВПО
          </span>
          <Carousel className="w-[600px] my-8 rounded-md" shape="bar">
            <img src={image21} height="250" alt="carousel" />
            <img src={image22} height="250" alt="carousel" />
            <img src={image23} height="250" alt="carousel" />
            <img src={image24} height="250" alt="carousel" />
          </Carousel>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg px-4 border-l-8 border-yellow-300 font-semibold border-b-2 w-full">
            Допомога ЗСУ від Фонду
          </span>
          <div className="flex flex-row w-full flex-wrap pb-12 justify-center">
            <Carousel className="w-[400px] my-8 rounded-md" shape="bar">
              <img src={image31} height="250" alt="carousel" />
              <img src={image32} height="250" alt="carousel" />
              <img src={image33} height="250" alt="carousel" />
              <img src={image34} height="250" alt="carousel" />
              <img src={image35} height="250" alt="carousel" />
              <img src={image36} height="250" alt="carousel" />
              <img src={image37} height="250" alt="carousel" />
              <img src={image38} height="250" alt="carousel" />
              <img src={image39} height="250" alt="carousel" />
              <img src={image310} height="250" alt="carousel" />
              <img src={image311} height="250" alt="carousel" />
              <img src={image312} height="250" alt="carousel" />
              <img src={image314} height="250" alt="carousel" />
              <img src={image315} height="250" alt="carousel" />
              <img src={image316} height="250" alt="carousel" />
              <img src={image317} height="250" alt="carousel" />
              <img src={image318} height="250" alt="carousel" />
              <img src={image319} height="250" alt="carousel" />
              <img src={image320} height="250" alt="carousel" />
              <img src={image321} height="250" alt="carousel" />
              <img src={image322} height="250" alt="carousel" />
              <img src={image323} height="250" alt="carousel" />
              <img src={image324} height="250" alt="carousel" />
            </Carousel>
            <video
              src={video31}
              controls
              className="w-[500px] h-[400px] mx-4 rounded-md my-8"
            />
            <video
              src={video32}
              controls
              className="w-[500px] h-[400px] mx-4 rounded-md my-8"
            />
            <video
              src={video33}
              controls
              className="w-[500px] h-[400px] mx-4 rounded-md my-8"
            />
            <video
              src={video34}
              controls
              className="w-[500px] h-[400px] mx-4 rounded-md my-8"
            />
            <video
              src={video35}
              controls
              className="w-[500px] h-[400px] mx-4 rounded-md my-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Landing };
