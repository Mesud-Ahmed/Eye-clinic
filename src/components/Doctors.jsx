import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";
import doc4 from "../assets/doc4.jpg";
import { motion } from "framer-motion";

const data = [
    { img: doc1 },
    { img: doc2 },
    { img: doc3 },
    { img: doc4 },
];


const Doctors = () => {




    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16 bg-[#E8F9FF]">
            <div className=" flex flex-col items-center lg:flex-row justify-center mb-10 lg:mb-0">
                <div className="">
                    <h1 className=" text-4xl font-semibold text-center l">
                        Our Doctors
                    </h1>
                    <p className=" mt-2 text-center ">
                    Our team of skilled ophthalmologists and optometrists
                    </p>
                </div>

            </div>
            <div className="mt-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-2 ">
                {data.map((doctor, index) => (
                    <motion.div
                        className="sm:h-[200px] lg:h-[500px]  w-full text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 px-2 cursor-pointer  overflow-hidden"
                        key={index}
                        initial={{ y: 100, opacity: 0 }} 
                        whileInView={{ y: 0, opacity: 1 }} 
                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.5 }}
                        viewport={{ once: true }} 
                    >

                        <img
                            src={doctor.img}
                            alt="img"
                            className=" h-full rounded-t-xl   w-full"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;
