import React from "react";
import coverImg from "../assets/cover.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <div className="w-full lg:w-3/4">
                <video
                    className="w-full  object-cover rounded-lg"
                    poster={coverImg}
                    controls
                    muted
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
            <div className=" w-full lg:w-3/4 space-y-4">
                <h1 className=" text-4xl font-semibold text-center lg:text-start">Short Story About Us</h1>
                <p className=" text-justify lg:text-start">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                    labore rerum tempore tenetur commodi natus quos itaque voluptatum
                    repudiandae nostrum accusantium vero voluptate aspernatur totam,
                    laboriosam aut, et quae consequatur?
                </p>
                <p className="text-justify lg:text-start">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
                    suscipit illum, numquam incidunt nostrum dolor officia doloremque
                    cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
                    Dolor, minus reiciendis.
                </p>
                <div className="text-justify lg:text-start grid  md:grid-cols-2 ">
                    <div ref={ref} className="text-center p-7 bg-purple-300 rounded-md m-1">
                        {inView && <CountUp className="font-bold text-4xl " start={90} end={1000} duration={4} suffix="+" />}
                        <h2 className="text-2xl ">Happy Customers</h2>
                    </div>
                    <div ref={ref} className="text-center p-7 bg-pink-300 rounded-md m-1">
                        {inView && <CountUp className="font-bold text-4xl " start={0} end={10} duration={4} suffix="+" />}
                        <h2 className="text-2xl ">Specialist Doctors</h2>
                    </div>
                    <div ref={ref} className="text-center p-7 bg-blue-400 rounded-md m-1">
                        {inView && <CountUp className="font-bold text-4xl " start={0} end={6} duration={4} suffix="+" />}
                        <h2 className="text-2xl ">Years of Experience</h2>
                    </div>
                    <div ref={ref} className="text-center p-7 bg-slate-400 rounded-md m-1">
                        {inView && <CountUp className="font-bold text-4xl " start={0} end={10} duration={4} suffix="+" />}
                        <h2 className="text-2xl ">Succesfull Surgeries</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;