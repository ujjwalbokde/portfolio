"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Element, scroller } from 'react-scroll';
export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.name,data.email,data.message);
    alert("@ujjwalbokde will contact you soon .....")
    reset()
  };
  return (
    <>
    {/* home */}
      <div className=" bg-cover bg-no-repeat min-h-screen w-full pb-2 " id="home" > 
        <div className="w-[500px] m-16 mb-56 mx-[7%]">
          <h5 className="italic text-sky-500 mb-1">Hello !!!</h5>
          <h1 className="text-5xl font-bold mb-7">I'm Ujjwal Bokde</h1>
          <div className="flex mb-8">
          <div className="bg-sky-400 text-black italic  w-max px-2 mx-1">
            MERN STACK DEVELOPER
          </div>
          <div className="bg-sky-400 text-black italic w-max px-2 mx-1">
            DATA  STRUCTURE
          </div>
          </div>
          <div className="mb-6 flex">
            <a
              type="button"
              target="_blank"
              href="https://www.linkedin.com/in/ujjwal-bokde-3577a625a/"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex"
            >
              <img src="linkedin.png" className="w-5 h-5" alt="" />
              <span className="mx-1 font-semibold">Linkedin</span>
            </a>
            <a
              type="button"
              target="_blank"
              href="https://github.com/ujjwalbokde"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex"
            >
              <img src="github.png" className="w-5 h-5" alt="" />
              <span className="mx-1 font-semibold">GitHub</span>
            </a>
            <button
              type="button"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex"
            >
              <img
                src="downloading.png"
                className="w-5 h-5"
                alt="Resume Icon"
              />
              <span className="mx-1 font-semibold">Resume</span>
            </button>
          </div>
          <p>
            I am a Computer Science student with a passion for coding,
            specializing in the MERN stack and Next.js. I enjoy solving problems
            and building web applications that combine creativity and technical
            expertise. As the Literature Co-Head of the 'Engineering India YCCE'
            club, I've led initiatives and events that foster learning and
            social welfare. I'm always eager to collaborate on innovative
            projects and continue expanding my skill set.
          </p>
        </div>
      </div>

    {/* about */}
      <div className="bg-hero-about bg-cover bg-no-repeat min-h-screen w-full pt-20 pb-2 " id="about">
        <div className="mx-[58%] w-[500px] m-16 mb-56">
          <h1 className="text-5xl font-bold mb-5">About Me</h1>
          <div className="w-80 h-2 bg-sky-600 mb-10"></div>
          <p className="mb-10">
            I am a third-year B.Tech student specializing in Computer Science
            and Engineering. Passionate about web development, I have honed my
            skills as a MERN stack developer. My expertise lies in building
            responsive and efficient web applications using MongoDB, Express.js,
            React.js, and Node.js.<br></br>
            <br /> I am eager to leverage my technical skills and academic
            knowledge to contribute to innovative projects and grow as a
            professional in the tech industry. Looking forward to connecting
            with like-minded professionals and exploring exciting opportunities
            in the field of web development.
          </p>
          <h2 className="text-3xl font-boldm mb-5">Hobbies & Interest</h2>

          <button className=" border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black mb-3 mx-3">
            PLAYING CRICKET
          </button>
          <button className=" border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black">
            WATCHING CRICKET
          </button>
          <button className=" border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black mx-3">
            TRAVELLING
          </button>
        </div>
      </div>

    {/* skills */}
      <div className="bg-hero-simple bg-cover bg-no-repeat min-h-screen w-full pt-24 pb-16 element" name="skills">
        <div className="w-full max-w-screen-lg my-16 m-16 mx-[15%]">
          <h1 className="text-5xl font-bold mb-5 text-center">Skills</h1>
          <div className="flex justify-center mb-16">
            <div className="w-80 h-2 bg-sky-600"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="html.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="html"
              />
              HTML
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="css.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="css"
              />
              CSS
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="javascript.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="javascript"
              />
              JAVASCRIPT
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="react.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="react"
              />
              REACT
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="nextJs.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="next"
              />
              NEXT JS
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="tailwind.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="tailwind"
              />
              TAILWIND
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="node.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="node"
              />
              NODE JS
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="express.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="express"
              />
              EXPRESS JS
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="DB.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="mongodb"
              />
              MONGODB
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="bootstrap.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="bootstrap"
              />
              BOOTSTRAP
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="java.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="java"
              />
              JAVA
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="C.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="c"
              />
              C LANGUAGE
            </div>
            <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
              <img
                src="python.png"
                className="w-24 mb-2 hover:w-[104px] hover:duration-200"
                alt="python"
              />
              PYTHON
            </div>
          </div>
        </div>
      </div>

    {/* projects */}
      <div className="bg-hero-simple bg-cover bg-no-repeat min-h-screen w-full pt-44 pb-44 element" name="projects" >
        <div>
          <h1 className="text-5xl font-bold mb-5 text-center">Projects</h1>
          <div className="flex justify-center mb-16">
            <div className="w-80 h-2 bg-sky-600"></div>
          </div>
          <div className="flex gap-12 justify-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/weather.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Weather Detector
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A real-time app that detects and displays current weather
                  conditions based on location.
                </p>
                <a
                  href="/weather"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Show Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg h-[195px]"
                  src="/library.png"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Library Management System
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Login-based system for issuing and returning books with
                  real-time tracking.
                </p>
                <a
                  href="/libraryMS"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Show Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg h-[195px]"
                  src="/wandarlust.png"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Wandarlust
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A platform to explore travel destinations with unique stays
                  and real-time weather updates.
                </p>
                <a
                  href="/wandarlust"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Show Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* contacts */}
      <div className="bg-hero-simple bg-cover bg-no-repeat min-h-screen w-full pt-36 pb-4 text-white element" name="contact">
        <h1 className="text-5xl font-bold mb-5 text-center">Contact Us</h1>
        <div className="flex justify-center mb-16">
          <div className="w-80 h-2 bg-sky-600"></div>
        </div>
        <div className="px-32 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="p-16 mx-12 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">Name is required</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  {...register("message", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">Message is required</p>
                )}
              </div>

              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Send
                </span>
              </button>
            </form>
          </div>

          <div className=" p-6 rounded-lg  w-full md:w-1/2 h-[440px]">
            <h2 className="text-2xl font-bold mb-10">Contact Information</h2>
            <p className="mb-5 border border-white w-[400px] p-5 text-center rounded-md flex" >
              <strong><img src="/telephone.png" className="w-10 mr-5" alt="" /></strong> +91 9764624075
            </p>

            <p className="mb-5 border border-white w-[400px] p-5 text-center rounded-md flex">
              <strong><img src="/location.png" className="w-10 mr-5" alt="" /></strong> 1007 Nagsenvan, Nagpur-440017, India
            </p>
            <p className="mb-5 border border-white w-[400px] p-5 text-center rounded-md flex">
              <strong><img src="/gmail.png" className="w-10 mr-5" alt="" /></strong> ujjwalbokde370@gmail.com
            </p>
          </div>
        </div>
        <Footer/>
      </div>


    </>
  );
}
