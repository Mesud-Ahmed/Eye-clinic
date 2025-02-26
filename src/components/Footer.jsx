import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className=" bg-[#578FCA] text-white rounded-t-3xl mt-10 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className=" w-full md:w-2/4 mr-5 lg:w-1/4 text-center">
                    <h1 className=" font-semibold text-xl pb-4 text-center">Daliya Specialized <br /> <span className="block text-center ">Eye Clinic</span> </h1>
                    <p className=" text-sm">
                        At Daliya Specialized Eye Clinic, we are committed to providing exceptional eye care services with a focus on precision, comfort, and personalized treatment.

                    </p>
                    <br />
                    <p className=" text-sm">
                        Visit us today and see the world more clearly with expert care you can trust.
                    </p>
                </div>

                <div className=" w-full md:w-2/4">
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                    <nav className=" flex flex-col gap-2">
                        <p spy={true} smooth={true} duration={500}>
                            Address: <a target="_blank"
                                rel="noopener noreferrer" className='text-[#D6CFB4]' href="https://maps.app.goo.gl/HtqcHnu9bVN71FrW7">Tele Medhanealem, Metti Building, Namibia St, Addis Ababa </a> </p>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            support@care.com
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            +123-456-7890
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="">
                <p className=" text-center py-4">
                    &copy; 2025 Daliya Specialized Eye Clinic || All rights reserved <br /> developed by
                    <a target="_blank"
                        rel="noopener noreferrer" href='https://my-portfolio-kappa-lyart-53.vercel.app/' className=" text-hoverColor"> Mesud Ahmed</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;