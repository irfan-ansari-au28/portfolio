import Link from "next/link";
import React from "react";
import { FiCode } from "react-icons/fi";

const PortfolioCard = () => {
  return (
    <>
      <Link
        target={"_blank"}
        href={"https://github.com/irfan-ansari-au28/tshirt-bazar"}
      >
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <FiCode size={"2rem"} />
                <div className="space-y-2">
                  <p className="text-slate-800">Url Shortener</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PortfolioCard;
