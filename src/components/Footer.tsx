import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import logo from "../../public/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="w-full h-full bg-ds_black">
        <div className="container mx-auto px-5 py-10 lg:py-[80px] lg:pb-0 lg:px-[100px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] border-b border-solid border-white/5 pb-12">
            <div className="">
              <div className="mb-7 h-[42px] w-[145px]">
                <Image src={logo} alt="Devworks Solutions" />
              </div>
              <p className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%] mb-7">
                Lesires to obtain pain of itself because pain, but occasionally
                circumstances.
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="rounded-full bg-[rgba(105,105,105,0.15)] w-10 h-10 text-white flex justify-center items-center">
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-[rgba(105,105,105,0.15)] w-10 h-10 text-white flex justify-center items-center">
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-[rgba(105,105,105,0.15)] w-10 h-10 text-white flex justify-center items-center">
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-[rgba(105,105,105,0.15)] w-10 h-10 text-white flex justify-center items-center">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
            <div className="">
              <p className="text-[20px] lg:text-[24px] text-white font-bold leading-[120%] mb-7">
                Menu
              </p>
              <ul className="flex flex-col gap-5">
                <Link className="flex items-center gap-4" href="#">
                  <FaPlus className="text-ds_orange" />
                  <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                    Home
                  </span>
                </Link>
                <Link className="flex items-center gap-4" href="#">
                  <FaPlus className="text-ds_orange" />
                  <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                    About
                  </span>
                </Link>
                <Link className="flex items-center gap-4" href="#">
                  <FaPlus className="text-ds_orange" />
                  <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                    Services
                  </span>
                </Link>
                <Link className="flex items-center gap-4" href="#">
                  <FaPlus className="text-ds_orange" />
                  <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                    Contact
                  </span>
                </Link>
              </ul>
            </div>
            <div className="">
              <p className="text-[20px] lg:text-[24px] text-white font-bold leading-[120%] mb-7">
                Services
              </p>
              <ul className="flex flex-col gap-5">
                <Link className="flex items-center gap-4" href="#">
                  <FaPlus className="text-ds_orange" />
                  <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                    Software Development
                  </span>
                </Link>
                <Link className="flex items-center gap-4" href="#">
                  <FaPlus className="text-ds_orange" />
                  <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                    Web Development
                  </span>
                </Link>
                <Link className="flex items-center gap-4" href="#">
                  <FaPlus className="text-ds_orange" />
                  <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                    Networking - CCTV
                  </span>
                </Link>

                <Link className="flex items-center gap-4" href="#">
                  <FaPlus className="text-ds_orange" />
                  <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                    IT Solutions
                  </span>
                </Link>
              </ul>
            </div>
            <div className="">
              <p className="text-[20px] lg:text-[24px] text-white font-bold leading-[120%] mb-7">
                Contact
              </p>
              <p className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%] mb-6">
                88 Broklyn Street, 600 New York, USA
              </p>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#" className="flex items-center gap-3">
                    <FaGlobe className="text-ds_orange" />
                    <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                      www.yourweb.com
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#" className="flex items-center gap-3">
                    <FaEnvelope className="text-ds_orange" />
                    <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                      example@gmail.com
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#" className="flex items-center gap-3">
                    <FaPhone className="text-ds_orange" />
                    <span className="text-white/60 text-[14px] lg:text-base font-normal leading-[150%]">
                      08180746707
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-8 w-full flex justify-center items-center">
            <p className="text-[14px] lg:text-base text-white leading-[150%]">
              Copyright &copy; 2024 - <b>Devworks Solutions</b>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
