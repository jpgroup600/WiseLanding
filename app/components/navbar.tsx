"use client"
import { useState } from 'react';
import Image from "next/image";
import { FaSquarePhone } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { LuHeartCrack } from "react-icons/lu"; // Example icon
import { LiaToothSolid } from "react-icons/lia"; // Example tooth icon
import { LuBicepsFlexed } from "react-icons/lu";


// Interface and Data
interface MenuItem {
  title: string;
  content: string[];
  icon: React.ReactNode; // Changed 'image' to 'icon' to use React icons
}

const menuData: { [key: string]: MenuItem } = {
  Teeth: {
    title: "Teeth",
    content: [
      "Teeth Whitening",
      "Dental Implants",
      "Braces",
      "Root Canal"
    ],
    icon: <LiaToothSolid className="text-4xl text-blue-800" /> // Using the tooth icon here
  },
  Cancer: {
    title: "Cancer ",
    content: [
      "Chemotherapy",
      "Radiation Therapy",
      "Surgery",
      "Palliative Care"
    ],
    icon: <LuHeartCrack className="text-4xl text-red-600" /> // Using heart crack icon here
  },
  Health: {
    title: "Health ",
    content: [
      "Full Body Checkup",
      "Blood Tests",
      "ECG",
      "X-Ray"
    ],
    icon: <LuBicepsFlexed className="text-4xl text-blue-600 " /> // Example icon for health
  },
  Dementia: {
    title: "Dementia ",
    content: [
      "Memory Tests",
      "Cognitive Therapy",
      "Daily Assistance",
      "Medication"
    ],
    icon: <LuHeartCrack className="text-4xl text-yellow-600" /> // Example icon for dementia
  }
};

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMobileMenu, setSelectedMobileMenu] = useState<string | null>(null);

  // Mobile menu content renderer
  const renderMobileContent = () => {
    if (!selectedMobileMenu) return (
      <div className="text-gray-500 text-center school-font p-4">
        Select a category to view services
      </div>
    );

    return (
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-900 mb-4">
          {menuData[selectedMobileMenu].title}
        </h3>
        <ul className="space-y-2">
          {menuData[selectedMobileMenu].content.map((service, index) => (
            <li key={index} className="text-gray-600">
              • {service}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="relative school-font">
      {/* Desktop Navbar */}
      <div className="w-full h-[120px] flex justify-between items-center px-4 md:px-24 bg-white shadow-sm">
        
        {/* Logo */}
        <div className="h-[40px] w-[200px] md:w-[300px]">
          <Image 
            src="/Navbar/logo.png" 
            alt="Logo" 
            width={400} 
            height={400}
            className="w-full h-full" 
          />
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex gap-8 font-bold school-font text-xl relative">
          {Object.keys(menuData).map((item) => (
            <div
              key={item}
              className="flex items-center cursor-pointer py-2 px-4 hover:text-[#150f96] transition-colors"
              onMouseEnter={() => setShowDropdown(true)}
            > 
              {/* Icon next to the title */}
              
              {menuData[item].title}
            </div>
          ))}
        </div>

        {/* Desktop Phone */}
        <div className="hidden md:flex items-center font-bold gap-2">
          <FaSquarePhone className="text-3xl text-[#150f96]" />
          <div className="text-2xl text-[#150f96]">080-410-4100</div>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden gap-4">
          <button className="bg-[#150f96] w-[98px] h-[34px] rounded-full flex items-center justify-center gap-1">
            <FaSquarePhone className="text-white"/>
            <span className="text-white school-font text-sm">helpline</span>
          </button>
          <HiOutlineBars3 
            size={30} 
            onClick={() => setMobileMenuOpen(true)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Desktop Dropdown */}
      {showDropdown && (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="grid items-center px-80 grid-cols-4 gap-8 p-6 border-t-2 border-blue-100">
            {Object.entries(menuData).map(([key, value]) => (
              <div key={key} className="space-y-4">
                <div className="flex gap-2 items-center ">
                  <div className=" ">
                    {value.icon} {/* Displaying the icon here */}
                  </div>
                  <h3 className="text-xl font-bold text-[#150f96] ">{value.title}</h3>
                </div>
                <ul className="space-y-2">
                  {value.content.map((service, index) => (
                    <li key={index} className="text-gray-600 hover:text-blue-800">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="w-full h-screen bg-white flex">
            {/* Left Side - Categories */}
            <div className="w-1/3 bg-gray-50 border-r p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <HiX 
                  size={24} 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSelectedMobileMenu(null);
                  }}
                  className="cursor-pointer text-gray-600"
                />
              </div>
              
              <div className="space-y-3">
                {Object.keys(menuData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedMobileMenu(key)}
                    className={`w-full text-left p-3 rounded-lg ${
                      selectedMobileMenu === key 
                        ? 'bg-blue-100 text-blue-900'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-2">
                        {menuData[key].icon} {/* Displaying the icon here */}
                      </div>
                      {menuData[key].title}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-2/3 overflow-y-auto">
              {renderMobileContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
