import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import Avatar from "../public/avatar.jpg";
import Planta from "../public/planta.png";

export function Header() {
  return (
    <div className="flex items-center justify-center flex-col z-40 mt-12">
      <motion.div
            className="box"
            initial={{ x: -100, y: -16, opacity: 0 }}
            animate={{ x: 0, y: -16, opacity: 1 }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              priority
              alt=""
              src={Planta}
              className="absolute -top-14 right-3 md:right-28 md:-top-9 xl:right-36 max-w-[250px] md:max-w-sm xl:hidden -z-10"
              width={800}
              height={600}
            />
          </motion.div>
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
        <Image
          priority
          height={400}
          width={400}
          className="max-w-[144px] h-36  md:max-w-[244px] md:h-60 p-1 rounded-full object-cover ring-4 ring-[#a87b05]  dark:ring-[#a87b05]"
          src={Avatar}
          alt=""
        />
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
        <h1 className="text-transparent bg-clip-text bg-gradient-to-bl dark:from-[#ffe998] dark:to-[#57370d] from-[#C9B995] to-[#57370d] text-5xl md:text-7xl  text-center mt-5 font-title font-medium">
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
        <div className="flex h-10 items-center justify-center space-x-2 font-sub-title text-gray-400 dark:text-gray-200 text-sm md:text-xl text-center -mt-2 mb-4 ">
          <span className="">Nutrição funcional e ortomolecular</span>
         
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
        <Link
          target="_blank"
          href="https://www.instagram.com/nutricionista_ila"
          className="flex flex-col items-center justify-center"
        >
          <BsInstagram className="w-7 h-7 md:w-11 md:h-11 mb-2 text-[#a87b05]" />
          <span className="text-sm md:text-lg font-medium text-[#a87b05] mb-2">Siga-me no instagram</span>
        </Link>
      </motion.div>
    </div>
  );
}
