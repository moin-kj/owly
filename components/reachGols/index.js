import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import Image from "next/image";
import curveyellow from "../../assets/images/curveyellow.png";
import Award1 from "../../assets/images/Award.png";
import Award2 from "../../assets/images/trofeaward.png";
import Award3 from "../../assets/images/medelaward.png";
import Werth1 from "../../assets/images/Wreath1.png";
import Werth2 from "../../assets/images/Wreath2.png";
import LeftArrow from "../../assets/images/LeftArrow.png";
import rightArrow from "../../assets/images/RightArrow.png";

const ReachGols = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="z-40 relative mt-[38px]">
      <div className="absolute right-0 w-[457px] h-[400px] top-[-246px] hidden lg:block">
        <Image className="w-full " src={curveyellow} alt="corveimage" />
      </div>
      <div className="ReachGolsBG ">
        <div className="container mx-auto flex justify-between flex-col xl:flex-row pt-24">
          <div className="leftContent w-full xl:w-[48%] xl:pl-16 px-4 xl:px-0">
            <div className="reachheadingbg w-full xl:w-[50%]">
              <h1 className="text-2xl font-[900] py-2 px-4 tracking-[3px] text-center xl:text-start">
                Web Reach our Gols
              </h1>
            </div>

            <h1 className="text-xl font-[900] tracking-[2px] pt-10 pb-2 text-center xl:text-start">
              We Have the Best Portfolios
            </h1>
            <p className="text-[13px] font-bold text-center xl:text-start">
              Accrediated Tutoring Services
            </p>
            <p className="py-8 font-[600] text-[16px] pr-0 xl:pr-20 text-center xl:text-start">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            <div className="flex justify-between w-full xl:w-[88%] pt-6">
              <div className="awards flex flex-col items-center w-[28%] xl:w-[22%]">
                <Image
                  className="w-[35px] xl:w-[40px] h-[60px] xl:h-[80px] "
                  src={Award1}
                  alt="corveimage"
                />
                <h1 className="text-center font-bold text-[13px] xl:text-lg">Summer Joinee</h1>
                <p className="text-center text-[12px] xl:text-sm">
                  Best Creative <br />
                  Excellence Award
                </p>
              </div>
              <div className="awards flex flex-col items-center w-[28%] xl:w-[22%]">
                <Image
                  className="w-[72px] xl:w-[40px] h-[60px] xl:h-[80px] "
                  src={Award3}
                  alt="corveimage"
                />
                <h1 className="text-center font-bold text-[13px] xl:text-lg">2018</h1>
                <p className="text-center text-[12px] xl:text-sm">
                  Top Achiever
                  <br />
                  Credit Awards
                </p>
              </div>
              <div className="awards flex flex-col items-center w-[28%] xl:w-[22%]">
                <Image
                  className="w-[35px] xl:w-[40px] h-[60px] xl:h-[80px] "
                  src={Award2}
                  alt="corveimage"
                />
                <h1 className="text-center font-bold text-[13px] xl:text-lg">High School</h1>
                <p className="text-center text-[12px] xl:text-sm">
                  Wisdom Valley
                  <br />
                  Awards{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="rightContent w-full xl:w-[38%] xl:pr-16 pt-10 xl:pt-0 hidden lg:block">
            <div className="flex items-center justify-center w-full xl:w-[70%] mx-auto pb-12">
              <Image
                className="w-[35px] lg:w-[40px] h-[60px] lg:h-[80px]"
                src={Werth1}
                alt="corveimage"
              />
              <div className="text-center">
                <h1 className="text-[14px] xl:text-xl font-[900] tracking-[2px] pb-2">
                  Top Ranked Students are from here
                </h1>
                <p className="font-bold text-[12px] xl:text-sm">
                  Students we tutored excelled the best in Exams
                </p>
              </div>
              <Image
                className="w-[35px] lg:w-[40px] h-[60px] lg:h-[80px] "
                src={Werth2}
                alt="corveimage"
              />
            </div>

            <div className="slider flex  md:justify-center">
              <div className="main-slider relative">
                <Carousel
                  containerProps={{
                    style: {
                      width: "100%",
                      justifyContent: "space-between",
                    },
                  }}
                  activeSlideIndex={activeSlide}
                  onRequestChange={setActiveSlide}
                  forwardBtnProps={{
                    children: <Image className="rightarrowslider" src={rightArrow} alt="arrow"/>,
                    style: {
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      alignSelf: "center",
                      left: "278px",
                      bottom: "-80px",
                    },
                  }}
                  backwardBtnProps={{
                    children: <Image className="leftarrowslider" src={LeftArrow} alt="arrow"/>,
                    style: {
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      alignSelf: "center",
                    left: "220px",
                    bottom: "-80px",
                    },
                  }}
                  dotsNav={{
                    show: false,
                    itemBtnProps: {
                      style: {
                        height: 16,
                        width: 16,
                        borderRadius: "50%",
                        border: 0,
                      },
                    },
                    activeItemBtnProps: {
                      style: {
                        height: 16,
                        width: 16,
                        borderRadius: "50%",
                        border: 0,
                        background: "black",
                      },
                    },
                  }}
                  itemsToShow={2}
                  speed={400}
                >
                  {Array.from({ length: 10 }).map((item, index) => (
                    <div key={index}>
                      <div className="carouselBox w-[250px] p-4 bg-white rounded-lg mr-4">
                        <div className="h-[250px] bg-[#ffd018] rounded-lg"></div>
                        <div className="text-center">
                          <h1 className="font-bold text-lg">Nathan Drake</h1>
                          <p className="text-sm">
                            1<sup>st</sup> RanK
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  
                </Carousel>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachGols;
