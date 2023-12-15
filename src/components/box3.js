import React,{useRef} from "react";
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Box3(){
    const data = [
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "گوشی موبایل"
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/9fd5544c8eb344fb46453096ae66b69982ac82c4_1694441941.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : " ...هدفون،هدست و"
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/537140d50eb3a917f4f621041a32d5bd57cdca70_1644384374.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "جوراب مردانه "
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/d1476a05bc84a98521a53fad140efa060a6c1bf9_1605099191.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "کنسول خانگی "
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/3959bb7dc58b11a75c83f9dd7d23fa2916f093c4_1689688190.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "پاوربانک (شارژر همراه)"
        },
        {
            img : "./img/bag.jpg",
            title : "کیف و کوله مدرسه"
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/8948c22b78a85ec54c944d842da991804b942927_1632295762.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "اسپیکر (بندگو)"
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/622d09e82936de99de864b89d05186b8cf3ec50a_1692513355.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "کیف و کاور گوشی "
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/d1cb507caec66d5bd3617c00fe2cd43b2d696d35_1677521583.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "ساعت هوشمند"
        },
        {
            img : "./img/labtop.jpg",
            title : " لپ تاپ و الترابوک"
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/0333a923f53d59fac216d97b7e7b2618531fa10d_1672647946.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "تبلت "
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/81cf5ef22d42b5b8170c9f794efcbac718b8ce3e_1657953454.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "کابل و مبدل "
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/114000427.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "اصلاح موی صورت "
        },
        {
            img : "https://dkstatics-public.digikala.com/digikala-products/fcae0925078e8ed3d2c93c6169d4927cb74c87ba_1696232830.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title : "... پایه نگهداری گوشی و "
        },
    ]
 
    return(
        <>
        <div className="flex justify-center mb-5 lg:text-2xl font-bold mt-10">
            <p> پیشنهاد دیجی کالا</p>
        </div>
        <div className="lg:flex hidden flex-row-reverse flex-wrap justify-center md:mx-[0] xl:mx-[150px] 2xl:mx-[320px]"> 
            {data.map((item ) => (
                <>
                
                    <div className="flex flex-col  border w-40 p-3 gap-3 items-center ">
                        <div className="p-3 ">
                            <img  className="w-full  " src={item.img} /> 
                        </div>
                        
                        <p className="text-xs">{item.title}</p>
                    </div>
           
                </>
            ))}
        </div>
        
        
        <ScrollContainer className=" lg:hidden mx-2 flex flex-row-reverse overflow-hidden  ">
            {data.map((item ) => (
                <>
                
                    <span className="flex border p-2 flex-col items-center">
                        <div className=" w-40 p-3">
                            <img  className="  " src={item.img} /> 
                        </div>
                        
                        <p className="text-xs">{item.title}</p>
                    </span>
           
                </>
            ))}
        
        </ScrollContainer>
        </>
    )
}