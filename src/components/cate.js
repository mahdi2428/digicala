import React from "react";

export default function Cate(){
    const data = [
        {
            Img:"https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png",
            title :  "موبایل "
        },
        {
            Img:"https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png",
            title :  "کالای دیجیتال "
        },
        {
            Img:"./img/cat.png",
            title :  "خانه و آشپزخانه "
        },
        {
            Img:"https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png",
            title :  "مد و پوشاک "
        },
        {
            Img:"./img/milk.png",
            title :  "کالاهای سوپرمارکتی "
        },
        {
            Img:"https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png",
            title :  "کتاب،لوازم تحریر و هنر "
        },
        {
            Img:"https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
            title :  "اسباب بازی، کودک و نوزاد "
        },

    ]
    const data2 = [
        {
            Img:"./img/shiver.png",
            title :  "زیبایی و سلامت "
        },
        {
            Img:"https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png",
            title :  "ورزش و سفر "
        },
        {
            Img:"https://dkstatics-public.digikala.com/digikala-categories/5d89d5b168e5ed079d619181e849cc737ec42c8d_1678698730.png",
            title :  "ابزار آلات و تجهیزات "
        },
        {
            Img:"./img/car.png",
            title :  "خودرو و موتورسیکلت "
        },
        {
            Img:"./img/purse.png",
            title :  "محصولات بومی و محلی "
        },
        {
            Img:"https://dkstatics-public.digikala.com/digikala-categories/20c179dff5c513104599d33858b6b11e77ced9b4_1692795916.png",
            title :  "کارت هدیه "
        },
    ]
    return(
        <>
        <div className="mt-10 flex flex-col ">
            <div className="flex justify-center mb-5">
                <h1 className="xl:text-3xl">
                خرید بر اساس دسته‌بندی
                </h1>
            </div>
            <div className=" hidden xl:flex flex-wrap flex-row-reverse justify-between xl:mx-[150px] ">
                {data.map((item) => (
                    <>
                    <div className="flex flex-col items-center">
                        <img className="w-28" src={item.Img}/>
                        <p className="text-sm">{item.title}</p>
                    </div>
                    </>
                ))}
                
            </div>
            <div className="hidden xl:flex flex-row-reverse flex-wrap justify-between xl:mx-[250px] mt-4">
                {data2.map((item)=>(
                    <>
                    <div className="flex flex-col items-center">
                        <img className="w-28" src={item.Img} />
                        <span className="text-sm">{item.title}</span>
                    </div>
                    </>
                ))}
                
            </div>
            <div className="ml-[14px]">
            <div className="flex  flex-wrap flex-row-reverse gap-5 xl:hidden items-center w-[300px] sm:w[340px] md:w-[640px] lg:w-[800px] lg:ml-32">
                {data2.map((item)=>(
                    <>      
                    <div className="flex  justify-between flex-col items-center align-center">
                        <img className="w-28" src={item.Img}/>
                        <p className="text-xs">{item.title}</p>
                    </div>
                    </>
                ))}
                {data.map((item)=>(
                    <>                    
                    <div className="flex  flex-col items-center align-center">
                        <img className="w-28" src={item.Img}/>
                        <p className="text-xs">{item.title}</p>
                    </div>
                    </>

                ))} 
            </div>
            </div>
        </div>
        </>
    )
}