import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Doctors = () => {
    const data = [
        {
            img: "/src/assets/doc1.png",
            name: "Dr. Serena Mitchell",
            specialties: "Orthopedic Surgeon",
        },
        {
            img: "/src/assets/doc2.png",
            name: "Dr. Julian Bennett",
            specialties: "Cardiologist",
        },
        {
            img: "/src/assets/doc3.png",
            name: "Dr. Camila Rodriguez",
            specialties: "Pediatrician",
        },

    ];

    const slider = useRef(null);

    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
            <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
                <div>
                    <h1 className=" text-4xl font-semibold text-center lg:text-start">
                        Our Doctors
                    </h1>
                    <p className=" mt-2 text-center lg:text-start">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                        quidem.
                    </p>
                </div>
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
            </div>
            <div className=" mt-5">
                <Slider ref={slider} {...settings}>
                    {data.map((doctor, index) => (
                        <div
                            className="h-[400px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 px-2 cursor-pointer"
                            key={index}
                        >
                            <div>
                                <img
                                    src={doctor.img}
                                    alt="img"
                                    className=" h-56  rounded-t-xl w-full"
                                />
                            </div>

                            <div className=" flex flex-col justify-center items-center">
                                <h1 className=" font-semibold text-xl pt-4">{doctor.name}</h1>
                                <h3 className=" pt-2">{doctor.specialties}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Doctors;