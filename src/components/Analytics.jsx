import React from "react";
import Laptop from "../assets/WhatsApp Image 2024-11-02 at 12.14.29_472b1eb7.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics contrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            iusto nobis facilis dolorem animi consequuntur voluptatum enim
            pariatur, eveniet assumenda labore! Nihil modi harum ducimus sed hic
            possimus in quod?
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 bg-black my-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
