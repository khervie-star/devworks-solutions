"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { GoDotFill } from "react-icons/go";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const scrollThreshold = 200;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event

    const scroll = (event: any) => {
      const { scrollY } = window;
      setIsScrolled(scrollY >= scrollThreshold);
    };

    document.addEventListener("scroll", scroll, options);

    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll);
  }, []);

  console.log(isScrolled);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]"
          : "bg-transparent"
      } fixed w-full z-50 text-white `}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Devworks Solutions</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group
          className={`hidden lg:flex lg:gap-x-12 ${
            isScrolled ? "text-ds_orange" : "text-white"
          }`}>
          <a
            href="#"
            className="text-base font-semibold leading-6 flex items-center gap-2">
            <GoDotFill />
            Home
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-6 flex items-center gap-2">
            <GoDotFill />
            About
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-6 flex items-center gap-2">
            <GoDotFill />
            Services
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-6 flex items-center gap-2">
            <GoDotFill />
            Contact
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 base:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2">
                  <GoDotFill className="text-ds_orange" />
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2">
                  <GoDotFill className="text-ds_orange" />
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2">
                  <GoDotFill className="text-ds_orange" />
                  Services
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2">
                  <GoDotFill className="text-ds_orange" />
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
