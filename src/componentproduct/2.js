import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
export default function Box2(){
    return(
        <>
        <div className="lg:w-96 ">
        <div className="flex items-center justify-center">
            <div className="lg:w-[550px] flex justify-center w-[500px]">
                <img src="https://dkstatics-public.digikala.com/digikala-products/10b3ddf4ed5afd60ba74e4d5e2c1866d79716c7f_1675155251.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" />
            </div>
            <div className="hidden  lg:flex flex-col gap-2">
                <div className="group relative">
                    <FavoriteBorderOutlinedIcon/>
                    <div className="group-hover:block hidden absolute whitespace-nowrap right-8 bg-gray-700 text-white py-4 px-3 rounded-xl text-xs top-[-10px]"><p>افزودن به علاقه مندی</p></div>
                </div>
                <div className="group relative">
                    <ShareOutlinedIcon />
                    <div className="group-hover:block hidden absolute whitespace-nowrap right-8 bg-gray-700 text-white py-4 px-3 rounded-xl text-xs top-[-10px]"><p>به اشتراک گذاری کالا</p></div>
                </div>
                <div className="group relative">
                    <NotificationsNoneOutlinedIcon />
                    <div className="group-hover:block hidden absolute whitespace-nowrap right-8 bg-gray-700 text-white py-4 px-3 rounded-xl text-xs top-[-10px]"><p>اطلاع رسانی شگفت انگیز</p></div>
                </div>
                <div className="group relative">
                    <QueryStatsOutlinedIcon />
                    <div className="group-hover:block hidden absolute whitespace-nowrap right-8 bg-gray-700 text-white py-4 px-3 rounded-xl text-xs top-[-10px]"><p>نمودار قیمت</p></div>
                </div>
                <div className="group relative">
                    <CompareOutlinedIcon />
                    <div className="group-hover:block hidden absolute whitespace-nowrap right-8 bg-gray-700 text-white py-4 px-3 rounded-xl text-xs top-[-10px]"><p>مقایسه کالا</p></div>
                </div>
                <div className="group relative">
                    <TocOutlinedIcon />
                    <div className="group-hover:block hidden absolute whitespace-nowrap right-8 bg-gray-700 text-white py-4 px-3 rounded-xl text-xs top-[-10px]"><p>افزودن به لیست </p></div>
                </div>
            </div>
        </div>
        <div className="hidden lg:flex mt-3 gap-1 ml-4 ">
            <div className="w-24 border rounded-2xl"><img className="p-2" src="https://dkstatics-public.digikala.com/digikala-products/9c80b441b843e2b52aeef263ad37a529ed1442fd_1675155244.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"/></div>
            <div className="w-24 border rounded-2xl"><img className="p-2" src="https://dkstatics-public.digikala.com/digikala-products/9c80b441b843e2b52aeef263ad37a529ed1442fd_1675155244.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"/></div>
            <div className="w-24 border rounded-2xl"><img className="p-2" src="https://dkstatics-public.digikala.com/digikala-products/9c80b441b843e2b52aeef263ad37a529ed1442fd_1675155244.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"/></div>
            <div className="w-24 border rounded-2xl"><img className="p-2" src="https://dkstatics-public.digikala.com/digikala-products/9c80b441b843e2b52aeef263ad37a529ed1442fd_1675155244.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"/></div>
            <div className="w-24 border rounded-2xl"><img className="p-2" src="https://dkstatics-public.digikala.com/digikala-products/9c80b441b843e2b52aeef263ad37a529ed1442fd_1675155244.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"/></div>
        </div>
        </div>
        </>
    )
}