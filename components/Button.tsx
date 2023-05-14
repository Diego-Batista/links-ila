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
          className="flex items-center justify-center w-full px-6 py-4 gap-2 mb-6 text-lg text-white font-medium dark:text-[#3D1549] bg-[#3D1549] dark:bg-[#D7BBAC] shadow-md shadow-zinc-800 rounded-xl hover:brightness-125 transition-all duration-300 ease"
        >
          <span>{icon}</span>
          <span>{label}</span>
        </Link>
      </div>
    </div>
  );
}
