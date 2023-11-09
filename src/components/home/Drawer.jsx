import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

export default function Drawer({ open, setOpen, children }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col bg-white pb-12 shadow-xl rounded-r-2xl">
              <div className="overflow-y-auto">
                <div className="p-4 w-full mx-auto mb-6">{children}</div>
              </div>
              <div className="flex flex-shrink-0 justify-end px-4 py-4 bg-white fixed w-full bottom-0 border-t-2 rounded-br-2xl">
                <button
                  onClick={() => setOpen(false)}
                  className="py-2 px-3 border-2 rounded-lg font-semibold"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
