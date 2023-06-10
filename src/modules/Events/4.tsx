import { Header } from "../../components/Header";
import { useEffect } from "react";
import {
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image310,
  image311,
  image312,
  image314,
  image315,
  image316,
  image317,
  image318,
  image319,
  image320,
  image321,
  image322,
  image323,
  image324,
  video31,
  video32,
  video33,
  video34,
  video35,
} from "../../assets/3";

const Event4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex w-full flex-col w-full">
      <Header />
      <div className="flex flex-col items-center justify-center mt-4 w-full">
        <div className="flex flex-row w-full flex-wrap items-center justify-center">
          <img
            src={image31}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image32}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image33}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image34}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image35}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image36}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image37}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image38}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image39}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image310}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image311}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image312}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image314}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image315}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image316}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image317}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image318}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image319}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
          <img
            src={image320}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image321}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image322}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image323}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image324}
            className="w-[600px] h-[400px] p-4"
            alt="carousel"
          />
        </div>
        <div className="flex flex-row w-full flex-wrap">
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
  );
};

export { Event4 };
