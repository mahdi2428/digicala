import { debounce } from "@mui/material";
import React from "react";

export default function Img(){
    return(
        <>
        <div className="flex gap-7 justify-evenly flex-row-reverse xl:mx-[150px] mt-10 ">
            <div className="flex xl:justify-evenly xl:w-full flex-col xl:flex-row gap-7">
                <img className="rounded-xl xl:h-64 xl:w-[380px]" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/5a335bd497a205179f8f53077cf95ea8f8b4df78_1698155094.jpg?x-oss-process=image/quality,q_95/format,webp"/>
                <img className="rounded-xl xl:h-64 xl:w-[380px]" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/164f9cf2a348e6c193d979aa148463a8b44b9d21_1698502368.jpg?x-oss-process=image/quality,q_95/format,webp" />
            </div>
            <div className="flex xl:justify-evenly xl:w-full flex-col xl:flex-row gap-7">
                <img className="rounded-xl xl:h-64 xl:w-[380px]" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a6ade034cb973ebd9ba6ec928ed7ceb8d10a8601_1698501916.gif?x-oss-process=image?x-oss-process=image/format,webp"/>
                <img className="rounded-xl xl:h-64 xl:w-[380px]" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/58b5e56556b98ef3d206370b9c3291f1ce1f004b_1698002290.jpg?x-oss-process=image/quality,q_95/format,webp"/>
            </div>    
        </div>
        </>
    )
}