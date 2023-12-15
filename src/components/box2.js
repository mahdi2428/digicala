import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Box2(){
    const data=[
        {        
            img:"https://dkstatics-public.digikala.com/digikala-products/a71582401ee8ea3a64faacdcb6f6a90af5b0d274_1658206463.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            dis : "۱۵%"
        },
        {
            img :"https://dkstatics-public.digikala.com/digikala-products/896e6c380113e7e2a2844aff37b174022a6f922e_1671450649.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            dis :"۴۵%"
        },
        {
            img :"https://dkstatics-public.digikala.com/digikala-products/28c9eb4b2db858cc3b91a5d3e056010b7b59627a_1695451476.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            dis : "۱۴%"
        },
        {
            img :"https://dkstatics-public.digikala.com/digikala-products/00ddf37c8bbea1c538921fcb37bc763e914f77c9_1692686082.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            dis : "۲۹%"
        },
        {
            img :"https://dkstatics-public.digikala.com/digikala-products/cffab436dc833a92a841aa3405a3731a5b1eb4ae_1680692026.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            dis : "۲۷%"
        },
        {
            img :"https://dkstatics-public.digikala.com/digikala-products/974a5b62fa37f9a3c3c7cfe769ab85ab715b877a_1695451549.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            dis : "۱۳%"
        }

    ]
    return(
        <>
            <div className="flex flex-col lg:flex-row-reverse flex-row-reverse bg-gray-200 justify-between xl:mx-[150px] mt-10 p-3 rounded-2xl ">
                <div className="flex  mx-3 lg:flex-row items-center justify-evenly  gap-8  ">
                    <p className="hidden lg:block bg-green-400 rounded-2xl px-2 py-1 text-lg text-white font-bold ">تا <span> %۴۵ </span>تخفیف</p>
                    <img src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" />
                    <img src="https://www.digikala.com/statics/img/png/amazing/fresh.webp"/>
                </div>
                <div className="flex flex-row-reverse justify-between w-96 xl:w-full xl:justify-end gap-2 items-center">
                    {data.map((item)=>(
                        <div key={item} className="relative ">
                            <img className="w-20 p-1 bg-white rounded-full" src={item.img}/>
                            <span className="bg-red-600 text-xs text-white rounded-full p-1 top-[70%] right-[8%] absolute">{item.dis}</span>
                        </div>

                    ))}
                    <div className="flex lg:w-40 flex-row-reverse text-green-400 items-center align-center bg-white h-12 lg:mt-4 px-2  rounded-full text-sm ">
                        <p className="hidden  lg:block">بیش از ۱۰۰ کالا</p>
                        <span className="pb-[3px]"><ArrowBackIcon fontSize="small" /></span>
                    </div>
                </div>

            </div>
        </>
    )
}