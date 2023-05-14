import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  mainImage: string;
  title: string;
  description: string;
  link: string;
  textBtn: string;
  iconBtn?: ReactNode;
};

export function CardEbooks({
  mainImage,
  title,
  link,
  description,
  textBtn,
  iconBtn,
}: Props) {
  return (
    <>
      <div className="flex flex-col items-center ml-4 mr-4 mb-6 rounded-lg">
        <div className="w-full flex items-center gap-2">
          <Link href={link} target="_blank" className="">
            <Image
              className="rounded-lg object-top h-32 w-36 md:w-48 md:h-44"
              src={mainImage}
              alt=""
              width={1080}
              height={1080}
            />
          </Link>
          <div className="w-1/2 max-h-32">
            <p>
              <h5 className="mb-2 text-xl line-clamp-2 font-bold tracking-tight text-gray-700 dark:text-gray-100">
                {title}
              </h5>
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-300 line-clamp-3">
              {description}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center mt-4 ">
          <a
            href={link}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full md:w-1/2 px-6 py-3 mb-2 text-lg text-white dark:text-gray-800 font-semibold bg-[#3D1549] dark:bg-[#D7BBAC] rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
          >
            <span>{iconBtn}</span>
            <span>{textBtn}</span>
          </a>
        </div>
      </div>
    </>
  );
}
