import React, { useEffect, useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import "../componentproduct/7"
import './navbar2.css'

import Menu from "./menu";
export default function Navbar2(){
   
    const [show , setShow] = useState(false)
    let pervscroopos = 0;

    window.onscroll=function() {
        let currentscrollpos = window.pageYOffset;
        
        if(pervscroopos > currentscrollpos){
            document.getElementById("navbar").style.top = "70px";
            document.getElementById("navbar").style.boxShadow = "";

        }else{
            document.getElementById("navbar").style.top = "-50px";
            document.getElementById("navbar").style.boxShadow = "0 5px 2px 0 rgb(0 0 0 / 0.05)";

        }
        pervscroopos=currentscrollpos;
    }
    return(
        <>
        <div className="mb-10 lg:block hidden  relative ">
            <div className="shadow-sm border-b top-[70px] xl:pl-[100px] xl:pr-[100px] xl:p-[10px] whitespace-nowrap " id="navbar">
            <div className="flex text-[10px] xl:text-sm gap-2 items-center text-gray-600 pl-10">
                <p>لطفا شهر خود را انتخاب کنید</p>
                <LocationOnOutlinedIcon />
            </div>
            <div className="flex text-[10px] xl:text-xs text-gray-500  gap-4">
                <div className="flex  items-center gap-4">
                    <div className="flex cursor-pointer">
                        <p>!در دیجی کالا بفروشید</p>
                    </div>
                    <div className="flex cursor-pointer">
                        <p>سوالی دارید؟</p>
                    </div>
                    <div className="flex items-center border-l pl-3 gap-1 cursor-pointer hover:underline hover:decoration-red-600 ">
                        <p>تخفیف ها و پیشنهادها</p>
                        <LocalOfferOutlinedIcon />
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer hover:underline hover:decoration-red-600">
                        <p>پرفروش ترین ها</p>
                        <BubbleChartOutlinedIcon />
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer hover:underline hover:decoration-red-600">
                        <p>کارت هدیه</p>
                        <CardGiftcardOutlinedIcon />
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer hover:underline hover:decoration-red-600">
                        <p>سوپر مارکت</p>
                        <StorefrontOutlinedIcon />
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer  hover:underline hover:decoration-red-600">
                        <p>شگفت انگیزها</p>
                        <PercentRoundedIcon />
                    </div>
                </div>
                
                <div className=" group1 font-bold text-[10px]  xl:text-xs items-center text-gray-900 border-l pl-2  hover:underline hover:decoration-red-600 cursor-pointer">
                    <div className="flex group-hover:flex items-center relative">
                    <p>دسته بندی کالاها</p>
                    <MenuOutlinedIcon />
                    </div>
                    <div className="group11">
                        <Menu />
                    </div>
   
                </div>

            </div>
            </div>
        </div>
        </>
    )
}