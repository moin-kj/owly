import React from "react";
import Image from "next/image";
import FirstArrowLine from "../../assets/images/firstLinearrow.png";
import SecondArrowLine from "../../assets/images/secondlinearrow.png"

const Workflow = () => {
  return (
    <div className="py-20 container px-4 xl:px-0 mx-auto">
      <div className="workflowbgheading w-full  xl:w-[48%] flex justify-center mx-auto">
        <h1 className="text-2xl font-[900] py-2 px-4 tracking-[3px]">
          Our Course Workflow
        </h1>
      </div>

      <div className="circle-main pt-20 flex justify-between flex-col lg:flex-row">
        <div className="firstCircle py-4 lg:py-0 w-full lg:w-[17%] flex flex-col justify-center items-center mt-0 lg:mt-[150px] relative">
          <div className="roundedCircle flex items-center justify-center h-[120px] w-[120px] rounded-full border-dashed border-2 border-[#b2aea8]">
            <p className="border-[3px] border-black bolderTextcicle flex items-center justify-center text-4xl font-black bg-[#ffd018] text-center h-[100px] w-[100px] rounded-full">
              1
            </p>
          </div>

          <h1 className="text-center font-bold text-xl pt-3 pb-2">
            Identify the Task
          </h1>
          <p className="text-center font-bold text-sm">
            Encourage the tutee to initiate and identify the focus of the
            session
          </p>
          <Image className="absolute hidden lg:block right-[-140px] bottom-[30px] h-[61px] w-[85px]" src={FirstArrowLine} alt="arrow"/>
        </div>
        <div className="firstCircle py-4 lg:py-0 w-full lg:w-[17%] flex flex-col justify-center items-center mb-0 lg:mb-[160px] relative">
          <div className="roundedCircle flex items-center justify-center h-[120px] w-[120px] rounded-full border-dashed border-2 border-black">
            <p className="border-[3px] border-[#ffd120] bolderTextcicle flex items-center justify-center text-white  text-4xl font-black bg-black text-center h-[100px] w-[100px] rounded-full">
              2
            </p>
          </div>

          <h1 className="text-center font-bold text-xl pt-3 pb-2">
            Breaking the Task into Parts
          </h1>
          <p className="text-center font-bold text-sm">
            Provide an opportunity for the tutee to break the task into
            manageable pieces.
          </p>
          
          <Image className="absolute hidden lg:block right-[-128px] bottom-[90px] h-[61px] w-[85px]" src={SecondArrowLine} alt="arrow"/>
        </div>
        <div className="firstCircle py-4 lg:py-0 w-full lg:w-[17%] flex flex-col justify-center items-center mt-0 lg:mt-[150px]">
          <div className="roundedCircle flex items-center justify-center h-[120px] w-[120px] rounded-full border-dashed border-2 border-[#b2aea8]">
            <p className="border-[3px] border-black bolderTextcicle flex items-center justify-center text-4xl font-black bg-[#ffd018] text-center h-[100px] w-[100px] rounded-full">
              3
            </p>
          </div>

          <h1 className="text-center font-bold text-xl pt-3 pb-2">
            Setting an Agenda
          </h1>
          <p className="text-center font-bold text-sm">
            Discuss with the tutee the amount of time necessary to complete each
            part of their task.
          </p>
        </div>
        <div className="firstCircle py-4 lg:py-0 w-full lg:w-[17%] flex flex-col justify-center items-center mb-0 lg:mb-[160px] relative">
          <div className="roundedCircle flex items-center justify-center h-[120px] w-[120px] rounded-full border-dashed border-2 border-[#b2aea8]">
            <p className="border-[3px] border-black bolderTextcicle flex items-center justify-center text-4xl font-black bg-[#ffd018] text-center h-[100px] w-[100px] rounded-full">
              4
            </p>
          </div>

          <h1 className="text-center font-bold text-xl pt-3 pb-2">
            Tutee Summary of Thought Process
          </h1>
          <p className="text-center font-bold text-sm">
            {" "}
            Have the tutee summarize the process of addressing this type of
            task.
          </p>
          <Image className="absolute hidden lg:block left-[-98px] bottom-[-111px] h-[61px] w-[85px]" src={FirstArrowLine} alt="arrow"/>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
