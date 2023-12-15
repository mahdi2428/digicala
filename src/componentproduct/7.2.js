import React from "react";

export default function Box71(){
    const data1 =[
        {
            abad : "۸.۹۵×۷۷.۶×۱۶۵.۶ میلی‌متر",
            simcard : " سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)",
            vizhgi : "مجهز به حس‌گر اثرانگشت",
            simnum : "دو عدد",
            model:"X۱۰ Plus",
            cate : " اقتصادی",
            trashe : "SC۹۸۶۳A Chipset",
            cpu: "Octa Core",
            noyecpu : " ۶۴ بیتی",
            freqans : "۱.۶ گیگاهرتز",

        }
    ]
    return(
        <>
        <div className="hidden lg:flex flex-col border-b-2 pb-2" >
                    <div className="flex flex-row-reverse">
                        <div>
                        <p className="border-b-2 text-right border-red-600 pb-2">مشخصات</p>
                        <p className="mt-10">مشخصات کلی</p>
                        </div>
                    </div>
                    <div className="">
                    {data1.map((item)=>(
                        
                        <><div className="flex flex-row-reverse ">
                            

                        <div className="flex flex-col pt-1 gap-5 items-end">
                        
                        <div className="mr-72 flex  gap-5">
                            <span>{item.abad}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.simcard}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                        <span>{item.vizhgi}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                        <span>{item.simnum}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                        <span>{item.model}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                        <span>{item.cate}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.trashe}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.cpu}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.noyecpu}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className="mr-72 flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                    </div>
                    </div>
                        </>
                    ))}
                    </div>
                </div>






                <div className=" lg:hidden pr-4 border-b-2 pb-2" >
                    <div className="flex flex-row-reverse">
                        <div>
                        <p className="border-b-2 text-right border-red-600 pb-2">مشخصات</p>
                        </div>
                    </div>
                    <div className="text-right">
                    {data1.map((item)=>(
                        
                        <><div className="flex flex-row-reverse ">
                            

                        <div className="flex flex-col text-right items-end pt-1 gap-5 ">
                        
                        <div className=" flex  gap-5">
                            <span>{item.abad}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.simcard}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                        <span>{item.vizhgi}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                        <span>{item.simnum}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                        <span>{item.model}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                        <span>{item.cate}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.trashe}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.cpu}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.noyecpu}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                        <div className=" flex gap-5">
                            <span>{item.freqans}</span>
                            <p className="text-gray-400"> :ابعاد </p>
                        </div>
                    </div>
                    </div>
                        </>
                    ))}
                    </div>
                </div>
        </>
    )
}