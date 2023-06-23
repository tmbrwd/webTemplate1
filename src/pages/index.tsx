import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import Carousel from '@/components/carousel';
import FixedContactButton from '@/components/FixedContactButton';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { eMail, phoneNumber } from '@/constants';
import Kmeaka from '@/components/Kmeaka';
import Link from 'next/link';


function Index() {
  const { translate } = useContext(LanguageContext);

  return (
    <div className='bg-white'>

      <Carousel />
      <div className="w-full mb-[5%] mt-10 bg-white">
        <div className="lg:w-3/5 md:w-4/5 sm:w-11/12 mx-auto sm:p-10 md:p-10 lg:p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:p-5 lg:p-10 sm:p-10">
              <img className="object-cover lg:rounded-lg md:rounded-lg sm:rounded-none" src="https://source.unsplash.com/ihTs16sDPL8" alt="Modern building architecture" />
            </div>
            <div className="md:w-1/2 md:p-5 lg:mt-0 md:mt-0 sm:mt-10 lg:p-10 sm:p-10">
              <p className="block font-bold text-3xl leading-tight text-black">{translate('aboutUs')}</p>
              <p className="mt-2 text-slate-500 lg:text-lg md:text-sm">{translate('info')}</p>
            </div>
          </div>
        </div>

        <div className="w-full my-10 bg-white">
          <div className="mx-auto w-full">
            <div className="flex justify-center mt-[5%] p-5">
              <p className='font-bold text-2xl'>{translate('operations')}</p>
            </div>
            <div className="flex justify-center mt-10 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mb-10 h-[500px]">
                <div className="p-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150" style={{ width: '100%', height: '100%' }}>
                  <Link href="/kontas">
                    <div style={{ backgroundImage: `url('https://source.unsplash.com/uDSMTV06s4U')` }} className='w-full hover:shadow-xl h-full bg-center bg-cover rounded-lg flex flex-col justify-end'>
                      <div className="backdrop-filter w-full h-full backdrop-brightness-50 font-bold rounded-lg  text-md flex justify-center p-10 text-white">
                        <p className='mt-auto'>{translate('watchShop')}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150" style={{ width: '100%', height: '100%' }}>
                  <Link href="/kontas">
                    <div style={{ backgroundImage: `url('https://source.unsplash.com/MjLrM8rVMC0')` }} className='w-full hover:shadow-xl h-full bg-center bg-cover rounded-lg flex flex-col justify-end'>
                      <div className="backdrop-filter w-full h-full backdrop-brightness-50 font-bold rounded-lg text-md flex justify-center p-10 text-white">
                        <p className='mt-auto'>{translate('roofShop')}</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="p-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150" style={{ width: '100%', height: '100%' }}>
                  <Link href="/kontas">

                    <div style={{ backgroundImage: `url('https://source.unsplash.com/auCuaq4Gtsc')` }} className='w-full hover:shadow-xl h-full bg-center bg-cover rounded-lg flex flex-col justify-end'>
                      <div className="backdrop-filter w-full h-full backdrop-brightness-50 font-bold rounded-lg text-md flex justify-center p-10 text-white relative">
                        <p className='mt-auto'>{translate('tableWare')}</p>
                      </div>
                    </div>

                  </Link>
                </div>

                <div className="p-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150" style={{ width: '100%', height: '100%' }}>
                  <Link href="/kontas">
                    <div style={{ backgroundImage: `url('https://source.unsplash.com/2TsSsZ6xkFE')` }} className='w-full hover:shadow-xl h-full bg-center bg-cover rounded-lg flex flex-col justify-end'>
                      <div className="backdrop-filter w-full h-full backdrop-brightness-50 font-bold rounded-lg text-md flex justify-center p-10 text-white">
                        <p className='mt-auto'>{translate('agriculture')}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="bg-white mt-10">
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
      <FixedContactButton />
    </div>
  );
}

export default Index;
