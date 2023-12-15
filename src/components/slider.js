import React, { useState } from "react";
import {RxDotFilled} from "react-icons/rx"
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
export default function Slider(){
    const img = [
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/ac84bef8ee9d1b5056bbc95b4671f6160a2573e6_1697622661.jpg?x-oss-process=image/quality,q_95/format,webp",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/98e4a137a358bf33457af3440fe8903d704b9113_1698137210.jpg?x-oss-process=image/quality,q_95/format,webp",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/7938d7c4e7672bd8cedf6bce7e2086cb11fa3f46_1698057063.jpg?x-oss-process=image/quality,q_95/format,webp",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/6f8a3b5da23f8b84b6c5a2ab1063ba87fe8c96f2_1698092383.jpg?x-oss-process=image/quality,q_95/format,webp",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/c7e35767ec30f4e31d8c50e05bb819bcbe26d2ba_1698049849.jpg?x-oss-process=image/quality,q_95/format,webp",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/dcae770030888388e134514dbae645a2e95617b8_1699114078.jpg?x-oss-process=image/quality,q_95/format,webp",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/28610e48d11c6d1a828858d872bc1bbf38054c69_1699105126.gif?x-oss-process=image?x-oss-process=image/format,webp",

    ]

    const [showimg , setShowimg] = useState(0);
    
    const nextimg= ()=> {
        setShowimg(showimg === 6 ? 0 : showimg + 1)
        
    }  
    
    const pervimg= ()=> {
        setShowimg(showimg === 0 ? 6 : showimg - 1)
       
    }  
    
    setTimeout(nextimg, 10000);
    return(
        <>
        <div className="group relative  lg:block lg:mt-[132px] w-full">
            <img className=" h-96 lg:h-full object-cover " src={img[showimg]} />
            <div className=" text-white hidden group-hover:lg:block transition-transform duration-700  absolute right-[5%] top-[80%] ">
                <ArrowCircleLeftOutlinedIcon onClick={pervimg}  className="cursor-pointer"  sx={{ fontSize:"50px"}}/>
                <ArrowCircleRightOutlinedIcon onClick={nextimg} className="cursor-pointer" sx={{ fontSize:"50px"}} />
            </div>
            <div className="flex top-4 justify-center py-2 absolute top-[90%]  left-[42%] lg:left-[49%]">
            {img.map((img , imgN) => (
                <div className=" text-gray-600 text-2xl  cursor-pointer duration-500"
                key={img}
                onClick={()=>setShowimg(imgN) 
                }>
                    <RxDotFilled fontSize="small" />
                </div>
                
            ))}
            </div>    
        </div>
        </>
    )
}