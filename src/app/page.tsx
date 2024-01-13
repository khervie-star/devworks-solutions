import { ParticlesBackground } from "@/components";
import Image from "next/image";
import pseudo from "../../public/icons/pseudo.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import user_1 from "../../public/images/user_1.jpeg";
import user_2 from "../../public/images/user_2.jpeg";
import user_3 from "../../public/images/user_3.jpeg";

import software_dev_1 from "../../public/images/software_dev.jpeg";
import software_dev_2 from "../../public/images/software_dev_2.jpeg";
import networking from "../../public/images/networking.jpeg";

import team_1 from "../../public/images/user_1.jpeg";
import team_2 from "../../public/images/user_2.jpeg";
import team_3 from "../../public/images/user_3.jpeg";
import team_4 from "../../public/images/user_1.jpeg";
import { services, team, feedback } from "@/lib";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative w-full h-[90vh] bg-hero bg-center bg-cover rounded-none lg:rounded-[70%/200px] lg:rounded-tr-none lg:rounded-tl-none">
        <div className="overlay rounded-none lg:rounded-[70%/200px] lg:rounded-tr-none lg:rounded-tl-none" />
        <div className="absolute w-full h-full">
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
          <div className="w-full flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[300px] lg:h-[500px] flex gap-[24px] items-center">
                <div className="flex-1 flex flex-col gap-[20px] h-full">
                  <div className="flex-1 w-full h-full">
                    <Image
                      src={software_dev_1}
                      alt=""
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 w-full h-full">
                    <Image
                      src={software_dev_2}
                      alt=""
                      className="h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 h-[95%] gap-[20px]">
                  <Image
                    src={networking}
                    alt=""
                    className="h-full object-cover"
                  />
                </div>
              </div>
            </div>
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

      <section className="bg-white w-full">
        <div className="container mx-auto px-5 py-8 lg:p-[100px]">
          <div className="w-full">
            <div className="flex items-center justify-center gap-[5px] mb-[25px]">
              <div className="w-[45px] h-[2px] bg-ds_orange" />
              <p className="uppercase text-[14px] font-bold leading-[17px] text-ds_orange">
                Team
              </p>
              <div className="w-[45px] h-[2px] bg-ds_orange" />
            </div>
            <div className="w-full lg:w-[700px] mx-auto">
              <h2 className="text-[25px] lg:text-[50px] font-bold text-ds_black leading-[120%] mb-[20px] lg:mb-[50px] text-center">
                Our team comprises of:
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {team.map((team_member, i) => (
                <div
                  className="relative bg-white w-full h-[400px] flex flex-col shadow-[0px_10px_60px_0px_rgba(22,28,45,0.06)]"
                  key={i}>
                  <div className="h-3/4">
                    <div className="relative w-full h-full text-slate-800 group-hover:text-indigo-400 transition duration-200">
                      <Image
                        src={team_member.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="h-1/4 w-full text-center flex justify-center items-center">
                    <div>
                      <h2 className="text-ds_black text-base lg:text-[20px] mb-[4px] font-bold leading-[120%]">
                        {team_member.name}
                      </h2>
                      <p className="text-ds_orange text-[14px] lg:text-base leading-[120%] font-normal">
                        {team_member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F5FA] w-full">
        <div className="container mx-auto px-5 py-8 lg:p-[100px]">
          <div className="w-full">
            <div className="flex items-center justify-start gap-[5px] mb-[25px]">
              <div className="w-[45px] h-[2px] bg-ds_orange" />
              <p className="uppercase text-[14px] font-bold leading-[17px] text-ds_orange">
                Projects
              </p>
              <div className="w-[45px] h-[2px] bg-ds_orange" />
            </div>
            <div className="w-full flex justify-between mx-auto">
              <h2 className="text-[25px] lg:text-[50px] font-bold text-ds_black leading-[120%] mb-[20px] lg:mb-[50px] text-center">
                Projects Portfolio
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

      <section className="bg-white w-full">
        <div className="container mx-auto px-5 py-8 lg:p-[100px]">
          <div className="w-full">
            <div className="flex items-center justify-center gap-[5px] mb-[25px]">
              <div className="w-[45px] h-[2px] bg-ds_orange" />
              <p className="uppercase text-[14px] font-bold leading-[17px] text-ds_orange">
                Feedback
              </p>
              <div className="w-[45px] h-[2px] bg-ds_orange" />
            </div>
            <div className="w-full lg:w-[700px] mx-auto">
              <h2 className="text-[25px] lg:text-[50px] font-bold text-ds_black leading-[120%] mb-[20px] lg:mb-[50px] text-center">
                What People are saying
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {feedback.map((feedback_item, i) => (
                <div className="relative w-full cursor-pointer" key={i}>
                  <div className="relative p-[20px] lg:p-[40px] bg-white border border-solid border-[rgba(0,0,0,0.10)] w-full flex flex-col gap-6 lg:gap-8">
                    <div className="flex gap-[30px] items-center justify-start">
                      <div className="relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]  text-slate-800 group-hover:text-indigo-400 transition duration-200">
                        <Image
                          src={feedback_item.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-ds_black text-base lg:text-[20px] mb-[2px] font-bold leading-[120%]">
                          {feedback_item.name}
                        </h2>
                        <p className="text-ds_grey text-[14px] lg:text-base mb-[8px] font-bold leading-[150%]">
                          {feedback_item.role}
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <p className="text-ds_grey text-[14px] lg:text-base leading-[150%] font-normal">
                        {feedback_item.feedback}
                      </p>
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
