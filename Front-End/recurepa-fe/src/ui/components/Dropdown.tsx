import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface DropdownOption {
    label: string;
    href?: string; 
    onClick?: () => void; 
  }
  
  interface DropdownProps {
    icon?: React.ReactNode; 
    options: DropdownOption[];
  }

const Dropdown: React.FC<DropdownProps> = ({ icon , options }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Botão do Dropdown */}
      <MenuButton className=" border-[#5b7784] border bg-[#061A23] cursor-pointer rounded-md px-3 py-1">
        {icon}
      </MenuButton>

      <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-[#C0D0C3] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-{##336c5d} ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          {options.map((option, index) => (
            <MenuItem key={index}>
              {({ active }) => {
                const content = (
                  <span
                    className={`cursor-pointer ${
                      active ? "bg-[#235347] text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {option.label}
                  </span>
                );

                if (option.href) {
                  return (
                    <a href={option.href} className="block w-full">
                      {content}
                    </a>
                  );
                }

                if (option.onClick) {
                  return (
                    <button
                      onClick={option.onClick}
                      className="w-full text-left"
                    >
                      {content}
                    </button>
                  );
                }

                return null;
              }}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;