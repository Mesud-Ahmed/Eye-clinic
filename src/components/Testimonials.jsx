import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const reviews = [
    {
        id: 1,
        name: "Mikyas Mengesha",
        rating: 5,
        text: "DR Asefa was an amazing honest guy which surprised me, if i had gone to other hospital they will prescript a glass for there profit but this clinic did the job only for the customer need and the service is very satisfying...",
        url: "https://g.co/kgs/EoC3Dxs", 
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXTgWvi3VFSKSEj8FcUkB5NpV_t5A7Q6Qu8vmSXd3YVGdgUham_=w66-h66-p-rp-mo-br100" 
    },
    {
        id: 2,
        name: "Selam Ashenafi",
        rating: 4,
        text: "As an accountant reading tiny numbers all day, my eyes work hard. Dalia Eye Clinic’s exceptional customer service—from my doctor’s expert advice to the friendly laughs I share with the reception team—makes every visit ...",
        url: "https://g.co/kgs/QgawnqR",
        image: "https://lh3.googleusercontent.com/a/ACg8ocILqqrz-APTNWK0nre3F59w4A3zFJwRUlHoRD8U6se-i29rla0=w66-h66-p-rp-mo-br100"
    },
    {
        id: 3,
        name: "Michael Zewdie",
        rating: 5,
        text: "I recently visited Dalia eye clinic, and I couldn’t be happier with my experience! From the moment I walked in, the staff was welcoming and professional. The reception area was clean and comfortable, making me feel at ease. …",
        url: "https://g.co/kgs/mFR24Aq",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjW_wpraN-n4UVySDUvccjKCLI2j5Og8bVlBQq5GqGdjaalp656p=w66-h66-p-rp-mo-br100"
    },
    {
        id: 4,
        name: "miki maraki",
        rating: 5,
        text: "The equipment and facility deserve 5star not to mention the neatness. On a time of appointments need a little improvement but other that great job.",
        url: "https://g.co/kgs/ABAfGFd",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKvANSwd3pPWXVHC2K7PElIMjgY-7z5YH1RzuoLiH35tzhkKw=w66-h66-p-rp-mo-br100"
    },
    {
        id: 5,
        name: "Amira Ahmed",
        rating: 5,
        text: "By far one of the best clinic and doctors in Addis that I have encountered.The Doctors are thorough, kind and incredibly patient, the nurses were so kind and helpful. Everyone there are very ...",
        url: "https://g.co/kgs/k1vzsYb",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXIzTpF1Kya4F5EVNF4t4tNhUVpzMb1xwcH6iSL2kdhv29Z56Ff=w66-h66-p-rp-mo-br100"
    }
];

const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    autoplay: true, 
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
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
export default function Testimonials() {
    const slider = useRef(null);
    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
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
            <div className=" mt-5 ">
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
            
        </div>
    );
}
