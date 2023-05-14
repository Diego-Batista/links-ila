import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeSwitch from "./DarkModeSwitch";

export function Layout() {
    const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <div className='absolute top-2 right-2 z-50 overflow-hidden'>
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
    )
}