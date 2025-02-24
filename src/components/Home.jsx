import React from "react";
import Button from "./Button";

const Home = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-start px-5 lg:px-32 text-white bg-[url('assets/heroImg.jpg')] bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative w-full lg:w-3/5 space-y-6 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    Clear Vision, Brighter Future
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed font-medium">
                    Your trusted eye care partner, delivering expert solutions to enhance your vision 
                    and improve your quality of life.
                </p>
                
                <div className="mt-6">
                    <Button title="See Services" />
                </div>
            </div>
        </div>
    );
};

export default Home;
