import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
export default function Coloredbox(){
    const data = [
        "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/3a63f670d204d8bb6e8236344f6650a28a93b24c_1694962603.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "./img/head.jpg",
        "https://dkstatics-public.digikala.com/digikala-products/e9627d81b6f04d53f788280cb6eafdd64b2b8db8_1692040384.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/19566c32d6401b14c1b7157f37a05ee5fcc3e7ec_1625374856.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/f1c52ab36a753464bb6a17919f6b3f781acc44b5_1684135768.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",

    ]
    const data2 =[
        "https://dkstatics-public.digikala.com/digikala-products/e653310af0d91f1a1af91ec44fb9a6993e51e38f_1598187909.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "./img/phone1.jpg",
        "./img/mac.jpg",
        "https://dkstatics-public.digikala.com/digikala-products/e10938a8268399a90fdae8e245015cf765753be4_1613486389.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",

    ]
    return(
        <>
        <div className="bg-purple-700 xl:mx-[250px] mt-10 flex flex-col text-right lg:flex-row-reverse mx-5 rounded-xl">
            <div className=" pt-3 pr-3 ">
                <div className="text-white flex flex-col gap-4"> 
                    <div className="flex flex-row-reverse mb-1"><img src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg" /></div>
                    <div className="mb-2 "><p>خدمات ویژه برای اعضای دیجی‌پلاس</p></div>
                    <div>
                        <Link className="flex flex-row-reverse ">
                            <div className=" flex  border rounded-2xl px-2 py-1">
                            <div>
                                <ArrowBackIcon />
                            </div>
                            <p>عضویت</p>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-32"><img src="./img/delevring.png"/></div>
                    </div>
                </div>

            </div>
            <div className="bg-white rounded-2xl m-4">
            <div className="  flex flex-row-reverse p-2 justify-between ">
                <div className="flex items-center ">
                    <p>ارسال فوری</p>
                    <div className="text-purple-400"><WatchLaterOutlinedIcon fontSize="small" /></div>
                </div>
                <div className="flex flex-row-reverse text-sm text-purple-400">
                    <p>مشاهده همه</p>
                    <div><NavigateBeforeOutlinedIcon /></div>
                </div>
                </div>
                <div className="md:flex hidden gap-8 pt-2 ">
                    {data.map((item)=>(
                        <>
                        <div className=" 2xl:w-40 lg:w-24  " >
                            <img className="object-contain" src={item} />
                        </div>
                        
                        </>
                    ))}
                </div>
                <div className="md:flex md:mb-5 hidden gap-8 pt-2">
                {data2.map((item)=>(
                        <>
                        <div className="2xl:w-40 w-24 ">
                            <img className="pb-2" src={item} />
                        </div>
                        </>
                    ))}
                </div>
                <div className="flex w-20  mb-4 md:hidden">
                    <img src={data[0]} />
                    <img src={data[1]} />
                    <img src={data[2]} />
                </div>
            </div>
            
        </div>
        </>
    )
}