import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CampaignIcon from '@mui/icons-material/Campaign';
import SpeedIcon from '@mui/icons-material/Speed';
import ScrollContainer from 'react-indiana-drag-scroll'
export default function Box1(){
    const data = [
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            dis : "2%",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            dis : "2%",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            dis : "2%",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            dis : "2%",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            dis : "2%",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            dis : "2%",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            dis : "2%",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
        {
            img : "https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg",
            sefareshy : "سفارشی",
            img1:"https://dkstatics-public.digikala.com/digikala-products/7d54f70cbc1277b205b5263963865efe05045373_1656411594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            title : "گوشی موبایل جی پلاس مدل P10 2022 GMC-635M دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت",
            deleverytime : "ارسال فردا",
            dis : "2%",
            price : "2,899,000",
            oldprice: "2,959,000",

        },
    ]
    return(
        <>
        
            <div className="xl:mt-32 mt-20 xl:mx-[150px] mx-1">
                <div className="flex flex-row-reverse text-right text-sm text-gray-300 ">
                    <p>فروشگاه اینترنتی دیجی کالا </p><span>گوشی /</span>
                
                </div>
                <div className="text-right mt-4 mb-2 xl:mt-10 xl:mb-5"><p>گوشی موبایل</p></div>
                <div className="flex flex-row-reverse ">
                <ScrollContainer  className="xl:border overflow-hidden rounded-2xl w-full flex flex-row-reverse" >
                        <div className="flex px-2  flex-col items-center text-[12px] gap-1">
                            <div className="w-36 xl:w-full" ><img className="rounded-2xl" src="https://dkstatics-public.digikala.com/digikala-brands/d1706f65d063b973d899285d45a111e4f33dc73d_1635590502.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" /></div>
                            <p className="text-gray-400 pb-4">پیشنهاد</p>
                            <p className="pb-7">جی پلاس</p>
                            <p className="flex items-center text-blue-500 pb-6 whitespace-nowrap">
                                <div><ArrowBackIosIcon fontSize=""/></div>
                                مشاهده همه پیشنهادها
                            </p>
                            <p className="flex items-center pb-4">
                                <div className="text-purple-800"><CampaignIcon fontSize="small" /></div>
                                سفارشی
                            </p>
                        </div>
                        <div className=" flex gap-2">
                            {data.map((item)=>(
                                <>
                                <div className="text-right border-l p-4">
                                    <div className="flex justify-between flex-row-reverse">
                                            <img src={item?.img}/>
                                        <p className="flex text-[12px] ">
                                            {item?.sefareshy}
                                            <div className="text-purple-800"><CampaignIcon fontSize="small" /></div>
                                        </p>
                                    </div>
                                    <div className="w-52">
                                        <img src={item?.img1} />
                                    </div>
                                    <div className="w-52 text-[12px]  "><p>{item?.title?.substring(0,50)}</p></div>
                                    <div className="flex flex-row-reverse items-center text-[12px] mt-2">
                                        <p>{item?.deleverytime}</p>
                                        <div className="text-purple-600"><SpeedIcon fontSize="small" /></div>
                                    </div>
                                    <div className="flex justify-between items-center flex-row-reverse">
                                        <div className="bg-red-500 rounded-full">
                                        <p className=" text-white  text-[12px] w-5 mr-1" >{item?.dis}</p>
                                        </div>
                                        <div className="flex flex-row-reverse text-[14px]  items-center gap-1">
                                            <p>{item?.price}</p>
                                            <p className="text-[12px]">تومان</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="line-through text-gray-400 text-[12px] text-sm text-left">{item?.oldprice}</div>
                                    </div>
                                </div>
                                </>
                            ))}
                        </div>
                    </ScrollContainer>  
                </div>
            </div>
        
        </>
    )
}