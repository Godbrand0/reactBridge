import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single Users</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx8 mt-8">500 gb Storage</p>
            <p className="py-2 border-b mx8">1 Granted Users</p>
            <p className="py-2 border-b mx8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 text-black my-6">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col items-center p-4 my-8 md:my-0 bg-gray-100 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-transprent"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single Users</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx8 mt-8">500 gb Storage</p>
            <p className="py-2 border-b mx8">1 Granted Users</p>
            <p className="py-2 border-b mx8">Send up to 2 GB</p>
          </div>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 bg-black my-6">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single Users</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx8 mt-8">500 gb Storage</p>
            <p className="py-2 border-b mx8">1 Granted Users</p>
            <p className="py-2 border-b mx8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 text-black my-6">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
