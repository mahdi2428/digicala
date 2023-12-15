import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Box5(){
    return(
        <>
        <ScrollContainer className="flex whitespace-nowrap px-2 lg:px-0 lg:justify-around flex-row-reverse border-b-4 mb-7 pb-5 mt-7 lg:px-3 lg:pt-5 text-xs items-center lg:border-t gap-5 text-gray-400 ">
        
            <div className="flex lg:flex-row flex-col-reverse items-center">
                <p>امکان تحویل اکسپرس</p>
                <img className="lg:w-12" src="https://www.digikala.com/statics/img/svg/infosection/express-delivery.svg"/>
            </div>
            <div className="flex  lg:flex-row flex-col-reverse items-center">
                <p>۲۴ساعته،۷روزهفته</p>
                <img className="lg:w-12" src="https://www.digikala.com/statics/img/svg/infosection/support.svg"/>
            </div>
            <div className="flex  lg:flex-row flex-col-reverse items-center">
                <p>امکان پرداخت در محل </p>
                <img className="lg:w-12" src="https://www.digikala.com/statics/img/svg/infosection/cash-on-delivery.svg"/>
            </div>
            <div className="flex lg:flex-row flex-col-reverse items-center">
                <p>هفت روز ضمانت بازگشت کالا</p>
                <img className="lg:w-12" src="https://www.digikala.com/statics/img/svg/infosection/days-return.svg"/>
            </div>
            <div className="flex lg:flex-row flex-col-reverse items-center">
                <p>ضمانت اصل بودن کالا</p>
                <img className="lg:w-12" src="https://www.digikala.com/statics/img/svg/infosection/original-products.svg"/>  
              
            </div>
        
        </ScrollContainer>
        </>
    )
}