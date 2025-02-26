
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "./ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { eyeClinicServices } from "../../constants";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";


const Services = () => {
    const icon1 = (
        <RiMicroscopeLine size={35} className=" text-backgroundColor" />
    );
    const icon2 = (
        <MdHealthAndSafety size={35} className=" text-backgroundColor" />
    );
    const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 bg-[#A9B5DF]">
            <div className=" flex flex-col items-center lg:flex-row justify-center">
                <div >
                    <h1 className=" text-4xl font-semibold text-center ">
                        Our Services
                    </h1>

                    <p className=" mt-2 text-center lg:text-start">
                    we provide personalized care tailored to your needs. 
                    </p>
                </div>

            </div>
            <div
                
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20"
            >
                {eyeClinicServices.map((service, index) => (
                    <ServicesCard
                        key={service.name}
                        name={service.name}
                        Icon={service.icon}
                        description={service.description}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-6 px-8  rounded-lg shadow-lg text-lg font-medium mt-4 flex-wrap">
                <p className="mr-4 whitespace-nowrap lg:mb-0 sm:mb-4">Need Expert Eye Care Services?</p>
                <motion.a
                    className="bg-white text-blue-600 font-bold px-4 py-2  rounded-full shadow-lg transition hover:bg-gray-200 focus:outline-none whitespace-nowrap cursor-pointer"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                >
                   📞 Call Us  
                </motion.a>
            </div>

        </div>
    );
};

export default Services;