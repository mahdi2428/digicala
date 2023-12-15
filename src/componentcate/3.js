import React from "react";
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import { Title } from "@mui/icons-material";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
export default function Box3(){
    const data = [
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1699707575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل شیائومی مدل Redmi 12C دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - پک اندونزی",
            send : "ارسال رایگان",
            price : "4,599,000",
            dis : "8%",
        },
    ]
    return(
        <>
        <div>
            <div className="flex font-normal text-xs border-b justify-between  text-gray-400">
                <div className="flex gap-2"><p> کالا </p> <span>400</span></div>
                <div className="lg:flex gap-5 hidden">
                    <p>منتخب</p>
                    <p>گران ترین</p>
                    <p>ارزان ترین</p>
                    <p>جدیدترین</p>
                    <p>پربازدیدترین</p>
                    <p>مرتبط ترین</p>
                    <p>پرفروش ترین</p>
                    <div className="flex text-black">
                       <p> :مرتب سازی </p>
                       <div><SortOutlinedIcon /></div> 
                    </div>
                </div> 
            </div>
            <div>
                    <div className="flex lg:hidden text-black">
                        <p> :مرتب سازی </p>
                        <div><SortOutlinedIcon /></div> 
                    </div>
                </div>
            <div className="md:flex flex-wrap hidden mt-2">
                {data.map((item)=>(
                    <>
                    <div className="flex transition-all duration-500 hover:shadow-2xl gap-2 flex-col text-right 2xl:w-60 xl:w-96 lg:ml-4 lg:w-80 w-60 border p-2 m-1 rounded-2xl ">
                        <div className="w-52 lg:w-72 xl:w-60 xl:ml-9 2xl:ml-0 2xl:w-52"><img src={item.img} /></div>
                        <div className="flex justify-end items-center text-right">
                            <p className="text-gray-500 text-xs">{item.send}</p>
                            <div className="text-red-500"><LocalShippingOutlinedIcon fontSize="small"/></div>
                        </div>
                        <p>{item.title.substring(0,50)}</p>
                        <div className="flex items-center">
                            <span className="text-[10px]">تومان</span>
                            <p className="text-gray-700">{item.price}</p>
                        </div>
                        
                    </div>
                    </>
                ))}
            </div>
            <div className="flex md:hidden flex-wrap justify-center gap-2 mt-3  ">
                {data.map((item)=>(
                    <>
                    <div className=" flex flex-row-reverse w-80 border-b pb-2">
                        
                        <div className="w-52"><img src={item.img} /></div>
                        <div className="">
                        <div className="flex justify-end items-center text-right">
                            <p className="text-gray-500 text-xs">{item.send}</p>
                            <div className="text-red-500"><LocalShippingOutlinedIcon fontSize="small"/></div>
                        </div>
                        <p className="text-right">{item.title.substring(0,50)}</p>
                        <div className="text-right">{item.dis}</div>
                        <div className="flex items-center">
                            <span className="text-[10px]">تومان</span>
                            <p className="text-gray-700">{item.price}</p>
                        </div>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </div>
        </>
    )
}