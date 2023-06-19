import React, { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContext';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { eMail, phoneNumber } from '@/constants';
import { HiOutlineUserGroup } from 'react-icons/hi'

function kontas() {
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
                            <svg width="120" height="40" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.4963 0.75V4.89H95.5259V17.15H99.6148V4.89V0.85V0.75H83.4963Z" fill="#E8C02D" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.8494 29.33H13.4519L10.7259 20.91L8 29.33H4.64198L0 12.25H4.34568L6.53827 21.27L9.2642 12.25H12.2074L14.9333 21.27L17.1259 12.25H21.4716L16.8494 29.33Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9308 29.33V12.25H39.3876V15.99H32.0592V18.85H38.321V22.59H32.0592V25.59H39.3876V29.33H27.9308Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M47.0716 29.33V12.25H51.2197V29.33H47.0716Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M64.1778 29.4699C61.8287 29.6834 59.5029 28.8596 57.7975 27.2099L60.4445 24.5299C61.5121 25.3887 62.8564 25.8163 64.2173 25.7299C65.8371 25.7299 66.6272 25.1699 66.6272 24.1899C66.6464 23.8253 66.5261 23.4671 66.2914 23.1899C65.976 22.9317 65.5898 22.7781 65.1852 22.7499L63.2099 22.4699C61.9409 22.3639 60.7442 21.8285 59.8124 20.9499C58.9945 20.0096 58.5757 18.7808 58.6469 17.5299C58.6469 14.4099 60.9778 12.1299 64.8099 12.1299C66.8988 11.9634 68.9613 12.6885 70.4988 14.1299L67.8321 16.7499C66.9524 15.9733 65.7926 15.6035 64.6321 15.7299C63.1901 15.7299 62.6568 16.5699 62.6568 17.3099C62.6621 17.6106 62.7825 17.8974 62.9926 18.1099C63.3103 18.4111 63.7233 18.5883 64.158 18.6099L66.1333 18.9099C67.3619 18.9924 68.5289 19.4847 69.4519 20.3099C70.3516 21.3335 70.8009 22.6838 70.6963 24.0499C70.6963 27.5699 67.7333 29.4699 64.1778 29.4699Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M82.8445 29.4702C80.489 29.6869 78.1559 28.863 76.4445 27.2102L79.0124 24.5302C80.0827 25.3839 81.425 25.8109 82.7852 25.7302C84.4247 25.7302 85.1951 25.1702 85.1951 24.1902C85.2122 23.8292 85.0999 23.4741 84.879 23.1902C84.5607 22.921 84.1668 22.76 83.7531 22.7302L81.7778 22.4502C80.5158 22.3398 79.3266 21.8047 78.4 20.9302C77.5745 19.9945 77.1546 18.7623 77.2346 17.5102C77.2346 14.3902 79.5457 12.1102 83.3975 12.1102C85.4804 11.9444 87.5366 12.6698 89.0667 14.1102L86.4988 16.7502C85.6191 15.9735 84.4592 15.6038 83.2988 15.7302C81.8371 15.7302 81.3235 16.5702 81.3235 17.3102C81.3288 17.6108 81.4492 17.8977 81.6593 18.1102C81.977 18.4114 82.39 18.5886 82.8247 18.6102L84.8 18.9102C86.0286 18.9927 87.1956 19.485 88.1185 20.3102C89.0336 21.3256 89.4914 22.68 89.3827 24.0502C89.363 27.5702 86.4 29.4702 82.8445 29.4702Z" fill="white" />
                            </svg>
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

export default kontas