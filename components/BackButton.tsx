import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

export function BackButton() {
  return (
    <Link href="/" className="group flex items-center justify-center text-xl z-50 text-gray-400 dark:text-[#a87b05]">
      <BsArrowLeftShort className="group-hover:text-gray-300 w-8 h-8 md:w-9 md:h-9 text-gray-400 dark:text-[#a87b05] p-0" />
      <span className="hidden md:block font-medium group-hover:text-gray-300 leading-none">
        Voltar para home
      </span>
    </Link>
  );
}
