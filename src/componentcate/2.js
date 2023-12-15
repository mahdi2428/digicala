import "./2.css"
import React, { useState, useRef, useEffect } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SpeedIcon from '@mui/icons-material/Speed';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import Box3 from "./3";

const useClickoutside = (handler) =>{
    const domNode = useRef()

    useEffect(()=>{
        const handle = (e) =>{ 
            if(!domNode.current.contains(e.target)){
                handler()
            }
        };
        document.addEventListener("mousedown" , handle)

        return () =>{
            document.removeEventListener("mousedown" , handle)
        }
    }) 
    return domNode
}

export default function Filter(){
    




    const [list , setList]= useState(false);
    const [list1 , setList1]= useState(false);
    const [list2 , setList2]= useState(false);
    const [list3 , setList3]= useState(false);
    const [list4 , setList4]= useState(false);
    const [list5 , setList5]= useState(false);
    const [list6 , setList6]= useState(false);
    const [list7 , setList7]= useState(false);
    const [list8 , setList8]= useState(false);
    const [list9 , setList9]= useState(false);
    const [list10 , setList10]= useState(false);
    const [list11 , setList11]= useState(false);
    const [list12 , setList12]= useState(false);
    const [list13 , setList13]= useState(false);
    const [list14 , setList14]= useState(false);
    const [list15 , setList15]= useState(false);
    const [list16 , setList16]= useState(false);
    const [list17 , setList17]= useState(false);
    const [list18 , setList18]= useState(false);
    const [list19 , setList19]= useState(false);
    const [list20 , setList20]= useState(false);
    const [list21 , setList21]= useState(false);
    const [list22 , setList22]= useState(false);
    const [list23 , setList23]= useState(false);
    const [list24 , setList24]= useState(false);
    const click =()=>{setList(!list)}
    const click1 =()=>{setList1(!list1)} 
    const click2 =()=>{setList2(!list2)} 
    const click3 =()=>{setList3(!list3)}
    const click4 =()=>{setList4(!list4)} 
    const click5 =()=>{setList5(!list5)} 
    const click6 =()=>{setList6(!list6)} 
    const click7 =()=>{setList7(!list7)} 
    const click8 =()=>{setList8(!list8)} 
    const click9 =()=>{setList9(!list9)} 
    const click10 =()=>{setList10(!list10)} 
    const click11 =()=>{setList11(!list11)} 
    const click12 =()=>{setList12(!list12)} 
    const click13 =()=>{setList13(!list13)} 
    const click14 =()=>{setList14(!list14)} 
    const click15 =()=>{setList15(!list15)} 
    const click16 =()=>{setList16(!list16)} 
    const click17 =()=>{setList17(!list17)} 
    const click18 =()=>{setList18(!list18)} 
    const click19 =()=>{setList19(!list19)} 
    const click20 =()=>{setList20(!list20)} 
    const click21 =()=>{setList21(!list21)} 
    const click22 =()=>{setList22(!list22)} 
    const click23 =()=>{setList23(!list23)}  
    const click24 =()=>{setList24(!list24)} 

    
          
    const ref = useClickoutside(()=>{
        setList(false)
    })
    const ref1 = useClickoutside(()=>{
        setList1(false)
    }) 
    const ref2 = useClickoutside(()=>{
        setList2(false)
    }) 
    const ref3 = useClickoutside(()=>{
        setList3(false)
    }) 
    const ref4 = useClickoutside(()=>{
        setList4(false)
    }) 
    const ref5 = useClickoutside(()=>{
        setList5(false)
    }) 
    const ref6 = useClickoutside(()=>{
        setList6(false)
    }) 
    const ref7 = useClickoutside(()=>{
        setList7(false)
    }) 
    const ref8 = useClickoutside(()=>{
        setList8(false)
    }) 
    const ref9 = useClickoutside(()=>{
        setList9(false)
    }) 
    const ref10 = useClickoutside(()=>{
        setList10(false)
    }) 
    const ref11 = useClickoutside(()=>{
        setList11(false)
    }) 
    const ref12 = useClickoutside(()=>{
        setList12(false)
    }) 
    const ref13 = useClickoutside(()=>{
        setList13(false)
    }) 
    const ref14 = useClickoutside(()=>{
        setList14(false)
    }) 
    const ref15 = useClickoutside(()=>{
        setList15(false)
    }) 
    const ref16 = useClickoutside(()=>{
        setList16(false)
    }) 
    const ref17 = useClickoutside(()=>{
        setList17(false)
    }) 
    const ref18 = useClickoutside(()=>{
        setList18(false)
    }) 
    const ref19 = useClickoutside(()=>{
        setList19(false)
    }) 
    const ref20 = useClickoutside(()=>{
        setList20(false)
    }) 
    const ref21 = useClickoutside(()=>{
        setList21(false)
    }) 
    const ref22 = useClickoutside(()=>{
        setList22(false)
    }) 
    const ref23 = useClickoutside(()=>{
        setList23(false)
    }) 
    const ref24 = useClickoutside(()=>{
        setList24(false)
    }) 
    



    
    return(
        <>
        <div className=" flex flex-row-reverse  text-sm font-semibold gap-4 ">
            <div className="lg:flex flex-col gap-3 rounded-2xl text-right w-[400px] hidden border mt-10 p-2 xl:mr-[150px]" >
                <div className="flex justify-between items-center">
                    <p className="text-cyan-300 text-sm">حذف فیلتر ها </p>
                    <p>فیلترها</p>
                </div>

                <div ref={ref} >
                    <div  onClick={click}  className={list ? "flex justify-between " : "flex justify-between border-b pb-4"} >
                        <div><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>برند ها</p>
                    </div>
                    {list && (
                        <div className="h-80 overflow-y-scroll">
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        <div className="border-b flex-row-reverse  items-center pb-4 flex text-right justify-between" >
                            <label className="flex gap-10  mr-7 items-center ">
                            <p className="text-gray-500 pl-2">sumsong</p>
                            <p>سامسونگ</p> 
                            <input className="" type="checkbox" />
                            </label>
                        </div>
                        </div>
                        )}
                    </div>

                    <div ref={ref1}>
                        <div className={list1 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click1}>
                            <div><KeyboardArrowDownIcon fontSize="small" /></div>
                            <p>رنگ</p>
                        </div>
                        {list1 && (
                            <div className="border-b gap-1 items-center pb-4 flex text-right justify-between flex-wrap">
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            <div className="border-b pb-4"  >
                                <div className="flex  items-center flex-col">
                                    <div className="border w-14 p-2 rounded-2xl"><img src="https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png" /> </div>
                                    <p>مشکی</p>
                                </div>
                            </div>
                            </div>
                        )}
                    </div>

                <div className="flex items-center justify-between border-b pb-4">
                    <label class="switch">
                        <input  type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <div className="flex">
                        <div className="text-blue-600"><SpeedIcon /></div>
                        <p>ارسال فوری</p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center text-sm justify-between ">
                    <label class="switch">
                        <input  type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <div className="flex">
                        <div className="text-yellow-600"><Person4OutlinedIcon /></div>
                        <p>ارسال فروشنده</p>
                    </div>
                    </div>
                    <p className="text-gray-500 text-right border-b pb-4 ">ارسال مستقیم و سریع‌تر</p>
                </div>

                <div >
                    <div className="flex items-center justify-between ">
                        <div><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>محدوده قیمت</p>
                    </div>
                    <p className="text-right text-gray-500 border-b pb-4">از 0 تا 100 میلیون</p>
                </div>

                <div className="flex items-center justify-between border-b pb-4" >
                    <label class="switch">
                        <input  type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <p>فقط کالاهای موجود</p>
                </div>

                <div className="flex justify-between border-b pb-4">
                    <label class="switch">
                        <input  type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <p>فقط کالاهای موجود در انبار دیجی کالا</p>
                </div>

                <div ref={ref2}>
                    <div className={list2 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click2}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>نوع فروشنده</p>
                    </div>
                    {list2 && (
                        <div className="border-b pb-4">
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div>

                <div ref={ref3}>
                    <div className={list3 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click3}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>نوع</p>
                    </div>
                    {list3 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div>

                <div ref={ref4}>
                    <div className={list4 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click4} >
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>شبکه های ارتباظی</p>
                    </div>
                    {list4 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div>

                <div ref={ref5}>
                    <div className={list5 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click5}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>پشنیبانی از کارت حافظه</p>
                    </div>
                    {list5 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            <p>سامسونگ</p>
                        </div>
                        )}
                </div>

                <div ref={ref6}>    
                    <div className={list6 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click6}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>تعداد سیم کارت</p>
                    </div>
                    {list6 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                        )}
                </div>
                    <div ref={ref7}>
                        <div className={list7 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click7}>
                            <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                            <p>سیستم عامل</p>
                        </div>
                        {list7 && (
                            <div className="border-b pb-4"  >
                                <label className="flex items-center ">
                                <input className="" type="checkbox" />    
                                <p className="text-gray-500 pl-2">sumsong</p>
                                </label>
                                
                                <p>سامسونگ</p>
                                
                            </div>
                            
                        )}
                </div> 

                <div ref={ref8}>   
                    <div className={list8 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click8}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>دوربین های پشت گوشی</p>
                    </div>
                    {list8 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            <p>سامسونگ</p>   
                        </div>
                    )}
                </div> 

                <div ref={ref9}>  
                    <div className={list9 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click9}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>توضیحات سیم کارت</p>
                    </div>
                    {list9 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div>

                <div ref={ref10}>    
                    <div className={list10 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click10}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>(GPS) موقعیت نما</p>
                    </div>
                    {list10 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div> 
                <div ref={ref11}>  
                    <div className={list11 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click11}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>نوع پردازنده</p>
                    </div>
                    {list11 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div>  

                <div ref={ref12}>
                    <div className={list12 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click12}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>فناوری فوکوس</p>
                    </div>
                    {list12 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div>  

                <div ref={ref13}> 
                    <div className={list13 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click13}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>ویژگی های خاض</p>
                    </div>
                    {list13 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div> 

                <div ref={ref14}>   
                    <div className={list14 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click14}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>قابلیت های نرم افزاری</p>
                    </div>
                    {list14 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                        )}
                </div> 

                <div ref={ref15}>   
                    <div className={list15 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click15}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>بازه ی اندازه صفحه نمایش</p>
                    </div>
                    {list15 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div>
                
                <div ref={ref16}>
                    <div className={list16 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click16}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>موسیقی</p>
                    </div>
                    {list16 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div> 

                <div ref={ref17}>       
                    <div className={list17 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click17}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>فناوری صفحه نمایش</p>
                    </div>
                    {list17 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div>

                <div ref={ref18}>
                    <div className={list18 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click18}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>ویدیو</p>
                    </div>
                    {list18 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                        )}
                </div>

                <div ref={ref19}>
                    <div className={list19 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click19}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>حافظه داخلی</p>
                    </div>
                    {list19 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                        )}
                </div>  

                <div ref={ref20}>     
                    <div className={list20 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click20} >
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>رزولوشن عکس </p>
                    </div>
                    {list20 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div> 

                <div ref={ref21}>
                    <div className={list21 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click21}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>RAM مقدار</p>
                    </div>
                    {list21 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                        )}
                </div> 

                <div ref={ref22}>     
                    <div className={list22 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click22}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>دسته بندی</p>
                    </div>
                    {list22 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                    )}
                </div> 
                
                <div ref={ref23}>
                    <div className={list23 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click23}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>نوع محافظ صحفه نمایشی گوشی</p>
                    </div>
                    {list23 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                        )}
                </div>

                <div ref={ref24}>
                    <div className={list24 ? "flex justify-between " : "flex justify-between border-b pb-4"} onClick={click24}>
                        <div className="text-gray-400"><KeyboardArrowDownIcon fontSize="small" /></div>
                        <p>رابط ها</p>
                    </div>
                    {list24 && (
                        <div className="border-b pb-4"  >
                            <label className="flex items-center ">
                            <input className="" type="checkbox" />    
                            <p className="text-gray-500 pl-2">sumsong</p>
                            </label>
                            
                            <p>سامسونگ</p>
                            
                        </div>
                        
                        )}
                </div>    
            </div>
            <div className="w-full xl:ml-[150px] mt-10 ">
                <Box3 />
            </div>
        </div>
        </>
    )
}