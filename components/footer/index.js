import React from "react";
import Image from "next/image";
import Footerlogo from "../../assets/images/footerlogo.png";
import Location from "../../assets/images/location.png";
import Callicon from "../../assets/images/PhoneIcon.png";
import { FaFacebookF , FaGoogle , FaTwitter , FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto flex justify-between flex-col lg:flex-row border-t-2 border-gray pt-8 pb-8">
        <div className="logoContent flex justify-center lg:justify-start flex-col items-center lg:items-start w-full lg:w-[15%]">
          <Image
            className="w-[174px] h-[53px]"
            src={Footerlogo}
            alt="footerlogo"
          />
          <p className="font-[500] text-sm pt-3 text-center lg:text-start">
            Discuss with the tutee the amount of time necessary to complete each
            part of their task.
          </p>
        </div>

        <div className="usefullLinks flex flex-col justify-center lg:justify-start items-center lg:items-start full lg:w-[12%] pt-8 lg:pt-0">
          <h1 className="text-lg font-bold">Useful Links</h1>
          <ul className="text-sm font-bold pt-6">
            <li className="cursor-pointer mb-2">Free Consultation </li>
            <li className="cursor-pointer mb-2">Visit Us </li>
            <li className="cursor-pointer mb-2">Chat with us</li>
          </ul>
        </div>
        <div className="contact flex flex-col justify-center lg:justify-start items-center lg:items-start full lg:w-[12%] pt-8 lg:pt-0">
          <h1 className="text-lg font-bold">Contact</h1>
          <div className="text-sm font-bold pt-6">
            <li className="cursor-pointer mb-2 flex items-center justify-center lg:justify-start"><Image className="w-[10px] h-[10px] mr-2" src={Callicon} alt="Callicon"/>444.332.1167</li>
            <li className="cursor-pointer mb-2 flex"><Image className="w-[10px] h-[10px] mr-2" src={Location} alt="location"/>7461 Old Harvard Rd.Middleburg, FL 32068</li>
          </div>
        </div>
        <div className="contact flex flex-col justify-center lg:justify-start items-center lg:items-start full lg:w-[15%] pt-8 lg:pt-0">
          <h1 className="text-lg font-bold">Follow us</h1>
         <div className="socialicon flex justify-between pt-6">
       
                <FaTwitter className="border-2 border-black rounded-full h-[30px] w-[30px] p-[5px] mr-3 cursor-pointer hover:text-[#ffd120] hover:bg-black ease-in-out duration-300"/>
                <FaGoogle  className="border-2 border-black rounded-full h-[30px] w-[30px] p-[5px] mr-3 cursor-pointer hover:text-[#ffd120] hover:bg-black ease-in-out duration-300"/>
                <FaYoutube className="border-2 border-black rounded-full h-[30px] w-[30px] p-[5px] mr-3 cursor-pointer hover:text-[#ffd120] hover:bg-black ease-in-out duration-300"/>
                <FaFacebookF className="border-2 border-black rounded-full h-[30px] w-[30px] p-[5px] cursor-pointer hover:text-[#ffd120] hover:bg-black ease-in-out duration-300"/>
       
         </div>
        </div>

    
      </div>
      <div className="copyRight flex justify-between container mx-auto py-4 border-t-2 border-dashed border-black px-4 lg:px-0">
            <p className="text-sm font-[500]">Copyright © 2018. DesignThemes</p>
            <p className="text-sm font-[500]">Terms | Privacy Policy</p>
        </div>
    </div>
  );
};

export default Footer;
