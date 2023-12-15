import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
export default function Reading(){
    return(
        <>
            <div className="lg:mx-[150px] md:mx-14 mt-10  ">
                <div className="flex flex-row-reverse mb-3 lg:mb-0 justify-between lg:text-sm text-xs">
                    <p>خواندنی‌ها</p>
                    <Link  className="text-blue-300 flex flex-row-reverse items-center">
                    <p className="lg:text-sm text-xs">مطالب بیشتر در دیجی‌کالا مگ</p>
                    <ArrowBackIosNewOutlinedIcon fontSize="" />
                    </Link>
                </div>
                <div className="flex flex-col-reverse lg:flex-row-reverse mx-2 gap-3">
                    <div className="border rounded-2xl ">
                        <img  className="rounded-t-2xl" src="https://www.digikala.com/mag/wp-content/uploads/2023/10/Best-Xiaomi-Speakers-81.png" />
                        <p className="text-sm text-right p-2 pb-10">راهنمای خرید بهترین اسپیکر شیائومی؛ مدل‌های خوش‌صدای بازار</p>
                    </div>
                    <div className="border rounded-2xl ">
                        <img  className="rounded-t-2xl" src="https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-5.jpg" />
                        <p className="text-sm text-right p-2 pb-10">بررسی ماوس ردراگون M711؛ ماوس گیمینگ ارزنده</p>
                    </div>
                    <div className="border rounded-2xl">
                        <img className="rounded-t-2xl" src="https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-43.jpg" />
                        <p className="text-sm text-right p-2 pb-10">بررسی پاپوش زنانه انگلیش هوم مدل زمستانی BO10514؛ گرم و نرم</p>
                    </div>
                    <div className="border rounded-2xl ">
                        <img className="rounded-t-2xl" src="https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-13.jpg" />
                        <p className="text-sm text-right p-2 pb-10">بررسی هدفون بلوتوثی S530؛ تک‌گوش و به‌شدت ارزان</p>
                    </div>
                </div>
            </div>
        </>
    )
}