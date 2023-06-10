import { Header } from "../../components/Header";
import { useEffect } from "react";
import { image21, image22, image23, image24 } from "../../assets/2";

const Event2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex w-full flex-col w-full">
      <Header />
      <div className="flex flex-col items-center justify-center mt-4 w-full">
        <div className="flex flex-row w-full flex-wrap items-center justify-center">
          <img
            src={image21}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image22}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image23}
            className="w-[450px] h-[600px] p-4"
            alt="carousel"
          />
          <img
            src={image24}
            className="w-[600px] h-[600px] p-4"
            alt="carousel"
          />
        </div>
      </div>
    </div>
  );
};

export { Event2 };
