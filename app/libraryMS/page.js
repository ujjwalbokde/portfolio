import React from "react";
import Navbar from "@/components/Navbar";
const Library = () => {
  return (
    <>
      <div className="w-[70%] my-16 mx-auto shadow rounded-lg border-[3px] border-gray-500 flex flex-col md:flex-row p-6 gap-6 md:p-12">
        <img
          className="object-fill md:w-1/3 md:h-auto shadow-lg rounded-lg md:rounded-l-lg"
          src="/library.png"
          alt="library"
        />
        <div className="flex flex-col justify-between p-4 leading-normal md:w-2/3">
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Library Management System
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A web application designed to streamline library operations.
            Features include user authentication, book management, and tracking
            of borrowing and returning activities.
            <br />
            <br />
            <b>Technologies Used : </b>
            <br />
            <b>Frontend:</b> React Js, Tailwind CSS <br />
            <b>Backend: </b>Node.js, Express.js <br />
            <b>Database:</b> MongoDB <br />
          </p>
          <div className="flex mt-3">
            <a
              href="https://github.com/ujjwalbokde/Library-Management-Project-using-react"
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

export default Library;
