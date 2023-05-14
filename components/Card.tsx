import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  mainImage: string;
  title: string;
  description: string;
  link: string;
  textBtn: string;
  iconBtn?: ReactNode;
};

export function Card({
  mainImage,
  title,
  link,
  description,
  textBtn,
  iconBtn,
}: Props) {
  return (
    <>
      <div className="max-w-sm ml-4 mr-4 mb-4 rounded-lg dark:bg-[#70296e] bg-[#3D1549]">
        <a href="#">
          <Image
            className="rounded-t-lg object-cover h-48 w-96"
            src={mainImage}
            alt=""
            width={1080}
            height={48}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400 line-clamp-3">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-50 bg-[#22c55e] hover:bg-[#168f42] dark:bg-[#22c55e] rounded-lg dark:hover:bg-[#168f42] focus:ring-4 focus:outline-none focus:ring-[#310a2b] dark:focus:ring-[#168f42]"
          >
            {textBtn}
            {iconBtn}
          </a>
        </div>
      </div>
    </>
  );
}
