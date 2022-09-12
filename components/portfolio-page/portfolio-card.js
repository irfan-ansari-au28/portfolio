import React from "react";
import { FiCode } from "react-icons/fi";
import ExternalLink from "../link/external-link";

const PortfolioCard = () => {
  return (
    <>
      <ExternalLink href={"https://github.com/irfan-ansari-au28/tshirt-bazar"}>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6">
                <div className="bg-lime-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <div>
                    <FiCode size={"2rem"} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-800">Url Shortener</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExternalLink>
    </>
  );
};

export default PortfolioCard;
