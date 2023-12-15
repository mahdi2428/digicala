import React,{useRef } from "react";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ScrollContainer from 'react-indiana-drag-scroll'
export default function Box1(e){
    const data =[ 
        {
            id:1,
            img: "https://dkstatics-public.digikala.com/digikala-products/7130937dfdea6fd8138ffe0a93c5136a08af54c1_1671623122.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            discount : "۱۰%" ,
            price : "۴,۴۹۹,۰۰۰",
            oldprice : "۴,۴۹۹,۰۰۰",
        },
        {
            id:1,
            img: "https://dkstatics-public.digikala.com/digikala-products/7130937dfdea6fd8138ffe0a93c5136a08af54c1_1671623122.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            discount : "۱۰%" ,
            price : "۴,۴۹۹,۰۰۰",
            oldprice : "۴,۴۹۹,۰۰۰",
        },
        {
            id:1,
            img: "https://dkstatics-public.digikala.com/digikala-products/7130937dfdea6fd8138ffe0a93c5136a08af54c1_1671623122.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            discount : "۱۰%" ,
            price : "۴,۴۹۹,۰۰۰",
            oldprice : "۴,۴۹۹,۰۰۰",
        },
        {
            id:1,
            img: "https://dkstatics-public.digikala.com/digikala-products/7130937dfdea6fd8138ffe0a93c5136a08af54c1_1671623122.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            discount : "۱۰%" ,
            price : "۴,۴۹۹,۰۰۰",
            oldprice : "۴,۴۹۹,۰۰۰",
        },
        {
            id:1,
            img: "https://dkstatics-public.digikala.com/digikala-products/7130937dfdea6fd8138ffe0a93c5136a08af54c1_1671623122.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            discount : "۱۰%" ,
            price : "۴,۴۹۹,۰۰۰",
            oldprice : "۴,۴۹۹,۰۰۰",
        },
        {
            id:1,
            img: "https://dkstatics-public.digikala.com/digikala-products/7130937dfdea6fd8138ffe0a93c5136a08af54c1_1671623122.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            discount : "۱۰%" ,
            price : "۴,۴۹۹,۰۰۰",
            oldprice : "۴,۴۹۹,۰۰۰",
        },
        {
            id:1,
            img: "https://dkstatics-public.digikala.com/digikala-products/7130937dfdea6fd8138ffe0a93c5136a08af54c1_1671623122.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            discount : "۱۰%" ,
            price : "۴,۴۹۹,۰۰۰",
            oldprice : "۴,۴۹۹,۰۰۰",
        },
        {
            id:1,
            img: "https://dkstatics-public.digikala.com/digikala-products/7130937dfdea6fd8138ffe0a93c5136a08af54c1_1671623122.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            discount : "۱۰%" ,
            price : "۴,۴۹۹,۰۰۰",
            oldprice : "۴,۴۹۹,۰۰۰",
        },
        

    ]
   
    return(
        <>
        <div className="relative ">
            
        <div>
            <ScrollContainer onClick={(e ,v ) => console.log(e)} className=" bg-red-500 mx-1 md:mx-4 xl:mx-[150px] mt-10 rounded-2xl flex flex-row-reverse  h-[280px] " >
                <div className="flex flex-col  items-center p-4">
                    <div className="w-24">
                        <img className="" src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" />
                        <img className="" src="https://www.digikala.com/statics/img/png/specialCarousel/box.webp"/>
                    </div>
                    <div className="flex text-white  items-center pt-4">
                        <KeyboardArrowLeftRoundedIcon fontSize="small" />
                        <p className="text-xs font-bold">مشاهده بیشتر</p>
                    </div>
                </div>
                {data.map((item) => (
                    <div className="bg-white m-[2px] my-2 rounded-2xl" key={item.id}>
                        <div className="m-2" >
                            <img className="w-52" src={item.img} />
                        </div>
                        <div className="flex justify-between mx-8">
                            <div className="flex flex-row-reverse items-center gap-1">
                                <span>{item.price}</span>
                                <span className="text-xs">تومان</span>
                            </div>
                            <span className="text-white bg-red-500 rounded-full w-8 flex justify-center text-sm items-center">{item.discount}</span>
                        </div>
                        <div className="ml-9">
                            <span className="text-xs text-gray-400 line-through">{item.oldprice}</span>
                        </div>
                        
                    </div>
                )) }
                <div className="xl:block hidden">
                    <div className="top-[46%]  cursor-pointer left-[8.5%] p-[8px] bg-white text-gray-300 border-2 absolute rounded-full border-gray-300">
                        <KeyboardArrowLeftOutlinedIcon />
                    </div>
                    <div className="top-[46%] cursor-pointer right-[8.5%] p-[8px] bg-white text-gray-300 border-2 absolute rounded-full border-gray-300">
                        <KeyboardArrowRightOutlinedIcon />
                    </div>
                </div>
                </ScrollContainer>
        </div>
        
        </div>
        </>
    )
}