import React from "react";
import vector1 from "../../assets/images/Vector1.png";
import Image from "next/image";
import girlImage from "../../assets/images/Imagegirl.png";
import bookicon from "../../assets/images/bookicon.png";
import Playericon from "../../assets/images/playericon.png";
import Pencelbox from "../../assets/images/pencelbox.png";
import Glob from "../../assets/images/glob.png";
import Degree from "../../assets/images/degreeicon.png";


const Conceptualizing = () => {
  return (
    <div className="relative">
      <div className="Conceptualizing-main flex justify-between pt-24 z-10 container mx-auto px-2 lg:px-0">
        <div className="lefContent w-full lg:w-[60%] xl:w-[40%] ml-0 lg:ml-10 xl:ml-40">
          <div className="headingBg">
            <h1 className="text-lg xl:text-2xl font-[900] text-center py-2 tracking-[1px] md:tracking-[3px]">
              Conceptualizing Courses Easy Way
            </h1>
          </div>
          <p className="text-bold leading-[25px] py-12 text-black text-center lg:text-start">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center w-[49%] border-b-2 border-[#dad7d2] pb-6 lg:pb-12 border-dotted">
              <Image className="w-[35px] lg:w-[47px] h-[25px] lg:h-[37px]" src={vector1} alt="bookvector" />
              <p className="pl-6  font-bold text-[10px] md:text-sm">
                Better Evaluation of<br/> Students
              </p>
            </div>
            <div className="flex items-center w-[49%] border-b-2 border-[#dad7d2] pb-6 lg:pb-12 border-dotted ml-6">
              <Image className="w-[35px] lg:w-[47px] h-[25px] lg:h-[37px]" src={bookicon} alt="bookvector" />
              <p className="pl-6  font-bold text-[10px] md:text-sm">
                Best Strategies for<br/> Struggling Students
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-12">
            <div className="flex items-center  w-[49%] border-b-2 border-[#dad7d2] pb-6 lg:pb-12 border-dotted">
              <Image className="w-[35px] lg:w-[48px] h-[28px] lg:h-[37px]" src={Playericon} alt="bookvector" />
              <p className="pl-6  font-bold text-[10px] md:text-sm">
                A Complete Media<br/> Training Kit
              </p>
            </div>
            <div className="flex items-center  w-[49%] border-b-2 border-[#dad7d2] pb-6 lg:pb-12 border-dotted ml-6">
              <Image className="w-[35px] lg:w-[48px] h-[28px] lg:h-[37px]" src={Pencelbox} alt="bookvector" />
              <p className="pl-6  font-bold text-[10px] md:text-sm">
                Practical Examples<br/> Creative Learning
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 lg:pt-12">
            <div className="flex items-center  w-[49%] pb-6 lg:pb-12">
              <Image className="w-[35px] lg:w-[47px] h-[30px] lg:h-[37px]" src={Glob} alt="bookvector" />
              <p className="pl-6 font-bold text-[10px] md:text-sm">
                Helping all Around the <br/>World with Concepts
              </p>
            </div>
            <div className="flex items-center w-[49%] pb-6 lg:pb-12 ml-6">
              <Image className="w-[35px] lg:w-[47px] h-[30px] lg:h-[37px]" src={Degree} alt="bookvector" />
              <p className="pl-6 font-bold text-[10px] md:text-sm">
                Comprehensive <br/>Study Expertise
              </p>
            </div>
          </div>
        </div>

        <div className="RightContent girlShadowImage absolute hidden xl:block right-0 w-[44%] xl:w-[30%] hidden lg:block">
        <Image className="" src={girlImage} alt="girlImage" />
        </div>
      </div>
    </div>
  );
};

export default Conceptualizing;
