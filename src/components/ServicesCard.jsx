import { motion } from "framer-motion";

const ServicesCard = ({ Icon, name, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8, // Faster, so it doesn't feel sluggish
                ease: [0.25, 1, 0.5, 1], // Custom cubic bezier for smooth start & stop
                delay: index * 0.2, // Adds stagger effect
            }}
            className="group flex flex-col items-center text-center gap-3 p-5 shadow-lg rounded-lg cursor-pointer 
                 hover:shadow-xl transition duration-300 ease-in-out"
        >
            <div className="bg-[#d5f2ec] p-4 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                <Icon size={35} className="text-gray-700" />
            </div>
            <h1 className="font-semibold  font-anek text-lg text-gray-800">{name}</h1>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            <h3 className="text-backgroundColor font-medium cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                Learn more
            </h3>
        </motion.div>
    );
};

export default ServicesCard;
