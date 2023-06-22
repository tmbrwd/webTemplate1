import LanguageChange from '@/components/LanguageChange';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Kmeaka from './Kmeaka';


function Navbar() {


  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const { language, translate } = useContext(LanguageContext);

  return (
    <nav className="sticky top-0 z-10 bg-[#051C2C] p-5 backdrop-filter backdrop-blur-lg ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-white font-semibold navbar-text">
           <Kmeaka/>


          </span>
          <div className="flex space-x-4 text-white">
            <a href="/" className="navbar-text font-bold text-xl hidden sm:inline">{translate('home')}</a>
            {/* company dropdown */}
            <a href="#" className="navbar-text font-bold text-xl hidden sm:inline">{translate('companies')}</a>
            <LanguageChange />
            <div className="sm:hidden">
              <button
                onClick={toggleHandler}
                type="button"
                className="text-white hover:text-white focus:outline-none focus:text-white"
                aria-label={translate('toggleMenu')}
              >
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
        <div className={toggle ? 'block' : 'hidden'}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block text-base font-medium text-white hover:text-gray-700">{translate('home')}</a>
            <a href="#" className="block text-base font-medium text-white hover:text-gray-700">{translate('companies')}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar