import React, { useState,useEffect } from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ScrollContainer from "react-indiana-drag-scroll";
export default function Box73(){
    
    let pervscroopos = 0;


    const comment = [
        {
            score : "5.0",
            history : " ۴ اذر ۱۴۰۲ ",
            name : "سید محمد حیدرپور",
            suggestion : true,
            commenttext:"بنده گوشی جی پلاس q10 خریدم سال ۹۸ بشدت ازش راضیم هنوزم سالمه دارم باهاش کار میکنم ب همین دلیل دوباره این مدل x20 رو سفارش دادم تازه امروز بدستم رسید دو روزه رسید از همه لحاظ عالیه من که راضیم",
            buy : true,
            color : "مشکی",
        },
        {
            score : "5.0",
            history : " ۴ اذر ۱۴۰۲ ",
            name : "سید محمد حیدرپور",
            suggestion : true,
            commenttext:"بنده گوشی جی پلاس q10 خریدم سال ۹۸ بشدت ازش راضیم هنوزم سالمه دارم باهاش کار میکنم ب همین دلیل دوباره این مدل x20 رو سفارش دادم تازه امروز بدستم رسید دو روزه رسید از همه لحاظ عالیه من که راضیم",
            buy : true,
            color : "مشکی",
        },
        {
            score : "5.0",
            history : " ۴ اذر ۱۴۰۲ ",
            name : "سید محمد حیدرپور",
            suggestion : true,
            commenttext:"بنده گوشی جی پلاس q10 خریدم سال ۹۸ بشدت ازش راضیم هنوزم سالمه دارم باهاش کار میکنم ب همین دلیل دوباره این مدل x20 رو سفارش دادم تازه امروز بدستم رسید دو روزه رسید از همه لحاظ عالیه من که راضیم",
            buy : true,
            color : "مشکی",
        },
        {
            score : "5.0",
            history : " ۴ اذر ۱۴۰۲ ",
            name : "سید محمد حیدرپور",
            suggestion : true,
            commenttext:"بنده گوشی جی پلاس q10 خریدم سال ۹۸ بشدت ازش راضیم هنوزم سالمه دارم باهاش کار میکنم ب همین دلیل دوباره این مدل x20 رو سفارش دادم تازه امروز بدستم رسید دو روزه رسید از همه لحاظ عالیه من که راضیم",
            buy : true,
            color : "مشکی",
        },
        {
            score : "5.0",
            history : " ۴ اذر ۱۴۰۲ ",
            name : "سید محمد حیدرپور",
            suggestion : true,
            commenttext:"بنده گوشی جی پلاس q10 خریدم سال ۹۸ بشدت ازش راضیم هنوزم سالمه دارم باهاش کار میکنم ب همین دلیل دوباره این مدل x20 رو سفارش دادم تازه امروز بدستم رسید دو روزه رسید از همه لحاظ عالیه من که راضیم",
            buy : true,
            color : "مشکی",
        },
        {
            score : "5.0",
            history : " ۴ اذر ۱۴۰۲ ",
            name : "سید محمد حیدرپور",
            suggestion : true,
            commenttext:"بنده گوشی جی پلاس q10 خریدم سال ۹۸ بشدت ازش راضیم هنوزم سالمه دارم باهاش کار میکنم ب همین دلیل دوباره این مدل x20 رو سفارش دادم تازه امروز بدستم رسید دو روزه رسید از همه لحاظ عالیه من که راضیم",
            buy : true,
            color : "مشکی",
        },
        {
            score : "5.0",
            history : " ۴ اذر ۱۴۰۲ ",
            name : "سید محمد حیدرپور",
            suggestion : true,
            commenttext:"بنده گوشی جی پلاس q10 خریدم سال ۹۸ بشدت ازش راضیم هنوزم سالمه دارم باهاش کار میکنم ب همین دلیل دوباره این مدل x20 رو سفارش دادم تازه امروز بدستم رسید دو روزه رسید از همه لحاظ عالیه من که راضیم",
            buy : true,
            color : "مشکی",
        },
    ]
    return(
        <>
        <div className="flex flex-row-reverse">
        <div className=" mt-6 sticky top-36 h-full hidden lg:flex flex-col gap-2">
            <div className="flex flex-row-reverse ">
                 <p className="border-b-2 border-red-500 pb-2">امتیاز و دیدگاه کاربران</p>
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
                <p className="text-2xl font-bold"> 3.3 </p>
                <span className="text-sm"> 5 از  </span>
            </div>
            <div className="flex flex-row-reverse items-center">
                <div className="flex text-yellow-400 flex-row-reverse" >
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                </div>
                <div className="flex flex-row-reverse text-gray-400 text-xs">از مجموع ۶۰ امتیاز</div>
            </div>
            <div className="flex flex-row-reverse text-sm text-gray-600">
                <p>شما هم درباره این کالا دیدگاه ثبت کنید</p>
            </div>
            <div className="flex flex-row-reverse  ">
                <button className="border-red-500 border rounded-lg px-24 py-2 text-sm text-red-500 "> ثبت دیدگاه </button>
            </div>
            <div className="text-sm text-gray-500  flex flex-row-reverse">
                <p className="w-60 text-right">
                    با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در دیجی‌کلاب دریافت کنید</p>
            </div>
        </div>
            <div className="flex flex-col pr-2 lg:pr-0  lg:mr-14">
                <div className="lg:flex text-[11px]  hidden  lg:text-base flex-row-reverse mt-6 items-center gap-2 pb-5 border-b">
                    <div className="text-green-500 flex items-center"><ThumbUpOffAltIcon fontSize="small"/></div>
                    <div className=" lg:text-sm"><p>۸۵% (۸۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند</p></div>
                    <div className="text-gray-400 flex items-center"><ErrorOutlineIcon fontSize="small" /></div>
                </div>
                    <div>
                    <ScrollContainer >
                        <div  className="flex   lg:w-auto lg:flex-col  lg:gap-7 ">
                    {comment.map((item) =>(
                            <div className="flex flex-row-reverse">
                            <div className=" w-72 md:96 lg:w-auto border lg:border-0 mt-2 rounded-2xl lg:rounded-0 lg:mt-0 p-4 lg:p-0 flex flex-col gap-2 text-[11px] lg:text-base ml-4 lg:ml-0">
                            <div className="mt-3 hidden  pb-2 pt-2 lg:flex flex-row-reverse gap-2 items-center text-xs text-gray-400">
                                <div className="bg-green-400 text-white rounded p-[1px]">{item.score}</div>
                                <div>{item.history}</div>
                                <div>{item.name}</div>
                                <div className="text-green-600 bg-green-100 p-1  rounded-2xl">{item.buy ? "خریدار" : "فروشنده"}</div>
                            </div>
                            <div>
                                <div className="text-green-600 pt-1 lg:border-t lg:mr-6 flex flex-row-reverse gap-1 lg:text-xs items-center">
                                    <ThumbUpOffAltIcon fontSize="small"/>
                                    <div>{item.suggestion ? "پیشنهاد میکنم" : "پیشنهاد نمیکنم"}</div>
                                </div>
                            </div>
                            <div className="text-right lg:text-sm border-b pb-3">
                                <p>{item.commenttext}</p>
                            </div>
                            <div className="pt-1 text-gray-300 flex flex-row-reverse lg:text-xs gap-2 items-center">
                                <div><StorefrontIcon fontSize="small" /></div>
                                <div><p>دیجی‌کالا</p></div>
                                <div>{item.color}</div>
                            </div>
                            </div>
                        </div>
                    ))}
                    </div>
                   </ScrollContainer> 
                </div>
                
            </div>
        </div>
        </>
    )
}