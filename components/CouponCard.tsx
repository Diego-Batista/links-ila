import Link from "next/link";
import { useEffect, useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { copyToClipboard } from "../helpers/copyToClipboard";
import { Icon } from "./Icon";

type Props = {
  url: string;
  discount: string;
  site: string;
  coupon: string;
};

const TIMEOUT_MS = 5000;

export function CouponCard({ url, discount, site, coupon }: Props) {
  const [hasCopy, setHasCopy] = useState(false);

  useEffect(() => {
    setTimeout(setHasCopy, TIMEOUT_MS, false);
  }, [hasCopy]);

  function handleCopy() {
    copyToClipboard(coupon)?.then(() => {
      setHasCopy(true);
    });
  }

  const iconId = hasCopy ? "save" : "copy";

  return (
    <div className="w-full flex flex-col items-center justify-center border-2 border-[#a87b05] border-dashed rounded-xl p-2">
      <Link target="_blank" href={url}>
        <span className="pr-2 text-lg text-white  font-semibold">{site}</span>
      </Link>
      <button
        onClick={handleCopy}
        className="flex items-center text-white gap-2 mt-2 bg-[#a87b05] p-2 rounded-xl transition-all duration-300 ease"
      >
        <div className="flex items-center text-xs bg-[#d3aa44] py-1 px-2 rounded-lg">
          <CiDiscount1 size={24} />
          {discount}
        </div>
        <p className="uppercase">{coupon}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="relative group transition-all duration-300 ease"
        >
          {hasCopy && (
            <div className="w-max bg-[#d3aa44] text-white text-center text-xs rounded-lg py-1 px-2 absolute left-5 -top-4 z-50 transition-all duration-300 ease">
              Copiado!
            </div>
          )}
          <div className="group-hover:opacity-100 opacity-0 w-max bg-[#d3aa44] text-white text-center text-xs rounded-lg py-1 px-2 absolute left-5 -top-4 z-50 transition-all duration-300 ease">
            Copiar
          </div>
          <Icon id={iconId} />
        </button>
      </button>
    </div>
  );
}
