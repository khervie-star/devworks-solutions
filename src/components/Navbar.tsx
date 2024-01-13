"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { GoDotFill } from "react-icons/go";
import logo from "../../public/logo_white.png";
import logo_dark from "../../public/logo.png";

import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";

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

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  console.log(isScrolled);

  return (
    <header
      className={`${
        isScrolled ? "bg-[rgba(0,0,0,0.1)] backdrop-blur" : "bg-transparent"
      } fixed w-full z-50 text-white `}>
      <nav
        className="mx-auto flex w-full container items-center justify-between px-5 py-3 lg:px-[100px]"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Devworks Solutions</span>
            <div className="h-auto w-[120px]">
              <Image src={logo} alt="Devworks Solutions" />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <HiMenuAlt3
              className="h-8 w-8 font-bold text-ds_orange"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group
          className={`hidden lg:flex lg:gap-x-12 ${
            isScrolled ? "text-ds_orange" : "text-white"
          }`}>
          <Link
            href="#"
            className="text-base font-semibold leading-6 flex items-center gap-2">
            <GoDotFill />
            Home
          </Link>
          <Link
            href="#"
            className="text-base font-semibold leading-6 flex items-center gap-2">
            <GoDotFill />
            About
          </Link>
          <Link
            href="#"
            className="text-base font-semibold leading-6 flex items-center gap-2">
            <GoDotFill />
            Services
          </Link>
          <Link
            href="#"
            className="text-base font-semibold leading-6 flex items-center gap-2">
            <GoDotFill />
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-[9999]" />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 base:max-w-sm sm:ring-1 sm:ring-gray-900/10 z-[9999]">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Devworks Solutions</span>
              <div className="h-auto w-[120px]">
                <Image src={logo_dark} alt="Devworks Solutions" />
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <FaXmark className="h-8 w-8 text-ds_orange" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={handleClose}
                  href="/"
                  className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2">
                  <GoDotFill className="text-ds_orange" />
                  Home
                </Link>
                <Link
                  onClick={handleClose}
                  href="#"
                  className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2">
                  <GoDotFill className="text-ds_orange" />
                  About
                </Link>
                <Link
                  onClick={handleClose}
                  href="#"
                  className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2">
                  <GoDotFill className="text-ds_orange" />
                  Services
                </Link>
              </div>
              <div className="py-6">
                <Link
                  onClick={handleClose}
                  href="#"
                  className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2">
                  <GoDotFill className="text-ds_orange" />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
