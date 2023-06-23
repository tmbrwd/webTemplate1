import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import Kmeaka from './Kmeaka'
import { AiOutlineMail } from 'react-icons/ai';
import { eMail, phoneNumber } from '@/constants';
import { BsTelephone } from 'react-icons/bs';

function Footer() {
    const { translate } = useContext(LanguageContext);
  return (
    <footer>
        <div className="bg-white mt-10 border-top-2 border-black">
          <div className="flex flex-col sm:flex-row justify-between text-black px-20 py-10">
            <span className="text-2xl text-white font-semibold">
              <Kmeaka />
            </span>
            <div className="text-black mt-10 space-y-5 ">
              <p className="font-bold text-lg">{translate('contact-info')}</p>
              <div className="flex items-center mt-3">
                <AiOutlineMail className="text-2xl" />
                <p className="text-xl ml-3">{eMail}</p>
              </div>
              <div className="flex items-center mt-3">
                <BsTelephone className="text-2xl" />
                <p className="text-xl ml-3">{phoneNumber}</p>
              </div>
            </div>
          </div>
          <hr className="bg-black my-10 h-0.1" />
          <div className="text-black text-end mx-5">
            <p className='font-bold'>{"©Softwave 2023"}</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer