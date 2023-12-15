import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpeedIcon from '@mui/icons-material/Speed';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import React from "react";

export default function Box4(){
    return(
        <> 
        <div className='lg:w-80 lg:flex items-center justify-center lg:bg-gray-100 border-b border-t lg:border border-gray-300 mx-2 xl:mr-20 lg:rounded-2xl xl:px-10 mt-5 lg:mt-20 lg:h-[550px]'>
            <div className='text-[11px] lg:text-[13px] flex flex-col lg:gap-4 gap-6 whitespace-nowrap'>
                <div className="flex flex-row-reverse justify-between items-center">
                    <p>فروشنده</p>
                    <div className='flex flex-row-reverse text-xs text-cyan-500 gap-1'><span>4</span><p>فروشنده دیگر</p></div>
                </div>
                <div className='text-right'>
                    <p>دیجی کالا</p>
                </div>
                <div className="flex  flex-row-reverse border-b">
                    <div className='flex gap-1 p-2 border-l'>
                        <span className='text-green-500'>عالی</span>
                        <p>عملکرد</p>
                    </div>
                    <div className='p-2 gap-1 flex'>
                        <span className='text-green-500' >86.4%</span>
                        <p className="">رضایت از کالا</p>
                    </div>
                    
                </div>
                <div className='flex flex-row-reverse border-b pb-3 gap-1 items-center'>
                    <div className='text-gray-600'><VerifiedUserOutlinedIcon fontSize='small' /></div>
                    <div>گارانتی 18 ماهه مدیا پردازش</div>
                    
                </div>
                <div className='border-b flex flex-col gap-1 pb-4' >
                    <div className='flex  flex-row-reverse gap-1 text-base' >
                        <div className='text-cyan-500'><EventAvailableIcon /></div>
                        <p>موجود در انبار دیجی </p>
                        
                    </div>
                    <div className='flex  flex-row-reverse gap-1 mr-7'>
                        <div className='text-red-500'><LocalShippingIcon fontSize='small'/></div>
                        <p className='text-gray-400'>ارسال دیجی کالا</p>
                        
                    </div>
                    <div className='flex  flex-row-reverse gap-1 mr-7'>
                        <div className='text-purple-500'><SpeedIcon fontSize='small'/></div>
                        <p className='text-gray-400'>(فعلا در شهر تهران و کرج) ارسال امروز</p>
                        
                    </div>
                </div>
                    <div className='flex border-b flex-row-reverse pb-3 gap-1 '>
                        <img src='https://www.digikala.com/statics/img/svg/club-point.svg'/>
                        <div className='flex'><p> امتیاز دیجی‌کلاب </p><span>150</span></div>
                        
                    </div>
                
                    <div className='flex flex-row-reverse  gap-1  rounded-2xl items-center p-1'>
                        <div className='flex flex-row-reverse rounded-2xl p-1 bg-orange-200'>
                        <div className='text-orange-500 '><ErrorOutlineIcon fontSize='small'/></div>
                        <p className=''>بهترین قیمت در ۳۰ روز گذشته</p>
                        </div>
                    </div>
                

                    <div className='hidden lg:flex items-center gap-5 '>
                            <div className=" bg-red-500 rounded-full hidden lg:flex w-5">
                            <p className=" text-white l ml-1 lg:text-[12px]" >2%</p>
                        </div>
                        <div className='hidden lg:flex'>
                            <p className='line-through text-gray-400'>۴,۱۲۹,۰۰۰</p>
                        </div>
                    </div>
                    <div className='hidden lg:flex  gap-1 items-center'>
                        <p className='text-[11px]'>تومان</p>
                        <p className='font-bold'>3,999,000</p>  
                    </div>
                    <div className='bg-red-500  text-white hidden lg:flex justify-center py-2 px-1 rounded-2xl '>
                        <button>افزودن به سبد</button>
                    </div>
                    
                    <div className='fixed right-0 w-screen flex justify-between py-3 top-[93%] px-7 block lg:hidden bg-white '>
                        <div>
                        <div className='flex items-center gap-5 '>
                                <div className=" text-base bg-red-500 rounded-full flex w-5">
                                <p className=" text-white l ml-1 lg:text-[12px]" >2%</p>
                            </div>
                            <div className='flex'>
                                <p className='line-through text-gray-400 text-base'>۴,۱۲۹,۰۰۰</p>
                            </div>
                        </div>
                        <div className='flex  gap-1 items-center text-base'>
                            <p className='text-[11px]'>تومان</p>
                            <p className='font-bold'>3,999,000</p>  
                        </div>
                        </div>
                        <div className='bg-red-500 w-[50%]  text-white flex justify-center py-2 px-1 rounded-2xl '>
                            <button>افزودن به سبد</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}