import Button from "./Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "./ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { eyeClinicServices } from "../../constants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

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
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className=" flex flex-col items-center lg:flex-row justify-center">
                <div >
                    <h1 className=" text-4xl font-semibold text-center ">
                        Our Services
                    </h1>

                    <p className=" mt-2 text-center lg:text-start">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                        quidem.
                    </p>
                </div>
                
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20">
                {eyeClinicServices.map((service) => (
                    <ServicesCard key={service.name} name={service.name} Icon={service.icon} description={service.description} />
                ))}
            </div>


        </div>
    );
};

export default Services;