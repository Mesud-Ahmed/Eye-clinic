import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";
import doc4 from "../assets/doc4.jpg";

const data = [
    { img: doc1 },
    { img: doc2 },
    { img: doc3 },
    { img: doc4 },
];


const Doctors = () => {




    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
            <div className=" flex flex-col items-center lg:flex-row justify-center mb-10 lg:mb-0">
                <div className="">
                    <h1 className=" text-4xl font-semibold text-center l">
                        Our Doctors
                    </h1>
                    <p className=" mt-2 text-center ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                        quidem.
                    </p>
                </div>

            </div>
            <div className="mt-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
                {data.map((doctor, index) => (
                    <div
                        className="h-[500px] w-full text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 px-2 cursor-pointer "
                        key={index}
                    >

                        <img
                            src={doctor.img}
                            alt="img"
                            className=" h-full rounded-t-xl w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;