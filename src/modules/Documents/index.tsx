import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

const Documents = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-row flex-wrap w-full mt-4 px-4">
        <Link
          to="/status.pdf"
          target="_blank"
          download
          className="px-4 py-2 border-2 rounded-md cursor-pointer"
        >
          Статут_МБФ_НАША_СПАДЩИНА_редакція_2023
        </Link>
        <Link
          to="/vypyska1.pdf"
          target="_blank"
          download
          className="px-4 py-2 border-2 rounded-md cursor-pointer ml-4"
        >
          Виписка з ЄДР стр.1
        </Link>
        <Link
          to="/vypyska2.pdf"
          target="_blank"
          download
          className="px-4 py-2 border-2 rounded-md cursor-pointer ml-4"
        >
          Виписка з ЄДР стр.2
        </Link>
        <Link
          to="/vutyag.pdf"
          target="_blank"
          download
          className="px-4 py-2 border-2 rounded-md cursor-pointer ml-4"
        >
          Витяг з Реєстру неприбуткових
        </Link>
        <Link
          to="/UAH.pdf"
          target="_blank"
          download
          className="px-4 py-2 border-2 rounded-md cursor-pointer ml-4"
        >
          Довідка рахунок ГРН
        </Link>
        <Link
          to="/USD.pdf"
          target="_blank"
          download
          className="px-4 py-2 border-2 rounded-md cursor-pointer ml-4"
        >
          Довідка рахунок ДОЛАР США
        </Link>
        <Link
          to="/EUR.pdf"
          target="_blank"
          download
          className="px-4 py-2 border-2 rounded-md cursor-pointer ml-4"
        >
          Довідка рахунок ЄВРО
        </Link>
      </div>
    </div>
  );
};

export { Documents };
