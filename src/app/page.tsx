import { ParticlesBackground } from "@/components";
import Image from "next/image";
import software from "../../public/icons/software_dev.svg";
import pseudo from "../../public/icons/pseudo.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    title: "Software Development",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.",
    image: software,
  },
  {
    title: "Networking - CCTV",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.",
    image: software,
  },
  {
    title: "Other IT Related Services",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.",
    image: software,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative w-full h-[90vh] bg-hero bg-center bg-cover rounded-none lg:rounded-[70%/200px] lg:rounded-tr-none lg:rounded-tl-none">
        <div className="overlay rounded-none lg:rounded-[70%/200px] lg:rounded-tr-none lg:rounded-tl-none" />
        <div>
          <ParticlesBackground />
        </div>
        <div className="relative w-full h-full flex justify-center items-center text-center">
          <div className="mx-auto text-center px-[20px] lg:px-0">
            <div className="flex items-center justify-center gap-[5px] mb-[25px]">
              <div className="w-[45px] h-[2px] bg-ds_orange" />
              <p className="uppercase text-[14px] font-bold leading-[17px] text-ds_orange">
                Endless Business Possibilities
              </p>
              <div className="w-[45px] h-[2px] bg-ds_orange" />
            </div>
            <div>
              <h2 className="font-bold text-white text-[45px] lg:text-[75px] w-full lg:w-[70%] mx-auto leading-[1] mb-[30px]">
                Best Solution And Great Business
              </h2>
            </div>
            <div>
              <p className="text-white/75 text-base w-full lg:w-[50%] mx-auto mb-[40px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae illo a assumenda. Animi hic, deleniti expedita ipsum quae
                excepturi officiis vero impedit aliquid, eligendi voluptatibus
                deserunt nobis debitis iste?
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button className="border border-solid border-ds_orange px-6 lg:px-10 py-2 text-base font-medium bg-ds_orange text-white">
                Contact
              </button>
              <button className="border border-solid border-ds_orange px-6 lg:px-10 py-2 text-base font-medium bg-transparent text-white">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="container mx-auto px-5 py-8 lg:p-[100px]">
          <div className="w-full flex flex-col lg:flex-row lg:gap-[80px]">
            <div className="w-full lg:w-1/2"></div>
            <div className="w-full lg:w-1/2">
              <div>
                <div className="flex gap-[5px] items-center justify-start">
                  <p className="uppercase text-[14px] font-bold leading-[17px] text-ds_orange">
                    About Company
                  </p>
                  <div className="w-[45px] h-[2px] bg-ds_orange" />
                </div>
                <h2 className="text-[25px] lg:text-[50px] font-bold text-ds_black leading-[120%] mb-[18px]">
                  The Best Of Product Your Business
                </h2>
                <p className="text-ds_grey text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] mb-[28px]">
                  There are many variations of passages of lorem Ipsum available
                  but the majority have suffered alteration in some form by
                  inject rated humour or randomised this like.
                </p>
                <div className=" flex flex-col gap-[24px] border-l-[3px] border-solid border-ds_orange px-[16px] lg:px-[24px] mb-[50px]">
                  <p className="text-[16px] lg:text-[18px] font-bold text-ds_black leading-[120%] mb-[13px]">
                    Highest quality security, Network uptime, fast output.
                    Unlimited scale and customizing possibilities.
                  </p>
                  <div className="flex gap-[10px]">
                    <p className="text-[16px] lg:text-[18px] font-bold text-ds_black leading-[120%]">
                      Adegbola Adesoji
                    </p>
                    <p className="text-ds_grey text-[14px] lg:text-[16px] leading-[120%]">
                      CEO
                    </p>
                  </div>
                </div>
                <button className="border-none bg-ds_orange text-white text-[14px] font-bold px-8 py-4">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F6F5FA] w-full">
        <div className="container mx-auto px-5 py-8 lg:p-[100px]">
          <div className="w-full">
            <div className="flex items-center justify-center gap-[5px] mb-[25px]">
              <div className="w-[45px] h-[2px] bg-ds_orange" />
              <p className="uppercase text-[14px] font-bold leading-[17px] text-ds_orange">
                Services
              </p>
              <div className="w-[45px] h-[2px] bg-ds_orange" />
            </div>
            <div className="w-full lg:w-[700px] mx-auto">
              <h2 className="text-[25px] lg:text-[50px] font-bold text-ds_black leading-[120%] mb-[20px] lg:mb-[50px] text-center">
                We Offer Different Types Of IT Solution Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {services.map((service, i) => (
                <div
                  className="relative group w-full h-[250px] cursor-pointer"
                  key={i}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-25 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative  p-[20px] lg:p-[40px] bg-white w-full h-[250px] ring-1 ring-gray-900/5 leading-none flex gap-[25px]">
                    <div>
                      <div className="relative w-[35px] h-[35px]  text-slate-800 group-hover:text-indigo-400 transition duration-200">
                        <Image src={service.image} alt="" className="" />
                      </div>
                    </div>

                    <div className="">
                      <h2 className="text-ds_black text-[18px] lg:text-[24px] mb-[14px] font-bold">
                        {service.title}
                      </h2>
                      <p className="text-ds_grey text-[14px] lg:text-base leading-[150%] mb-[40px] font-normal">
                        {service.description}
                      </p>
                      <Link
                        href="#"
                        className="flex items-center gap-[14px] text-[14px] lg:text-base font-bold text-ds_black">
                        Read More
                        <FaArrowRightLong className="text-ds_orange" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
