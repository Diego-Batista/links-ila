import { motion } from "framer-motion";
import { IoTicketSharp } from "react-icons/io5";
import "swiper/css";
import { CouponCard } from "./CouponCard";
import { Header } from "./Header";

export function CardConsult() {
  return (
    <div className="w-full py-2 flex flex-col items-center justify-center">

      <div className="flex justify-center items-center flex-col px-10 py-5">
        <Header />
      </div>

      <div className="w-full flex items-center justify-center space-x-3 text-gray-400 dark:text-gray-200">
        <IoTicketSharp className="w-10 h-10 md:w-14 md:h-14" />
        <h3 className="text-4xl md:text-6xl">Cupons</h3>
      </div>

      <div className="w-full md:w-[80%] xl:w-1/3 px-4 mt-6 space-y-4">

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <CouponCard
            url="https://www.duxnutrition.com/"
            discount="20"
            site="duxnutrition.com"
            coupon="pacientesilambs"
          />
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <CouponCard
            url="🛍www.seivacosmeticos.com.br/"
            discount="15"
            site="seivacosmeticos.com.br"
            coupon="ILANUTRI"
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
          <CouponCard
            url="https://equaliv.com.br/"
            discount="15"
            site="equaliv.com.br"
            coupon="ilanutri15"
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <CouponCard
            url="https://www.nutrify.com.br/"
            discount="10"
            site="www.nutrify.com.br"
            coupon="IM845"
          />
        </motion.div>
      </div>
    </div>
  );
}
