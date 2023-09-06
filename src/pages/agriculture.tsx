import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';

function Agriculture() {
    const { translate } = useContext(LanguageContext);
    return (
        <div className='bg-white'>
            <div className="w-full h-[580px]">
                <div style={{ backgroundImage: `url('/agriculture.jpg')` }} className='w-full h-full bg-center bg-cover '>
                    <div className="backdrop-filter w-full h-full backdrop-brightness-50 text-[64px] flex justify-center p-10 text-white">
                        <p className='my-auto'>{translate('agriculture')}</p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="flex justify-center w-full p-10 h-full">
                    <p className=" text-slate-500 lg:text-lg md:text-sm">{translate('agriculture info')}</p>
                </div>
            </div>
        </div>
    );
}

export default Agriculture;
