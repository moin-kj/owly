import React from "react";
import Image from "next/image";
import LogoImage from "../../assets/images/Logo.png";
import PhoneIcon from '../../assets/images/PhoneIcon.png';
import { slide as Menu } from "react-burger-menu";

const Header = (props) => {
    
    return (

        <>
        <div className="block lg:hidden mobileMenu">
          
        <Menu {...props}>
        <ul className="flex text-black">
                        <li className="font-bold text-[18px] cursor-pointer  py-6  px-[14px] ease-out hover:translate-y-1 transition-all">Home</li>
                        <li className="font-bold text-[18px] cursor-pointer  py-6  px-[14px] ease-out hover:translate-y-1 transition-all">About</li>
                        <li className="font-bold text-[18px] cursor-pointer  py-6  px-[14px] ease-out hover:translate-y-1 transition-all">Expertise</li>
                        <li className="font-bold text-[18px] cursor-pointer  py-6  px-[14px] ease-out hover:translate-y-1 transition-all">Service</li>
                        <li className="font-bold text-[18px] cursor-pointer  py-6  px-[14px] ease-out hover:translate-y-1 transition-all">Timeline</li>
                        <li className="font-bold text-[18px] cursor-pointer  py-6  px-[14px] ease-out hover:translate-y-1 transition-all">Awards</li>
                        <li className="font-bold text-[18px] cursor-pointer  py-6  px-[14px] ease-out hover:translate-y-1 transition-all">Media</li>
                        <li className="font-bold text-[18px] cursor-pointer  py-6  px-[14px] ease-out hover:translate-y-1 transition-all">Contact</li>
                    </ul>
    </Menu>
    </div>
        <div className="hidden lg:block">

            <div className=" header-main flex justify-between items-center absolute top-0 left-[25px] right-0 z-[99999999]">
            <div className="headerLeft cursor-pointer">
                <Image className="w-[117px] h-[35px] mr-2" src={LogoImage} alt="LogoImageheader"/>
            </div>
            <div className="headerRight flex items-center">
              
                    <ul className="flex text-black">
                        <li className="font-bold text-[14px] cursor-pointer mr-2 xl:mr-6 bg-white py-[2px]  px-[14px] rounded-xl hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">Home</li>
                        <li className="font-bold text-[14px] cursor-pointer mr-2 xl:mr-6 hover:bg-white py-[2px] px-[14px] rounded-xl hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">About</li>
                        <li className="font-bold text-[14px] cursor-pointer mr-2 xl:mr-6 hover:bg-white py-[2px] px-[14px] rounded-xl hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">Expertise</li>
                        <li className="font-bold text-[14px] cursor-pointer mr-2 xl:mr-6 hover:bg-white py-[2px] px-[14px] rounded-xl hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">Service</li>
                        <li className="font-bold text-[14px] cursor-pointer mr-2 xl:mr-6 hover:bg-white py-[2px] px-[14px] rounded-xl hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">Timeline</li>
                        <li className="font-bold text-[14px] cursor-pointer mr-2 xl:mr-6 hover:bg-white py-[2px] px-[14px] rounded-xl hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">Awards</li>
                        <li className="font-bold text-[14px] cursor-pointer mr-2 xl:mr-6 hover:bg-white py-[2px] px-[14px] rounded-xl hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">Media</li>
                        <li className="font-bold text-[14px] cursor-pointer mr-2 xl:mr-6 hover:bg-white py-[2px] px-[14px] rounded-xl hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">Contact</li>
                    </ul>
                    <div className="contactNumber flex items-center bg-white py-4 px-8 rounded-sm">
                         <Image className="w-[20px] h-[18px] mr-5" src={PhoneIcon} alt="PhoneIconHeader" />
                         <div>
                            <p className="font-[500] text-sm">Availible @</p>
                            <p className="font-[900] text-[18px] leading-[14px]">444.332.1167</p>
                             </div>
                    </div>
               
            </div>
            </div>
        </div>
        </>
    )
}

export default Header;