import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BackButton } from "./BackButton";
import DarkModeSwitch from "./DarkModeSwitch";

export function Layout() {
  const [mounted, setMounted] = useState(false);

  const router = useRouter()

  const actual = router.pathname

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full flex items-center justify-center bg-transparent z-50 fixed">
      <div className={`w-full md:w-[896px]  flex items-center ${actual === '/' ? 'justify-end': 'justify-between' } p-2 ]`}>
        {actual !== '/' &&
            <BackButton />
        }

        <div className="">
          <motion.div
            className="box"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <DarkModeSwitch />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
