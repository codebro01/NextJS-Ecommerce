import React from 'react'
import Link from 'next/link';
import { NavSectionProps } from 'types/types';

export const DropdownSection = ({links, title}: NavSectionProps) => {
  return (
    <li className="flex flex-col gap-2">
    <h3 className="relative font-noto text-gray-900 dark:text-gray-100 font-medium text-sm font-gabarito border-bottom dark:after:border-neutral-700 after:border-gray-300 pb-2">{title}</h3>

    <ul className="nav-items-dropdown-container grid grid-cols-1 gap-1 dark:text-neutral-400 text-neutral-600 font-gabarito">
        {links.map((link, index) => <Link key={index + 1} className="hover:text-main-500 hover:font-medium transition ease-in-out duration-200" href = {link.href}>{link.label}</Link>
)}
    </ul>
</li>
  )
}

   
