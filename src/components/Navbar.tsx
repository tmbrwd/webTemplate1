import LanguageChange from '@/components/LanguageChange';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Kmeaka from './Kmeaka';
import Link from 'next/link';


function Navbar() {


  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const { language, translate } = useContext(LanguageContext);

  return (
    <nav className="sticky top-0 z-10 bg-white p-5 backdrop-filter backdrop-blur-lg bg-opacity-80">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href='/'>

            <span className="text-2xl text-[#051C2C] font-semibold navbar-text">
              <Kmeaka />
            </span>
          </Link>
          <div className="flex space-x-4 text-[#051C2C]">
            <Link href="/">
              <p className="navbar-text font-bold text-xl hidden sm:inline hover:underline decoration-primary translate-x-3 transition-all  duration-100 delay-75">{translate('home')}</p>
            </Link>
            {/* company dropdown */}
            <Link href="#operations">
              <p className="navbar-text font-bold text-xl hidden sm:inline hover:underline decoration-primary transition-all duration-100 delay-75">{translate('companies')}</p>
            </Link>
            <LanguageChange />
            <div className="sm:hidden">
              <button
                onClick={toggleHandler}
                type="button"
                className="text-black hover:text-black focus:outline-none focus:text-blck"
                aria-label={translate('toggleMenu')}
              >
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
        <div className={toggle ? 'block' : 'hidden'}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <p className="block text-base font-medium text-[#051C2C] hover:text-gray-700">{translate('home')}</p>
            </Link>
            <Link href="/">
              <p className="block text-base font-medium text-[#051C2C] hover:text-gray-700">{translate('companies')}</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar