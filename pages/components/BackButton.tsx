import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export function BackButton() {
    return (
        <Link href="/" className='z-50'>
            <IoArrowBack size={24} className="text-[#3D1549] dark:text-[#a87b05]"/>
        </Link>
    )
}