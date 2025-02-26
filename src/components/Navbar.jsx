import { useState } from "react";
import { Link } from "react-scroll";
import logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu, AiFillPhone } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };


    return (
        <div className=" fixed w-full z-10 text-white">
            <div>
                <div className=" flex flex-row justify-between p-4 md:px-32 px-5 bg-[#578FCA] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="hidden lg:flex flex-row items-center cursor-pointer ">
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <img className='rounded-full w-[70px] ' src={logo} />
                        </Link>
                    </div>


                    <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            About Us
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Services
                        </Link>
                        <Link
                            to="doctors"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Doctors
                        </Link>

                    </nav>

                    <div className=" hidden lg:flex mt-4">
                        <motion.a
                            className="bg-white text-blue-600 font-bold px-4 py-2  rounded-full shadow-lg transition hover:bg-gray-200 focus:outline-none whitespace-nowrap cursor-pointer"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                        >
                            📞 Call Us
                        </motion.a>
                    </div>



                    <div className=" lg:hidden flex items-center cursor-pointer hover:scale-110">
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div
                    className={`${menu ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
                >
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className=" hover:text-hoverColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className=" hover:text-hoverColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className=" hover:text-hoverColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Services
                    </Link>
                    <Link
                        to="doctors"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className=" hover:text-hoverColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Doctors
                    </Link>


                    <div className=" lg:hidden">
                        <motion.a
                            className="bg-white text-blue-600 font-bold px-4 py-2  rounded-full shadow-lg transition hover:bg-gray-200 focus:outline-none whitespace-nowrap cursor-pointer"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                        >
                            📞 Call Us
                        </motion.a>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;