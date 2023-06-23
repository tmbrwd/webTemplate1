import React, { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContext';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { eMail, phoneNumber } from '@/constants';
import { HiOutlineUserGroup } from 'react-icons/hi'
import Kmeaka from '@/components/Kmeaka';

function Kontas() {
    const { translate } = useContext(LanguageContext);
    return (
        <div className='bg-white'>
            <div className="w-full h-[580px]">
                <div style={{ backgroundImage: `url('https://source.unsplash.com/uDSMTV06s4U')` }} className='w-full h-full bg-center bg-cover '>
                    <div className="backdrop-filter w-full h-full backdrop-brightness-50  text-[64px] flex justify-center p-10 text-white">
                        <p className='my-auto'>{translate('watchShop')}</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9F9FB] p-5 flex justify-between w-full">
                <div className="mx-auto">
                    <div className="flex justify-center">
                        <div className="bg-primary-soft mx-5 rounded-full p-5 h-16 w-16 flex items-center justify-center">
                            <HiOutlineUserGroup className='text-2xl' />
                        </div>
                    </div>
                    <div className="flex justify-center font-bold text-xl m-auto my-2">
                        <p className="text-center">{translate('locations')}</p>
                    </div>

                    <div className="flex justify-center font-light text-lg m-auto my-2">
                        <p className="text-center">MN Tower Mongolia, J.Sambuu St, Улаанбаатар</p>
                    </div>

                </div>
                <div className="mx-auto">
                    <div className="flex justify-center">
                        <div className="bg-primary-soft mx-5 rounded-full p-5 h-16 w-16 flex items-center justify-center">
                            <HiOutlineUserGroup className='text-2xl' />
                        </div>
                    </div>
                    <div className="flex justify-center font-bold text-xl m-auto my-2">
                        <p className="text-center">{translate('locations')}</p>
                    </div>

                    <div className="flex justify-center font-light text-lg m-auto my-2">
                        <p className="text-center">MN Tower Mongolia, J.Sambuu St, Улаанбаатар</p>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="flex justify-center">
                        <div className="bg-primary-soft mx-5 rounded-full p-5 h-16 w-16 flex items-center justify-center">
                            <HiOutlineUserGroup className='text-2xl' />
                        </div>
                    </div>
                    <div className="flex justify-center font-bold text-xl m-auto my-2">
                        <p className="text-center">{translate('locations')}</p>
                    </div>

                    <div className="flex justify-center font-light text-lg m-auto my-2">
                        <p className="text-center">MN Tower Mongolia, J.Sambuu St, Улаанбаатар</p>
                    </div>
                </div>

            </div>

            <div className="w-full mt-[5%] bg-white">
                <div className="lg:w-3/5 md:w-4/5 sm:w-11/12 mx-auto  overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 md:p-5 lg:p-10 sm:p-10">
                            <img className="object-cover lg:rounded-lg md:rounded-lg sm:rounded-none" src="https://source.unsplash.com/ihTs16sDPL8" alt="Modern building architecture" />
                        </div>
                        <div className="md:w-1/2 md:p-5 lg:p-10 sm:p-10">
                            <p className="block font-bold text-3xl leading-tight text-black">{translate('aboutUs')}</p>
                            <p className="mt-2 text-slate-500 lg:text-lg md:text-sm">{translate('info')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="bg-[#051C2C] mt-10">
                    <div className="flex flex-col sm:flex-row justify-between text-white p-10">
                        <span className="text-2xl text-white font-semibold navbar-text">
                        <Kmeaka />
                        </span>
                        <div className="text-white space-y-5 ">
                            <p className="font-bold text-xl">{translate('contact-info')}</p>
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
                    <hr className="bg-white my-10 h-0.1" />
                    <div className="text-[#156ba9] text-end mx-5">
                        <p className='font-bold'>{"©Softwave 2023"}</p>
                    </div>
                </div>
            </footer>
        </div>


    )
}

export default Kontas