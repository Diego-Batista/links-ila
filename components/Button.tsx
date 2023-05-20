import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  route?: string;
  icon?: ReactNode;
  target?: string;
}

export function Button({ label, route, icon, target }: ButtonProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full md:min-w-4xl">
        <Link
          target={target}
          href={`${route}`}
          className="flex items-center justify-center w-full px-6 py-4 gap-2 mb-6 text-lg md:text-2xl text-gray-50 font-bold dark:text-[#3D1549]  bg-gradient-to-tr from-[#3D1549] to-[#831ba3] dark:from-[#D7BBAC] dark:to-[#856a5c] shadow-sm shadow-zinc-800 rounded-xl hover:brightness-125 transition-all duration-300 ease"
        >
          <span>{icon}</span>
          <span>{label}</span>
        </Link>
      </div>
    </div>
  );
}
