import React, { useState } from "react";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import CheckIcon from '@mui/icons-material/Check';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function Box3(){
    const [color , setcolor]  = useState({
        black:true,
        blue:false,
    }
    );
    const blackhandle = ()=>{
        setcolor({...color , black : true , blue : false})
    }
    const bluehandle = ()=>{
        setcolor({...color , blue : true , black : false})
    }
    return(
        <>
        <div className="text-right gap-5 flex flex-col px-2 lg:px-0 xl:w-96 2xl:w-auto lg:w-80">
            <div className="text-cyan-400 lg:text-base text-xs mt-3 lg:mt-0">
                <span> جی پلاس </span>
                <span className="text-gray-400 text-xs">/</span>
                <span> گوشی موبایل جی پلاس </span>
            </div>
            <div className="text-sm lg:text-base">
                <p>گوشی موبایل جی پلاس مدل X20 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت</p>
            </div>
            <div className="text-gray-400 hidden lg:flex items-center gap-1">
                <div className="border-t flex-grow h-[0.1px] "> </div>
                <p className="flex-shrink text-sm"> Gplus X20 Dual SIM 128GB And 4GB RAM Mobile Phone </p>
            </div>
            <div className="flex lg:text-base text-xs flex-row-reverse items-center gap-3 text-sm">
                <div className="flex flex-row-reverse items-center">
                    <div className="flex items-center text-yellow-500"><StarOutlinedIcon fontSize="small"/></div>
                    <span>4.4</span>
                    <span className="text-gray-400 ">(69)</span>
                </div>
                <div className="flex flex-row-reverse text-cyan-500"><span>141</span><span>دیدگاه</span></div>
                <div className="flex flex-row-reverse text-cyan-500"><span>52</span><span>پرسش</span></div>
            </div>
            <div className="border-b p-1 pb-4 lg:border-0 lg:p-0 text-gray-400 whitespace-nowrap text-xs lg:text-base items-center flex flex-row-reverse">
                <div className="text-green-400 lg:mb-9 mb-0 xl:mb-0"><ThumbUpOutlinedIcon fontSize="small"/></div>
                <div className="flex flex-row-reverse flex-wrap gap-1">
                    <span>۸۵% (۷۰ نفر)</span> 
                    <p>از خریداران، این کالا  را پیشنهاد کرده‌اند</p></div>
                <div className="group relative border rounded-full w-6 flex items-center justify-center ">
                    <PriorityHighRoundedIcon fontSize=""/>
                    <div className="group-hover:block hidden absolute w-80 top-8 bg-gray-700 text-white py-4 px-3 rounded-xl text-xs  z-10"><p> خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند.  </p></div>
                </div>
            </div>
            <div className="text-sm lg:text-base  flex flex-row-reverse ">
                <p> :رنگ</p>
                <span>{color?.black ? "مشکی" : "" || color.blue ? "آبی" : "" }</span>
            </div>
            <div className="flex flex-row-reverse">
                <div className="border rounded-full fucos: w-9 h-9 flex items-center justify-center ">
                    <div onClick={blackhandle} className="bg-black w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        {color.black && <div className="text-white pb-2"><CheckIcon fontSize="small"/></div>}
                    </div>
                </div>
                <div className="border rounded-full fucos: w-9 h-9 flex items-center justify-center ">
                    <div onClick={bluehandle} className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        {color.blue && <div className="text-white pb-2"><CheckIcon fontSize="small"/></div>}
                    </div>
                </div>
                
                
            </div>
            <div className="border-b pb-2 gap-1 flex flex-col text-xs lg:text-sm" >
                <p className="text-sm lg:text-base font-bold">ویژگی ها</p>
                <div className="flex flex-row-reverse">
                    <p className="text-gray-600">: فناوری صفحه نمایش </p>
                    <span className="font-semibold">IPS</span>
                </div>
                <div className="flex flex-row-reverse">
                    <p className="text-gray-600">: رزولوشن عکس </p>
                    <span className="font-semibold">مگاپیکسل 50</span>
                </div>
                <div className="flex flex-row-reverse">
                    <p className="text-gray-600">:نسخه سیستم عامل </p>
                    <span className="font-semibold"> Android 12</span>
                </div>
                <div className="flex flex-row-reverse">
                    <p className="text-gray-600">:  اندازه </p>
                    <span className="font-semibold"> 6.5</span>
                </div>
                <div className="flex flex-row-reverse">
                    <p className="text-gray-600">:اقلام همراه </p>
                    <span className="font-semibold"> دفترچه‌ راهنما، شارژر، قاب ژله‌ای، هندزفری</span>
                </div>
            </div>
            <div className="hidden lg:flex gap-2 items-up">
                <p className="text-gray-600 mt-1 text-[12px] w-[650px]">امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</p>
                <div className="text-gray-600" ><SmsFailedIcon fontSize="small"/></div>
            </div>
            <div className="mt-2 flex items-center justify-between border p-2 rounded-2xl">
                <img src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg"/>
                <p className="lg:text-lg text-sm">ارسال رایگان برای این کالا</p>
            </div>
            <div className="lg:flex justify-between border rounded-2xl p-2 py-6">
                <img className="hidden lg:block"  src="https://www.digikala.com/statics/img/svg/digiplus/free-delivery.svg"/>
                <div className="flex flex-row-reverse justify-between lg:justify-normal lg:flex-col gap-1 lg:text-lg text-sm">
                    <div className="flex flex-col">
                    <div className="flex flex-row-reverse text-purple-400 gap-1">
                        <div><AutoAwesomeIcon /></div>
                        <p>ارسال رایگان سفارش ها برای اعضای دیجی پلاس</p>
                    </div>
                    <div className="flex flex-row-reverse text-gray-400 text-xs pr-5">
                        <p> (رایگان) رسال فوری برای شهر تهران </p>
                    </div>
                    <div className="flex flex-row-reverse text-sm text-cyan-500 pr-5">
                        <p>خرید اشتراک</p>
                        <div><ArrowBackIosIcon fontSize="small" /></div>
                    </div>
                    </div>
                    <div className="lg:hidden block">
                        <img  src="https://www.digikala.com/statics/img/svg/digiplus/free-delivery.svg"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}