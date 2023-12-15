import React from "react";
import SpeedIcon from '@mui/icons-material/Speed';
import ScrollContainer from "react-indiana-drag-scroll";
export default function Box6(){
    const data = [
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },
        {
            img:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            sent : "ارسال فردا",
            sent1: true,
            price : "2,899,000",

        },

    ]
    return(
        <>
        
        <div className="border border-b-2 rounded-2xl lg:mx-[50px] xl:mx-[120px] p-5">
            <div className="flex flex-row-reverse ">
                <p className="border-b-2 border-red-400 pb-4">کالاهای مشابه</p>
            </div>
            <ScrollContainer className="flex flex-row-reverse pt-5 w-full" >
            <div className=" flex gap-5">
                            {data.map((item)=>(
                                <>
    
                                <div className="w-48 h-72 ">
                                    <div className=" border-l w-full p-2">
                                      <div>
                                            <img src={item?.img} />
                                        </div>
                                        <div className="flex">
                                            
                                            <p className="text-right text-sm">{item?.title?.substring(0,40)}...</p>
                                            
                                        </div>
                                        <div className="flex items-center flex-row-reverse ">
                                            <div className="text-blue-500 mb-1">{item?.sent1 ? <SpeedIcon fontSize="small"/> : ""}</div>
                                            <p className="text-xs text-gray-500">{item?.sent}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-[10px]">تومان</span><p>{item?.price}</p>
                                        </div>
                                    </div> 
                                </div>
                                </>
                            ))}
                        </div>
            </ScrollContainer>
        </div>
        
        </>
    )
}

