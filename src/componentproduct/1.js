import React from "react";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
export default function Box1(){
    return(
        <>
        <div className="mt-[130px] ">
            <div className="flex justify-between text-xs text-gray-500 mx-[150px]">
                <div className="flex gap-3 ">
                    <div className="hidden lg:flex gap-2 items-center">
                        <div><StoreOutlinedIcon /></div>
                        <p className="">فروش در دیجی کالا</p>
                    </div>
                    <div className="hidden lg:flex flex gap-2 items-center">
                        <div><CampaignOutlinedIcon /></div>
                        <p>ثبت آگهی در پیندو</p>
                    </div>
                </div>
                <div className="whitespace-nowrap ">
                    <span>دیجی کالا</span>/
                    <span> موبایل </span>/
                    <span> گوشی موبایل</span>
                </div>
            </div>
        </div>
        </>
    )
}