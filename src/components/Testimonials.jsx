import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { reviews ,settings} from "../../constants";

export default function Testimonials() {
    const slider = useRef(null);
    return (
        <motion.div
            className="max-w-4xl mx-auto my-10 p-6 rounded-lg"
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 2, ease: "easeOut" }} 
        >
            <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
            <div className="flex gap-5 mt-2 lg:-mb-4">
                <button
                    className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
                    onClick={() => slider.current.slickPrev()}
                >
                    <FaArrowLeft size={25} />
                </button>
                <button
                    className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
                    onClick={() => slider.current.slickNext()}
                >
                    <FaArrowRight size={25} />
                </button>
            </div>
            <div className="mt-5">
                <Slider ref={slider} {...settings}>
                    {reviews.map((review) => (
                        <a
                            key={review.id}
                            href={review.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2  mx-2 h-[400px] border rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-lg transition transform hover:scale-105"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full mr-3"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{review.name}</h3>
                                    <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                                </div>
                            </div>
                            <p className="text-gray-600">"{review.text}"</p>
                        </a>
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
}
