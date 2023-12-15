import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function Head(){

    const data = [
        {
            id: 1,
            img : "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png",
            title : "دیجی‌کالا جت",
        },
        {
            id: 2,
            img : "./img/goh.png",
            title : "دیجی پی",
        },
        {
            id: 3,
            img : "https://dkstatics-public.digikala.com/digikala-bellatrix/afb3c938fd3149d7587b59919bfc500a461693a6_1695628244.png",
            title : "سوپر مارکت",
        },
        {
            id : 4,
            img : "https://dkstatics-public.digikala.com/digikala-bellatrix/53189ead935d8d5492799988577646d159c13d17_1695888594.png",
            title : "خرید برنده",
        },
        {
            id : 5,
            img : "https://dkstatics-public.digikala.com/digikala-bellatrix/0d2d0224a878f04b1b950dbcb61fec94b87d0fba_1695710628.png",
            title : "حراج سر ماه",
        },
        {
            id : 6,
            img : "https://dkstatics-public.digikala.com/digikala-bellatrix/e8c1c372a304dc7c6ed600a6d4eb017f2aaea8cd_1697297561.png",
            title : "گیم نت",
        },
        {
            id : 7,
            img : "https://dkstatics-public.digikala.com/digikala-bellatrix/d3ef1e7e6dd2189d4c1468c8998b24b4ec5bcc45_1683402274.png",
            title : "لاکی باکس",
        },


    ]
    
    return(
        <>  
        <div className="flex md:justify-between md:px-[200px] flex-row-reverse flex-wrap gap-5 mr-3 mt-10">
            {data.map((item)=>(
                <div className="flex">
                    <div key={item.id} className="flex gap-2 flex-col items-center cursor-pointer">
                        <img className="w-14 h-14" src={item.img} />
                        <p className="md:text-xs text-[10px]"> {item.title}</p>
                    </div>
                </div>
            ))}
            <div className="flex gap-2 flex-col items-center cursor-pointer"> 
                <div className="flex items-center justify-center border w-14 h-14 rounded-full bg-gray-200">
                    <MoreHorizIcon className="text-gray-500" />
                </div>
                <p className="md:text-xs text-[10px]">بیشتر</p>
            </div>
        </div>
        </>
    )
}