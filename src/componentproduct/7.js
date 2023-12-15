import React, { useCallback, useState,useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Box71 from "./7.2";
import Box73 from "./7.3";
import Box74 from "./7.4";

export default function Box7(){
    const [display , setdisplay] = useState({style : {position : "relative" , margin : "2000px"}})
    const myintro = useRef(null)
    const myfeatures = useRef(null)
    const mypov = useRef(null)
    const myqustions = useRef(null)
    const [show,setShow]=useState(false)
    const [off , setOff] = useState(false)
    const [off1 , setOff1] = useState(false)
    const [off2 , setOff2] = useState(false)
    const handler  = useCallback(()=>{
        setShow(!show)
    })
    // const sticky1 = () =>{
    //     if(window.scrollY > 1400 ){
    //     setOff(!off)
    //     }else{
    //         setOff(off)
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll" ,sticky1 )
    //     return () => {
    //         window.removeEventListener("scroll" ,sticky1 )
    //     }
    // }, [])
    // const sticky2 = () =>{
    //     if(window.scrollY > 1400 && window.scrollY <4150){
    //         setOff1(!off1)
    //     }else if (window.scrollY >4150){
    //         setdisplay(display)
    //     }else{
    //     setOff1(off1)
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll" ,sticky2 )
    //     return () => {
    //         window.removeEventListener("scroll" ,sticky2 )
    //     }
    // }, [])

    const sticky3 = () =>{
        if(window.scrollY > 1400){
            setOff2(!off2)
        }else{
        setOff2(off2)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll" ,sticky3 )
        return () => {
            window.removeEventListener("scroll" ,sticky3 )
        }
    }, [])
    const data = [
        {
            intro: "برند جی‌‌‌پلاس تا به امروز توانسته است گوشی‌های هوشمند میان‌رده مناسب و مقرون به‌صرفه‌ای را روانه بازار کند که به نسبت قیمت در نظر گرفته شده، از مشخصات فنی مناسب و قابل قبولی بهره برده بودند. یکی از این گوشی‌ها، مدل X10 Plus است. از نظر ظاهر این گوشی چندان تفاوتی با X10 ندارد و از نظر مشخصات فنی، عملکرد بهتری دارد. در نمای رو‌به‌رویی این گوشی به صفحه‌نمایش با ابعاد 6.5 اینچ و رزولوشن 720×1600 پیکسل از نوع IPS مجهز شده است. برای صفحه‌نمایش هم از طراحی ناچ واتردراپ یا همان قطره ",
            intro1:"برند جی‌‌‌پلاس تا به امروز توانسته است گوشی‌های هوشمند میان‌رده مناسب و مقرون به‌صرفه‌ای را روانه بازار کند که به نسبت قیمت در نظر گرفته شده، از مشخصات فنی مناسب و قابل قبولی بهره برده بودند. یکی از این گوشی‌ها، مدل X10 Plus است. از نظر ظاهر این گوشی چندان تفاوتی با X10 ندارد و از نظر مشخصات فنی، عملکرد بهتری دارد. در نمای رو‌به‌رویی این گوشی به صفحه‌نمایش با ابعاد 6.5 اینچ و رزولوشن 720×1600 پیکسل از نوع IPS مجهز شده است. برای صفحه‌نمایش هم از طراحی ناچ واتردراپ یا همان قطره‌ای استفاده شده است که بریدگی قطره‌ای شکل ناچ در قسمت بالایی و مرکزی صفحه‌نمایش، سنسور دوربین سلفی با رزولوشن 8 مگاپیکسل را در خود جای داده است. در نمای پشتی هم شاهد قرار‌گیری چهار سنسور دوربین هستیم که یک سنسور دوربین اصلی با رزولوشن 13 مگاپیکسل در کنار سنسور 5 مگاپیکسل از نوع فوق عریض یا همان ultrawide و دو سنسور با رزولوشن 2 مگاپیکسل از نوع ماکرو و سنجش عمق، سنسور‌های دوربین چهار‌گانه جی‌پلاس X10 Plus را تشکیل می‌دهند. باتری با میزان ظرفیت 4000 میلی‌آمپر‌ساعتی این گوشی هوشمند هم سبب شده تا به ازای هر بار شارژ صد درصدی، طول عمر مفید (زمان آماده به‌کار) یک روز را در شرایط استفاده معمولی ارائه کند.",
        }
    ]
    let pervscroopos = 0;

    window.onscroll=function() {
        let currentscrollpos = window.pageYOffset;
        
        if(pervscroopos > currentscrollpos){
            document.getElementById("navbar").style.top = "70px";
            document.getElementById("navbar").style.boxShadow = "";
            document.getElementById("nav3").style.top = "70px";
            
        }else{
            document.getElementById("navbar").style.top = "-150px";
            document.getElementById("navbar").style.boxShadow = "0 5px 2px 0 rgb(0 0 0 / 0.05)";
            document.getElementById("nav3").style.top = "32px";
        }
        pervscroopos=currentscrollpos;
    }
    
    const scrollToTop = () => {
        window.scrollTo({ top: myintro.current.offsetTop - 200, behavior: 'smooth' });
       };
       const scrollToTop1 = () => {
        window.scrollTo({ top: myfeatures.current.offsetTop - 200, behavior: 'smooth' });
       };
       const scrollToTop2 = () => {
        window.scrollTo({ top: mypov.current.offsetTop - 200 , behavior: 'smooth' });
       };
       const scrollToTop3 = () => {
        window.scrollTo({ top: myqustions.current.offsetTop - 200 , behavior: 'smooth' });
       };
       
    return(
        <>
        <div className=" 2xl:mr-[140px] gap-4 flex flex-row-reverse ">
            <div>
            <div  className=" mb-1 ">
                <div id="nav3" className={off2 ? " w-full xl:pr-[550px] 2xl:pr-[530px] z-20 bg-white transition-all fixed top-[100px] hidden buttom-14 duration-300 lg:flex flex-row-reverse gap-4  border-b mt-10 mb-7 pb-4 text-sm" :"xl:mr-3 transition-all hidden buttom-14 duration-300 lg:flex flex-row-reverse gap-4  border-b mt-10 mb-7 pb-4 text-sm"} >
                    <div >
                        <Link onClick={scrollToTop} to='#myintro' >معرفی</Link>
                    </div>
                    <div>
                        <Link onClick={scrollToTop1} to='#myfeatures' >مشخصات</Link>
                    </div>
                    <div>
                        <Link onClick={scrollToTop2} to='#mypov' >دیدگاه ها</Link>
                    </div>
                    <div>
                        <Link onClick={scrollToTop3} to='#myqustions' >پرسش ها</Link>
                    </div>
                </div>
                <div  className="transition-all lg:hidden  duration-300 sticky top-10 flex pr-4 flex-row-reverse gap-4  border-b mt-10 mb-7 pb-4 text-sm">
                    <div >
                        <Link onClick={scrollToTop} to='#myintro' >معرفی</Link>
                    </div>
                    <div>
                        <Link onClick={scrollToTop1} to='#myfeatures' >مشخصات</Link>
                    </div>
                    <div>
                        <Link onClick={scrollToTop2} to='#mypov' >دیدگاه ها</Link>
                    </div>
                    <div>
                        <Link onClick={scrollToTop3} to='#myqustions' >پرسش ها</Link>
                    </div>
                </div>
            </div>
            <div ref={myintro} className="border-b-2 pb-5 xl:mr-3" >
                <div className="text-sm ">
                    <div   className="flex flex-row-reverse">
                        <p className="lg:border-b-2 text-md font-bold border-red-600 ">معرفی</p>
                    </div>
                    <div  className={show ? "hidden" : "pt-2 flex-row-reverse  flex  "} >
                        {data.map((item)=>(
                            <><div className=" p-3 lg:p-0 pr-4 w-fit lg:pr-0"><p className="text-right ">{item.intro}</p> </div>
                            </>

                        ))}
                        
                    </div>
                    <div className={show ? "flex p-2 flex-row-reverse" : "hidden"} >
                        {data.map((item)=>(
                            <><div className=" pr-4 w-auto lg:pr-0"><p className="text-right ">{item.intro1}</p> </div> </>
                        ))}
                        
                    </div>
                    <div className="flex flex-row-reverse items-center text-cyan-500 flex">
                        <button onClick={handler} >{show ? "بستن" : "بیشتر" }</button>
                        <div><ArrowBackIosIcon fontSize="small" /></div>
                    </div>
                </div>
            </div>
                <div className="xl:mr-2"> 
                    <div ref={myfeatures}><Box71 /></div>
                    <div className="border-b-2  pb-5 " ref={mypov}><Box73 /></div>
                    <div  ref={myqustions} className=""><Box74 /></div>
                </div>
            </div>
            <div id="nav2" className="">
                <div className=" bg-gray-100 h-96 w-96 left-0 sticky top-32 rounded-2xl mt-10 p-4 ">
                    <div className="flex flex-row-reverse border-b">
                    <div className="w-60 ">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/10b3ddf4ed5afd60ba74e4d5e2c1866d79716c7f_1675155251.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"/>
                    </div>
                    <div className="text-right text-xs ">
                        <p className="">گوشی موبایل جی پلاس مدل X10 Plus دو سیم کارت ظرفیت</p>
                        <p>سفید</p>
                    </div>
                    
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <div className="text-right text-xs"><p>دیجی‌کالا</p></div>
                        <div className='flex  flex-row-reverse  gap-1 items-center'>
                            <div className='text-gray-600'><VerifiedUserOutlinedIcon fontSize='' /></div>
                            <div className="text-xs"> 
                                <p className="">گارانتی 18 ماهه مدیا پردازش</p>
                            </div>
                        </div>
                        <div className='flex  flex-row-reverse gap-1 items-center text-base' >
                            <div className='text-cyan-500'><EventAvailableIcon fontSize="" /></div>
                            <p className="text-xs">موجود در انبار دیجی </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-[10px]">تومان</p>
                        <p>۳,۵۴۹,۰۰۰</p>
                    </div>
                    <div className='bg-red-500 m-2 text-white flex justify-center py-2 px-1 rounded-2xl '>
                        <button>افزودن به سبد</button>
                    </div>
                </div>
                </div>
        </div>
        </>
    )
}