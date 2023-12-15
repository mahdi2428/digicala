import React from "react";
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
export default function Digiclup(){
    return(
        <>
        <div className="bg-gradient-to-r flex flex-col h-52 md:h-60 lg:h-52  py-2 lg:p-0 xl:mx-[250px] mt-10 rounded-2xl from-cyan-500 to-blue-500 lg:flex lg:justify-between items-center lg:flex-row-reverse">
            <div className="mr-2"><img src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg" /></div>
            <div className="flex flex-row-reverse py-2 h-24  xl:w-full xl:justify-between ">
                <div className="rounded-r-2xl flex mx-1 lg:mx-2 h-32 bg-white flex-col lg:flex-row-reverse lg:p-1 ">
                    <div className="flex items-center flex-col  lg:flex-row">
                    <div className="text-blue-300"><DataSaverOffOutlinedIcon fontSize="small"/></div>
                    <p className="lg:text-sm text-center text-xs">چرخ و بخت</p>
                    </div>
                    <div>
                    <img className="h-full w-full " src="https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.webp"/>
                    </div>
                </div>

                <div className=" flex mx-2 flex mx-1 lg:mx-2 h-32 bg-white flex-col lg:flex-row-reverse lg:p-1">
                    <div className="flex items-center flex-col  lg:flex-row">
                        <div className="text-blue-300"><CurrencyExchangeOutlinedIcon fontSize="small"/></div>
                        <p className="text-sm">ماموریت ها </p>
                    </div>
                    <div>
                        <img className="h-full w-full "  src=" https://www.digikala.com/statics/img/png/digiclub/missions.webp " />
                    </div>
                </div>
                <div className="rounded-l-2xl flex mx-1 lg:mx-2 h-32 bg-white flex-col lg:flex-row-reverse lg:p-1">
                    <div className="flex items-center flex-col  lg:flex-row flex items-center">
                    <div className="text-blue-300"><LocalOfferOutlinedIcon fontSize="small"/></div>
                    <p className="text-sm">جایزه ها</p>
                    </div>
                    <div>
                    <img className="rounded h-full w-full " src="https://www.digikala.com/statics/img/png/digiclub/awards.webp" />
                    </div>
                </div>
            </div>
        </div>  
        </>
        
    )
}