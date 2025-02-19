import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface DropdownProps {
  buttonLabel: string;
  options: { label: string; href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel, options }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Botão do Dropdown */}
      <MenuButton className="cursor-pointer">
        {buttonLabel}
      </MenuButton>

      {/* Conteúdo do Dropdown */}
      <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-[#C0D0C3] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-{##336c5d} ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          {options.map((option, index) => (
            <MenuItem key={index}>
              {({ active }) => (
                <a
                  href={option.href}
                  className={`${
                    active ? "bg-[#235347] text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {option.label}
                </a>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;