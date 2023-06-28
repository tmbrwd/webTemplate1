import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import Carousel from '@/components/carousel';
import FixedContactButton from '@/components/FixedContactButton';
import Link from 'next/link';
import Image from 'next/image';


function Index() {
  const { translate } = useContext(LanguageContext);

  return (
    <div className='bg-[#f4f4f4]'>

      <Carousel />
      <div className="w-full mb-[5%] mt-10">
        {/* <div className="lg:w-3/5 md:w-4/5 sm:w-11/12 mx-auto sm:p-10 md:p-10 lg:p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:p-5 lg:p-10 sm:p-10">
              
              <div className="w-[540px] h-[445px] relative">
                <div className="w-[495px] h-[422px] left-[-30px] top-[-30px] absolute bg-[#dcdcdc] rounded-lg" />
                <Image src={'/pc.png'} priority={true} alt='company' width={1000} height={1000} className="w-[540px] h-[445px] left-0 top-0 absolute rounded-lg lg:block md:block sm:hidden" />
              </div>
            </div>
            <div className="md:w-1/2 md:p-5 lg:mt-0 md:mt-0 sm:mt-10 lg:p-10 sm:p-10">
              <p className="block px-10 text-3xl text-slate-900 font-bold leading-7">{translate('aboutUs')}</p>
              <p className="mt-2 px-10 text-slate-500 lg:text-lg md:text-sm opacity-80 text-slate-900 font-normal leading-normal">{translate('info')}</p>
            </div>
          </div>
        </div> */}
        <div className="lg:w-3/5 md:w-4/5 sm:w-11/12 mx-auto sm:p-10 md:p-10 lg:p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-5">
              <div className="w-full h-[300px] relative">
                <div className="w-full h-[300px] left-[-30px] top-[-30px] absolute bg-[#dcdcdc] rounded-lg" />
                <Image src={'/pc.png'} priority={true} alt='company' width={1000} height={1000} className="w-full h-full left-0 top-0 absolute rounded-lg object-cover lg:block md:block sm:hidden" />
              </div>
            </div>
            <div className="md:w-1/2 md:p-5 lg:mt-0 md:mt-0 sm:mt-10 lg:p-0 sm:p-0">
              <p className="block p-5 text-3xl text-slate-900 font-bold leading-7">{translate('aboutUs')}</p>
              <p className="mt-2 px-5 text-slate-500 lg:text-lg md:text-sm opacity-80 text-slate-900 font-normal leading-normal">{translate('info')}</p>
            </div>
          </div>
        </div>




        <div className="w-full my-10 ">
          <div id='operations' className="mx-auto w-full">
            <div className="flex justify-center mt-[5%] p-5">
              <p className='font-bold text-2xl'>{translate('operations')}</p>
            </div>
            <div className="flex justify-center mt-10 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mb-10 h-[500px]">
                <div className="p-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150" style={{ width: '100%', height: '100%' }}>
                  <Link href="/kontas">
                    <div style={{ backgroundImage: `url('/watch.jpg')` }} className='w-full hover:shadow-xl h-full bg-center bg-cover rounded-lg flex flex-col justify-end'>
                      <div className="backdrop-filter w-full h-full backdrop-brightness-50 font-bold rounded-lg  text-md flex justify-center p-10 text-white">
                        <p className='mt-auto text-2xl'>{translate('watchShop')}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150" style={{ width: '100%', height: '100%' }}>
                  <Link href="/kontas">
                    <div style={{ backgroundImage: `url('/roof.jpg')` }} className='w-full hover:shadow-xl h-full bg-center bg-cover rounded-lg flex flex-col justify-end'>
                      <div className="backdrop-filter w-full h-full backdrop-brightness-50 font-bold rounded-lg text-md flex justify-center p-10 text-white">
                        <p className='mt-auto text-2xl'>{translate('roofShop')}</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="p-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150" style={{ width: '100%', height: '100%' }}>
                  <Link href="/kontas">

                    <div style={{ backgroundImage: `url('/bowl.jpg')` }} className='w-full hover:shadow-xl h-full bg-center bg-cover rounded-lg flex flex-col justify-end'>
                      <div className="backdrop-filter w-full h-full backdrop-brightness-50 font-bold rounded-lg text-md flex justify-center p-10 text-white relative">
                        <p className='mt-auto text-2xl'>{translate('tableWare')}</p>
                      </div>
                    </div>

                  </Link>
                </div>

                <div className="p-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150" style={{ width: '100%', height: '100%' }}>
                  <Link href="/kontas">
                    <div style={{ backgroundImage: `url('/agriculture.jpg')` }} className='w-full hover:shadow-xl h-full bg-center bg-cover rounded-lg flex flex-col justify-end'>
                      <div className="backdrop-filter w-full h-full backdrop-brightness-50 font-bold rounded-lg text-md flex justify-center p-10 text-white">
                        <p className='mt-auto text-2xl'>{translate('agriculture')}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <FixedContactButton />
    </div>
  );
}

export default Index;
