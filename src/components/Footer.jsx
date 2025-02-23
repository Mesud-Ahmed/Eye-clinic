import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className=" w-full md:w-2/4 mr-5 lg:w-1/4">
                    <h1 className=" font-semibold text-xl pb-4">WellnessVista</h1>
                    <p className=" text-sm">
                        Our team of dedicated doctors, each specializing in unique fields
                        such as orthopedics, cardiology, pediatrics, neurology, dermatology,
                        and more.
                    </p>
                </div>

                <div className=" w-full md:w-2/4">
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                    <nav className=" flex flex-col gap-2">
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            123 Elm Street, Suite 456 Springfield, IL 62701 United States
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            support@care.com
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            +123-456-7890
                        </Link>
                    </nav>
                </div>
            </div>
            <div>
                <p className=" text-center py-4">
                    @copyright developed by
                    <span className=" text-hoverColor"> Mesud Ahmed</span> | All
                    rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;