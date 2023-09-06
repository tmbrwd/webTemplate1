import React, { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContext';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { eMail, phoneNumber } from '@/constants';
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md'
import Kmeaka from '@/components/Kmeaka';
import Link from 'next/link';
import Image from 'next/image';

function Kontas() {
    const { translate } = useContext(LanguageContext);
    return (
        <div className='bg-white'>
            <div className="w-full h-[580px]">
                <div style={{ backgroundImage: `url('/kontas.jpg')` }} className='w-full h-full bg-center bg-cover '>
                    <div className="backdrop-filter w-full h-full backdrop-brightness-50  text-[64px] flex justify-center p-10 text-white">
                        <p className='my-auto'>{translate('watchShop')}</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9F9FB] p-5 flex justify-between w-full">
                <div className="mx-auto  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150">
                    <div className="flex justify-center">
                        <div className="bg-primary-soft mx-5 rounded-full p-5 h-16 w-16 flex items-center justify-center">
                            <MdLocationPin className='text-2xl' />
                        </div>
                    </div>
                    <Link href='https://goo.gl/maps/zgTsNUHDWeV1K83z5'>

                        <div className="flex justify-center font-bold text-xl m-auto my-2">
                            <p className="text-center">{translate('locations')}</p>
                        </div>

                        <div className="flex justify-center font-light text-lg m-auto my-2">
                            <p className="text-center">2nd khoroo - 21,<br /> Ulaanbaatar, Mongolia</p>
                        </div>
                    </Link>
                </div>
                <div className="mx-auto  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150">
                    <div className="flex justify-center">
                        <div className="bg-primary-soft mx-5 rounded-full p-5 h-16 w-16 flex items-center justify-center">
                            <BsFacebook className='text-2xl' />
                        </div>
                    </div>
                    <Link href="https://www.facebook.com/kontasshop">
                        <div className="flex justify-center font-bold text-xl m-auto my-2 hover:shadow-orange-300">
                            <p className="text-center">{translate('social address')}</p>
                        </div>
                        <div className="flex justify-center font-light text-lg m-auto my-2">
                            <p className="text-center">Kontas.mn</p>
                        </div>
                    </Link>
                </div>
                <div className="mx-auto  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150">
                    <div className="flex justify-center">
                        <div className="bg-primary-soft mx-5 rounded-full p-5 h-16 w-16 flex items-center justify-center">
                            <BsFillTelephoneFill className='text-2xl' />
                        </div>
                    </div>

                    <div className="flex justify-center font-bold text-xl m-auto my-2 hover:shadow-orange-300">
                        <p className="text-center">{translate('contact-number')}</p>
                    </div>
                    <div className="flex justify-center font-light text-lg m-auto my-2">
                        <p className="text-center">
                            <a href="tel: 88116909"></a>+976 8811 6909</p>
                    </div>

                </div>



            </div>

            <div className="w-full mt-[5%] bg-white">
                <div className="lg:w-3/5 md:w-4/5 sm:w-11/12 mx-auto  overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 md:p-5 lg:p-10 sm:p-10">
                            <Image src={"/2.jpg"} alt={""} width={500} height={300} className="object-cover shadow-xl lg:rounded-lg md:rounded-lg sm:rounded-none" />
                        </div>
                        <div className="md:w-1/2 md:p-5 lg:p-10 sm:p-10 p-10">
                            <p className="block font-bold text-3xl leading-tight text-black">{translate('aboutUs')}</p>
                            <p className="mt-2 text-slate-500 lg:text-lg md:text-sm">{translate('watch shop info')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Kontas