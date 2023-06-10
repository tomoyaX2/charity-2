import { Header } from "../../components/Header";
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
} from "../../assets/1";
import { useEffect } from "react";

const Event1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex w-full flex-col w-full">
      <Header />
      <div className="flex flex-col items-center justify-center mt-4 w-full">
        <div className="flex flex-row w-full flex-wrap items-center justify-center">
          <img
            src={image1}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image2}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image3}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image4}
            className="w-[600px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image5}
            className="w-[800px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image6}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image7}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image8}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image9}
            className="w-[800px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image10}
            className="w-[800px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image11}
            className="w-[800px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image12}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
        </div>
        <div className="flex flex-row">
          <video
            src={video1}
            controls
            className="w-[600px] h-[500px] mx-4 rounded-md my-8"
          />
          <video
            src={video2}
            controls
            className="w-[600px] h-[500px] mx-4 rounded-md my-8"
          />
        </div>
      </div>
    </div>
  );
};

export { Event1 };
