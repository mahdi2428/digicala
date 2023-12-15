import React, { useState,useEffect } from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ScrollContainer from "react-indiana-drag-scroll";
export default function Box74(){
    
    const [off , setOff] = useState(false)

    
    
    const comment = [
        {
            comment: "مثل نوت 9 اس چراغ اعلان داره ؟",
            respond: "نه خیلی مشکل نرم افزاری داره",
            name : "نادر صادقی",
            seller : true,
        },
        {
            comment: "مثل نوت 9 اس چراغ اعلان داره ؟",
            respond: "نه خیلی مشکل نرم افزاری داره",
            name : "نادر صادقی",
            seller : true,
        },
        {
            comment: "مثل نوت 9 اس چراغ اعلان داره ؟",
            respond: "نه خیلی مشکل نرم افزاری داره",
            name : "نادر صادقی",
            seller : true,
        },
        {
            comment: "مثل نوت 9 اس چراغ اعلان داره ؟",
            respond: "نه خیلی مشکل نرم افزاری داره",
            name : "نادر صادقی",
            seller : true,
        },
        {
            comment: "مثل نوت 9 اس چراغ اعلان داره ؟",
            respond: "نه خیلی مشکل نرم افزاری داره",
            name : "نادر صادقی",
            seller : true,
        },
    ]
    
    return(
        <>
        <div className="flex flex-row-reverse">
        <div className=" mt-6 sticky top-36 hidden h-full lg:flex flex-col gap-2">
            <div className="flex flex-row-reverse ">
                 <p className="border-b-2 border-red-500 pb-2">پرسش</p>
            </div>
            <div className="flex flex-row-reverse text-sm text-gray-600">
                <p>شما هم درباره این کالا دیدگاه ثبت کنید</p>
            </div>
            <div className="flex flex-row-reverse  ">
                <button className="border-red-500 border rounded-lg px-24 py-2 text-sm text-red-500 "> ثبت دیدگاه </button>
            </div>
        </div>
        
            <ScrollContainer className="w-screen  flex flex-row-reverse lg:flex-col  lg:mr-14  ">
                <div className="flex  lg:flex-col gap-7 ">
                    {comment.map((item) =>(
                        
                        
                        <div className="mr-2 text-[10px] mb-16 lg:mr-0 p-2 lg:p-0 mt-4 lg:mt-0 lg:border-b-2 border p-2 lg:p-0 lg:border-0 rounded-2xl   text-right">
                        <div className="mt-3 lg:mt-10 lg:border-b pb-2 w-[53.5vw] flex  flex-row-reverse">
                            <div className="text-cyan-400">
                                <ContactSupportOutlinedIcon />
                            </div>
                            <div className="lg:mr-10  mr-2">
                                {item.comment}
                            </div>
                        </div>
                        <div className="flex flex-col pb-2 pt-2 gap-3"> 
                            <div className="flex flex-row-reverse items-center">
                                <p className="text-gray-400 lg:text-xs ml-10">پاسخ</p>
                                <p className="lg:text-sm text-gray-600">{item.respond}</p>
                            </div>
                            <div className="flex  flex-row-reverse text-xs text-gray-600 lg:mr-16">
                                {item.name}
                            </div>
                            <div className="flex  flex-row-reverse">
                            <div className="mr-16 hidden lg:block text-green-600 bg-green-100 p-1 w-fit lg:text-xs rounded-2xl">
                                {item.buy ? "خریدار" : "فروشنده"}
                            </div>
                            </div>

                        </div>
                        </div>
                        
                        
                    ))}
                </div>
            </ScrollContainer>
            
        </div>
        </>
    )
}