import { useState } from "react";
import { Nav } from "rsuite";

const BankDetails = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <div className="mt-4 xsm:hidden md:block mx-12 mb-12">
        <Nav
          onSelect={(key) => setActiveTab(key)}
          activeKey={activeTab}
          appearance="tabs"
        >
          <Nav.Item eventKey="1">Для переказів у національній валюті</Nav.Item>
          <Nav.Item eventKey="2">Для переказів в іноземній валюті EUR</Nav.Item>
          <Nav.Item eventKey="3">Для переказів в іноземній валюті USD</Nav.Item>
        </Nav>
        <div className="mt-2">
          {activeTab === "1" && (
            <div className="flex flex-col max-w-164 border-2 rounded-md">
              <div className="flex border-b-2">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  IBAN:
                </span>
                <span className="py-2 pl-2">UA033052990000026004020126156</span>
              </div>
              <div className="flex border-b-2">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  Банк отримувача:
                </span>
                <span className="py-2 pl-2">
                  АКЦІОНЕРНЕ ТОВАРИСТВО КОМЕРЦІЙНИЙ БАНК "ПРИВАТБАНК"
                </span>
              </div>
              <div className="flex">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  Код ЄДРПОУ:
                </span>
                <span className="py-2 pl-2">34845709</span>
              </div>
            </div>
          )}
          {activeTab === "2" && (
            <div className="flex flex-col max-w-164 border-2 rounded-md">
              <div className="flex border-b-2">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  IBAN:
                </span>
                <span className="py-2 pl-2">UA453052990000026009000129844</span>
              </div>
              <div className="flex border-b-2">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  Банк отримувача:
                </span>
                <span className="py-2 pl-2">
                  АКЦІОНЕРНЕ ТОВАРИСТВО КОМЕРЦІЙНИЙ БАНК "ПРИВАТБАНК"
                </span>
              </div>
              <div className="flex">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  SWIFT code
                </span>
                <span className="py-2 pl-2">34845709</span>
              </div>
            </div>
          )}
          {activeTab === "3" && (
            <div className="flex flex-col max-w-164 border-2 rounded-md">
              <div className="flex border-b-2">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  IBAN:
                </span>
                <span className="py-2 pl-2">UA303052990000026009040122050</span>
              </div>
              <div className="flex border-b-2">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  Банк отримувача:
                </span>
                <span className="py-2 pl-2">
                  АКЦІОНЕРНЕ ТОВАРИСТВО КОМЕРЦІЙНИЙ БАНК "ПРИВАТБАНК"
                </span>
              </div>
              <div className="flex">
                <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
                  SWIFT code
                </span>
                <span className="py-2 pl-2">34845709</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="xsm:block md:hidden flex flex-col mt-2 ">
        <div className="flex flex-col  border-2 rounded-md mt-2 xsm:mx-4 sm:mx-0">
          <div className="flex border-b-2">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">IBAN:</span>
            <span className="py-2 pl-2">UA033052990000026004020126156</span>
          </div>
          <div className="flex border-b-2">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
              Банк отримувача:
            </span>
            <span className="py-2 pl-2">
              АКЦІОНЕРНЕ ТОВАРИСТВО КОМЕРЦІЙНИЙ БАНК "ПРИВАТБАНК"
            </span>
          </div>
          <div className="flex">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
              Код ЄДРПОУ:
            </span>
            <span className="py-2 pl-2">34845709</span>
          </div>
        </div>
        <div className="flex flex-col  border-2 rounded-md mt-2 xsm:mx-4 sm:mx-0">
          <div className="flex border-b-2">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">IBAN:</span>
            <span className="py-2 pl-2">UA453052990000026009000129844</span>
          </div>
          <div className="flex border-b-2">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
              Банк отримувача:
            </span>
            <span className="py-2 pl-2">
              АКЦІОНЕРНЕ ТОВАРИСТВО КОМЕРЦІЙНИЙ БАНК "ПРИВАТБАНК"
            </span>
          </div>
          <div className="flex">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
              SWIFT code:
            </span>
            <span className="py-2 pl-2">34845709</span>
          </div>
        </div>
        <div className="flex flex-col  border-2 rounded-md mt-2 xsm:mx-4 sm:mx-0">
          <div className="flex border-b-2">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">IBAN:</span>
            <span className="py-2 pl-2">UA303052990000026009040122050</span>
          </div>
          <div className="flex border-b-2">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
              Банк отримувача:
            </span>
            <span className="py-2 pl-2">
              АКЦІОНЕРНЕ ТОВАРИСТВО КОМЕРЦІЙНИЙ БАНК "ПРИВАТБАНК"
            </span>
          </div>
          <div className="flex">
            <span className="xsm:w-24 sm:w-40 border-r-2 py-2 pl-2">
              SWIFT code:
            </span>
            <span className="py-2 pl-2">34845709</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { BankDetails };
