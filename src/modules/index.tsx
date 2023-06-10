import { Header } from "../components/Header";
import background from "../assets/background.jpeg";
import head from "../assets/head.jpeg";
import director from "../assets/director.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Panel } from "rsuite";
import { image1, image2, image3 } from "../assets/1";
import { image21, image22, image23 } from "../assets/2";
import { image31, image32, image33 } from "../assets/3";
import { image41, image42, image43 } from "../assets/4";
import { Link } from "react-router-dom";
import { BankDetails } from "../components/BankDetails";

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
            className="w-[300px] h-[300px] rounded-md ml-2"
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
            className="w-[300px] h-[300px] rounded-md ml-2"
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-start w-full mt-20 px-4 flex-wrap w-full">
        <Panel
          header="Діяльність волонтерів Фонду"
          collapsible
          bordered
          className="w-full"
        >
          <div className="flex flex-col items-start">
            <div className="flex flex-row w-full">
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
            </div>
            <Link to="/event/1">
              <div className="flex cursor-pointer items-center justify-center ml-4">
                <span className="mr-2">Переглянути</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </Panel>
        <Panel
          header="Фонд допомагає ВПО"
          collapsible
          bordered
          className="w-full mt-4"
        >
          <div className="flex flex-col items-start">
            <div className="flex flex-row w-full flex-wrap">
              <img
                src={image21}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
              <img
                src={image22}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
              <img
                src={image23}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
            </div>
            <Link to="/event/2">
              <div className="flex cursor-pointer items-center justify-center ml-4">
                <span className="mr-2">Переглянути</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </Panel>
        <Panel
          header=" Гуманітарна допомога від Фонду медичним закладам"
          collapsible
          bordered
          className="w-full mt-4"
        >
          <div className="flex flex-col items-start">
            <div className="flex flex-row w-full flex-wrap">
              <img
                src={image41}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
              <img
                src={image42}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
              <img
                src={image43}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
            </div>
            <Link to="/event/3">
              <div className="flex cursor-pointer items-center justify-center ml-4">
                <span className="mr-2">Переглянути</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </Panel>
        <Panel
          header=" Допомога ЗСУ від Фонду"
          collapsible
          bordered
          className="w-full mt-4"
        >
          <div className="flex flex-col items-start">
            <div className="flex flex-row w-full flex-wrap">
              <img
                src={image31}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
              <img
                src={image32}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
              <img
                src={image33}
                className="w-[450px] h-[400px] p-4"
                alt="carousel"
              />
            </div>
            <Link to="/event/4">
              <div className="flex cursor-pointer items-center justify-center ml-4">
                <span className="mr-2">Переглянути</span>
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
