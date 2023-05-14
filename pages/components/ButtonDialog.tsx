import { clsx } from "clsx";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className"> & {};

const ButtonDialog = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={clsx(
        "inline-flex select-none w-full items-center justify-center rounded-md px-4 py-3 text-lg font-medium",
        "bg-green-500 text-gray-100 hover:bg-gray-50 dark:bg-green-500 dark:text-gray-100 dark:hover:bg-gray-900",
        "hover:bg-gray-50",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
        // Register all radix states
        "group",
        "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
        "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
        "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
      )}
    >
      {children}
    </button>
  )
);

ButtonDialog.displayName = "ButtonDialog";
export default ButtonDialog;