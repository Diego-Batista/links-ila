import { motion } from "framer-motion";
import Image from 'next/image';
import { HiOutlineTicket } from 'react-icons/hi';
import 'swiper/css';
import Planta from "../../public/planta.png";
import { CouponCard } from './CouponCard';
import { Header } from './Header';

export function CardConsult() {
    return (
        <div className="w-full py-2 flex flex-col items-center justify-center">
 
            <Image priority alt='' src={Planta} className='absolute -top-4 -left-16 max-w-[350px]' width={800} height={600} />

            <div className="flex justify-center items-center flex-col px-10 py-5 mt-9">
                <Header/>
            </div>

            <div className='w-full flex items-center justify-center space-x-4 text-gray-500 dark:text-gray-200'>
                <HiOutlineTicket size={40} className=''/>
                <h3 className='text-4xl'>Cupons</h3>
            </div>

            <div className='w-full md:w-[500px] xl:w-1/3 px-4 mt-6 space-y-4'>
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
                        url='https://equaliv.com.br/'
                        discount='15%'
                        site='equaliv.com.br'
                        coupon='ilanutri15'
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
                        url='https://www.duxnutrition.com/'
                        discount='20%'
                        site='duxnutrition.com'
                        coupon='pacientesilambs'
                    />
                </motion.div>     
            </div>
                       
        </div>
        

    )
}