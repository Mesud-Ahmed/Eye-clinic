import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Home = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-start px-5 lg:px-32 text-white bg-[url('assets/heroImg.jpg')] bg-no-repeat bg-cover">
           
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <motion.div 
                className="relative w-full lg:w-3/5 space-y-6 text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
            >
              
                <motion.h1 
                    className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                >
                    Clear Vision, Brighter Future
                </motion.h1>

               
                <motion.p 
                    className="text-xl text-gray-200 leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut", delay: 0.7 }} 
                >
                    Your trusted eye care partner, delivering expert solutions to enhance your vision 
                    and improve your quality of life.
                </motion.p>
                
                
                <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.4 }} 
                >
                    <Button title="See Services" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
