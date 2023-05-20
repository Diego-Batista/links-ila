import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

export function BackButton() {
  return (
    <Link href="/" className="flex gap-1 items-center justify-center text-xl z-50 text-gray-400 dark:text-[#a87b05]">
      <BsArrowLeftShort className="w-8 h-8 md:w-10 md:h-10 text-gray-400 dark:text-[#a87b05]" />
      <span className="hidden md:block">
      voltar para home
      </span>
    </Link>
  );
}
