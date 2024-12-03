//@ts-ignore
"use client";
import React from "react";
const Contact = () => {
  return (
    <div className="py-4 px-4 mt-[2rem] mb-[6rem] flex justify-center items-center rounded-md bg-gray-900 z-10 text-white">
      <section
        id="contact"
        className="flex flex-col md:flex-row lg:flex-row gap-10 py-10 px-10 bg-gray-800 rounded-md w-full h-full justify-center items-center"
      >
        <span className="font-mono font-semibold text-3xl w-max">
          Get In Touch
        </span>
        <p className="text-center text-[1rem] w-auto max-w-[40rem]">
          Looking to collaborate? Let’s arrange a meeting to discuss your goals
          and how I can help achieve them.
        </p>
        <a href="mailto:mwendavictorm@gmail.com">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Let's do this
            </div>
          </button>
        </a>
      </section>
    </div>
  );
};

export default Contact;
