import { motion } from "framer-motion";
import { useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export default function DarkModeSwitch() {
  const [isOn, setIsOn] = useState(() => {
    if (localStorage.getItem("theme") === "light") {
      return true;
    } else {
      return false;
    }
  });

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  if (isOn) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  if (
    localStorage.theme === "light" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start flex h-[40px] w-[70px] md:h-[50px] md:w-[90px] rounded-[50px] bg-zinc-700 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-100 z-50 ${
        isOn && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[30px] w-[30px] md:h-[40px] md:w-[40px] items-center justify-center rounded-full bg-[#3D1549]"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isOn ? (
            <RiSunFill className="h-6 w-6 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="h-6 w-6 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
