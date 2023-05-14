import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from 'react-icons/bs';
import Avatar from "../../public/avatar.jpg";


export function Header() {

    return (
        <div className="flex items-center justify-center flex-col z-50">

            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Image priority height={400} width={400} className="max-w-[144px] h-36 p-1 rounded-full object-cover ring-4 ring-[#a87b05]  dark:ring-[#a87b05]" src={Avatar} alt=""/>
            </motion.div>

            <motion.div
                className="box"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <h1 className="text-transparent bg-clip-text bg-gradient-to-bl dark:from-[#ffe998] dark:to-[#57370d] from-[#C9B995] to-[#57370d] text-5xl text-center mt-4 font-sub-title02 font-medium">
                    Ila Bittencourt
                </h1>
            </motion.div>


            <motion.div
                className="box"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <div className="flex h-10 items-center justify-center space-x-2 font-sub-title text-gray-500 dark:text-gray-200 text-lg text-center -mt-2 mb-4">
                    <span className="">Nutricionista</span>
                    <span>Ortomolecular</span>
                </div>
            </motion.div>

            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Link target="_blank" href='https://www.instagram.com/nutricionista_ila' className="">
                    <BsInstagram size={30} className="mb-2 text-[#a87b05]"/>
                </Link>
            </motion.div>

        </div>
    )
}