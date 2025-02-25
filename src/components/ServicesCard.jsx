const ServicesCard = ({ Icon, name, description }) => {
    return (
        <div className="group flex flex-col items-center text-center gap-3 p-5 shadow-lg rounded-lg cursor-pointer 
                        hover:shadow-xl transition duration-300 ease-in-out">
            <div className="bg-[#d5f2ec] p-4 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                <Icon size={35} className="text-gray-700" />
            </div>
            <h1 className="font-semibold text-lg text-gray-800">{name}</h1>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            <h3 className="text-backgroundColor font-medium cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                Learn more
            </h3>
        </div>
    );
};

export default ServicesCard;
