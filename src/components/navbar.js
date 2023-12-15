import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export default function Navbar(){

    return(
        <>
            <div className=" bg-white top-0 fixed w-full z-10 py-4 lx:px-[110px]">
                <div className="text-sm  lg:flex mx-7 items-center  justify-between">
                    <div className="lg:flex gap-4 items-center lg:block hidden">
                        <div><ShoppingCartOutlinedIcon  /></div>
                        <div className="border-l pl-5">
                            <button className="flex border border-gray-300 gap-2 p-2 rounded-xl ">
                                <p className="border-r-2 border-black pr-2">ثبت نام</p>
                                <p className="">ورود</p>
                                <div><LoginOutlinedIcon /></div>
                            </button>
                        </div>    
                    </div>
                    <div className="lg:flex gap-6 items-center">
                        <div className="relative block lg:flex">
                            <div ><input className="pb-2 w-full lg:w-96 h-9 bg-gray-200 focus:outline-none text-right rounded-lg pr-6" type="search" placeholder="جستجو" /></div>
                            <div className="absolute top-1  right-1 text-gray-400"><SearchOutlinedIcon /></div>
                        </div>
                        <div className="lg:block hidden"><img src="./img/logo.svg" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}