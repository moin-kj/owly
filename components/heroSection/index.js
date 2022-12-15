import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import BlackheroUser from "../../assets/images/blackuser.png";
import commneticon from "../../assets/images/CommentIcon.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero-bg min-h-[286px] xl:min-h-[800px] relative ">
        <div className="container mx-auto pt-[100px] md:pt-[148px] lg:pt-[50px] px-3 md:px-0">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <div className="flex items-center">
                  <ul className="w-[34%] md:w-[14%] xl:w-auto">
                    <li className="font-[900] text-lg md:text-xl border-b-2 border-white mb-3 w-fit">
                      1. About Me
                    </li>
                    <li className="font-[900] text-sm border-b-2 border-white mb-3 w-fit">
                      2. Bio
                    </li>
                    <li className="font-[900] text-sm border-b-2 border-white mb-3 w-fit">
                      3. Skills
                    </li>
                  </ul>
                  <div className="w-[30%] hidden  lg:block sliderImage h-auto md:h-[650px] xl:h-[755px] ml-0 md:ml-[187px] lg:ml-[40px] xl:ml-[106] xl:ml-[187px] pt-[65px] lg:pt-[170px] xl:pt-[65px]  object-fill">
                    <Image
                      className="w-[100%] h-fit "
                      src={BlackheroUser}
                      alt="imageslide 2"
                    />
                  </div>
                  <div className="sliderContent pl-8 md:pl-[130px] lg:pl-[81px] flex flex-col justify-start md:justify-center lg:justify-start items-start md:items-center lg:items-start">
                    <h1 className="font-[900] text-lg md:text-5xl text-start md:text-center lg:text-start">
                      I'm{" "}
                      <span className="border-b-[2.5px] border-white text-white">
                        John Doe
                      </span>
                    </h1>
                    <h2 className="font-[900] text-sm md:text-xl py-2 md:py-6 text-start md:text-center lg:text-start">
                      Dictating the words of wisdom as we interpret
                    </h2>

                    <button className="ease-in-out w-fit duration-300 hover:border-white py-[5px] md:py-[10px] border-black border-2 px-4 md:px-8 bg-white rounded-xl text-[15px] tracking-[1px] font-[900]">
                      Let's Learn
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex items-center justify-between md:justify-start">
                  <ul className="w-[34%] md:w-[14%] xl:w-auto">
                    <li className="font-[900] text-sm border-b-2 border-white mb-3 w-fit">
                      1. About Me
                    </li>
                    <li className="font-[900] text-lg md:text-xl border-b-2 border-white mb-3 w-fit">
                      2. Bio
                    </li>
                    <li className="font-[900] text-sm border-b-2 border-white mb-3 w-fit">
                      3. Skills
                    </li>
                  </ul>
                  <div className="w-[30%] sliderImage hidden lg:block h-auto md:h-[650px] xl:h-[755px] ml-0 md:ml-[187px] lg:ml-[40px] xl:ml-[106] xl:ml-[187px] pt-[65px] lg:pt-[170px] xl:pt-[65px]  object-fill">
                    <Image
                      className="w-[100%] h-fit "
                      src={BlackheroUser}
                      alt="imageslide 2"
                    />
                  </div>
                  <div className="sliderContent pl-8 md:pl-[130px] lg:pl-[81px] flex flex-col justify-start md:justify-center lg:justify-start items-start md:items-center lg:items-start">
                    <h1 className="font-[900] text-lg md:text-5xl text-start md:text-center lg:text-start">
                      I'm{" "}
                      <span className="border-b-[2.5px] border-white text-white">
                        John div
                      </span>
                    </h1>
                    <h2 className="font-[900] text-sm md:text-xl py-2 md:py-6 text-start md:text-center lg:text-start">
                      Dictating the words of wisdom as we interpret
                    </h2>

                    <button className="ease-in-out w-fit duration-300 hover:border-white py-[5px]  md:py-[10px] border-black border-2 px-4 md:px-8 bg-white rounded-xl text-[15px] tracking-[1px] font-[900]">
                      Let's Learn
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex items-center justify-between md:justify-start">
                  <ul className="w-[34%] md:w-[14%] xl:w-auto">
                    <li className="font-[900] text-sm border-b-2 border-white mb-3 w-fit">
                      1. About Me
                    </li>
                    <li className="font-[900] text-sm border-b-2 border-white mb-3 w-fit">
                      2. Bio
                    </li>
                    <li className="font-[900] text-lg md:text-xl border-b-2 border-white mb-3 w-fit">
                      3. Skills
                    </li>
                  </ul>
                  <div className="w-[30%] sliderImage hidden lg:block h-auto md:h-[650px] xl:h-[755px] lg:h-auto xl:h-[755px] ml-0 md:ml-[187px] lg:ml-[40px] xl:ml-[106] xl:ml-[187px] pt-[65px] lg:pt-[170px] xl:pt-[65px]  object-fill">
                    <Image
                      className="w-[100%] h-fit "
                      src={BlackheroUser}
                      alt="imageslide 2"
                    />
                  </div>
                  <div className="sliderContent pl-8 md:pl-[130px] lg:pl-[81px] flex flex-col justify-start md:justify-center lg:justify-start items-start md:items-center lg:items-start">
                    <h1 className="font-[900] text-lg md:text-5xl text-start md:text-center lg:text-start">
                      I'm{" "}
                      <span className="border-b-[2.5px] border-white text-white">
                        Johnsen
                      </span>
                    </h1>
                    <h2 className="font-[900] text-sm md:text-xl py-2 md:py-6 text-start md:text-center lg:text-start">
                      Dictating the words of wisdom as we interpret
                    </h2>

                    <button className="ease-in-out w-fit duration-300 hover:border-white py-[5px] md:py-[10px] border-black border-2 px-4 md:px-8 bg-white rounded-xl text-[15px] tracking-[1px] font-[900]">
                      Let's Learn
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="TalkToMe hidden md:block cursor-pointer absolute right-0 W-[40px] flex items-center bottom-[-23px]">
          <h1 className="textRotait text-xl font-[900] flex items-center pt-[36px] ">
            <Image
              className="w-[20px] h-[20px] mr-4"
              src={commneticon}
              alt="commneticon"
            />
            Talk to me
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
