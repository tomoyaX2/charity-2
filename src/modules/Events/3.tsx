import { Header } from "../../components/Header";
import { useEffect } from "react";
import {
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
} from "../../assets/4";

const Event3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex w-full flex-col w-full">
      <Header />
      <div className="flex flex-col items-center justify-center mt-4 w-full">
        <div className="flex flex-row w-full flex-wrap items-center justify-center">
          <img
            src={image41}
            className="w-[600px] h-[550px] p-4"
            alt="carousel"
          />
          <img
            src={image42}
            className="w-[600px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image43}
            className="w-[600px] h-[500px] p-4"
            alt="carousel"
          />
          <img
            src={image44}
            className="w-[600px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image45}
            className="w-[600px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image46}
            className="w-[700px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image47}
            className="w-[700px] h-[600px] p-4"
            alt="carousel"
          />
        </div>
      </div>
    </div>
  );
};

export { Event3 };
