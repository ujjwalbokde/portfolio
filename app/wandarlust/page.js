import React from "react";
import Navbar from "@/components/Navbar";
const Wandarlust = () => {
  return (
    <>
      <div className="w-[70%] my-16 mx-auto shadow rounded-lg border-[3px] border-gray-500  flex flex-col md:flex-row p-6 gap-6 md:p-12">
        <img
          className="object-fill md:w-1/3 md:h-auto shadow-lg rounded-lg md:rounded-l-lg"
          src="/wandarlust.png"
          alt="wandarlust"
        />
        <div className="flex flex-col justify-between p-4 leading-normal md:w-2/3">
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wandarlust
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A dynamic web platform designed to help users discover and review
            hotels. Browse through a variety of hotel listings, from cozy cabins
            to luxurious retreats.
            <br />
            <br />
            <b>Technologies Used:</b>
            <br />
            <b>Frontend:</b> EJS, CSS, JavaScript <br />
            <b>Backend: </b>Express.js <br />
            <b>Database:</b> MongoDB <br />
          </p>
          <div className="flex mt-3">
            {/* <a href="https://weather-api-using-reactjs-indol.vercel.app/" target="_blank" type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Vist Website</a> */}
            <a
              href="https://github.com/ujjwalbokde/Mini-Wandarlust"
              target="_blank"
              type="button"
              class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              GitHub Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wandarlust;
