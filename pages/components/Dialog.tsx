import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, Fragment, useState } from "react";
import ButtonDialog from "./ButtonDialog";



interface DialogProps {
    description?: string
    title?: string
}

const Dialog = ({ description, title }: DialogProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  let [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

 function handleForm(e: FormEvent) {  
  e.preventDefault()
    router.push(
      `https://api.whatsapp.com/send?phone=5571993009032&text=Olá meu me chamo ${name} gostaria de agendar uma consulta, ${title} meu e-mail: ${email} e telefone para contato ${phone}`
    );
 }

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <ButtonDialog>Agendar Consulta</ButtonDialog>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-white dark:bg-[#3D1549]",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <DialogPrimitive.Title className="text-xl font-medium text-gray-900 dark:text-gray-100">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                {description}
              </DialogPrimitive.Description>
              <form className="mt-2 space-y-2" onSubmit={handleForm}>
                <fieldset>
                  {/* <legend>Choose your favorite monster</legend> */}
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-100"
                  >
                    Nome completo
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Jhondoe"
                    autoComplete="given-name"
                    className={clsx(
                      "mt-1 p-2.5 block w-full rounded bg-gray-50 dark:bg-gray-50",
                      "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-700 dark:placeholder:text-gray-600",
                      "border border-gray-400 focus-visible:border-transparent dark:bg-gray-800",
                      "focus:outline-none focus-visible:ring focus-visible:ring-[#22c55e] dark:focus-visible:ring-[#22c55e] focus-visible:ring-opacity-75"
                    )}
                  />
                </fieldset>
                <fieldset>
                  {/* <legend>Choose your favorite monster</legend> */}
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-100"
                  >
                    Seu melhor e-mail
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Jhondoe@gmail.com"
                    autoComplete="given-name"
                    className={clsx(
                      "mt-1 p-2.5 block w-full rounded bg-gray-50 dark:bg-gray-50",
                      "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-700 dark:placeholder:text-gray-600",
                      "border border-gray-400 focus-visible:border-transparent dark:bg-gray-800",
                      "focus:outline-none focus-visible:ring focus-visible:ring-[#22c55e] dark:focus-visible:ring-[#22c55e] focus-visible:ring-opacity-75"
                    )}
                  />
                </fieldset>
                <fieldset>
                  {/* <legend>Choose your favorite monster</legend> */}
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 dark:text-gray-100"
                  >
                    Numero celular
                  </label>
                  <input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="(71) 9 9999-9999"
                    autoComplete="given-name"
                    className={clsx(
                      "mt-1 p-2.5 block w-full rounded bg-gray-50 dark:bg-gray-50",
                      "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-700 dark:placeholder:text-gray-600",
                      "border border-gray-400 focus-visible:border-transparent dark:bg-gray-800",
                      "focus:outline-none focus-visible:ring focus-visible:ring-[#22c55e] dark:focus-visible:ring-[#22c55e] focus-visible:ring-opacity-75"
                    )}
                  />
                </fieldset>
                <div className="mt-4 flex justify-end">
                  <button type="submit" className={clsx(
                      "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                      "bg-[#3D1549] text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                      "border border-transparent",
                      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    )}>Confirmar</button>
                </div>
              </form>

            

              <DialogPrimitive.Close
                className={clsx(
                  "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Dialog };