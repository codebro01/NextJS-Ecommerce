'use client'
import React from 'react'
import { useSearchPageState } from 'hooks/useSearchPageState'


// type searchPageIsOpenType = {
//   SetSearchPageIsOpen : (arg: boolean) => void
// }

export const SearchPageComponent = () => {
  const {toggleOpen: toggleSearchPage } = useSearchPageState();
  


  return (
         <div className=' fixed rounded-md border-[2px] border-main-500  p-4 md:p-8  w-[90vw] min-h-[80vh] md:w-[60vw] bg-gray-100 text-neutral-950 dark:bg-neutral-950 text-gray-100  z-[9999] top-[50%] transform translate-y-[-50%] left-[50%] translate-x-[-50%] search-page' >
        <form  className="search-form flex gap-[10px]">
          <input type='search' placeholder='Search anything' className="border-none bg-gray-200 font-noto dark:bg-neutral-800 dark:text-gray-100 rounded-md searchBar w-full outline-none border-[2px] px-3 py-3"/>
          <button className='cursor-pointer bg-main-500 text-neutral-950 px-[15px] px-[5px] font-gabarito rounded-md'
            onClick={toggleSearchPage}
          > Close</button>

        </form>
        <div className="search-result flex justify-start mt-5 dark:text-gray-100 font-noto">
            Search Result
        </div>
        
    </div>

  )
}
