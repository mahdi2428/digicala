import React,{useRef} from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import "./cala.css"
export default function Cala(){
    const data = [
        {
            id:1,
            img : "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr : "Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت"  ,
        },
        {
            id:2,
            img : "https://dkstatics-public.digikala.com/digikala-products/a71582401ee8ea3a64faacdcb6f6a90af5b0d274_1658206463.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr : "ماکارونی پیکولی زر ماکارون مقدار 500 گرم"  ,
        },
        {
            id:3,
            img : "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr: "اسپاگتی قطر 1.2 زر ماکارون مقدار 700 گرم"
        },
        {
            id:4,
            img : "https://dkstatics-public.digikala.com/digikala-products/19566c32d6401b14c1b7157f37a05ee5fcc3e7ec_1625374856.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr : "گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام            "  ,
        },
        {
            id:5,
            img : "https://dkstatics-public.digikala.com/digikala-products/f1c52ab36a753464bb6a17919f6b3f781acc44b5_1684135768.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr : "دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت"  ,
        },
        {
            id:6,
            img : "./img/head.jpg",
            decr : "گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام            "  ,
        },
        {
            id:7,
            img : "https://dkstatics-public.digikala.com/digikala-products/a71582401ee8ea3a64faacdcb6f6a90af5b0d274_1658206463.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr : "گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام            "  ,
        },
        {
            id :8,
            img : "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr : "دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت"  ,
        },
        {
            id:9,
            img : "https://dkstatics-public.digikala.com/digikala-products/f1c52ab36a753464bb6a17919f6b3f781acc44b5_1684135768.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr : "سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت"  ,
        },
        {
            id:10,
            img : "https://dkstatics-public.digikala.com/digikala-products/9195e7d7ca87e8dac34d10c2af9a7567a0048363_1663692449.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            decr : "گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام            "  ,
        },
        {
            id:11,
            img : "https://dkstatics-public.digikala.com/digikala-products/8dff6ea34f343da26afc50f1af335ea97a35f00e_1670324238.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            decr : "خامه رامک- 200 گرم"  ,
        },
        {
            id:12,
            img : "https://dkstatics-public.digikala.com/digikala-products/121654059.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            decr : "پنیر فتا دوشه هراز - 400 گرم"  ,
        },
        {
            id:13,
            img : "https://dkstatics-public.digikala.com/digikala-products/4bc080993af2f26c76e94fe7907ddef881f2b9c6_1609743727.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            decr : "آب معدنی میوا - 1.5 لیتر بسته 6 عددی	"  ,
        },
        {
            id:14,
            img : "https://dkstatics-public.digikala.com/digikala-products/7c391ac4335c87cc49b458650470ac240a6bf7da_1619600774.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            decr :"رب گوجه فرنگی روژین مقدار 800 گرم "
        },
        {
            id:15,
            img : "https://dkstatics-public.digikala.com/digikala-products/2227398.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            decr : "گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام            "  ,
        },
        {
            id:16,
            img : "https://dkstatics-public.digikala.com/digikala-products/e550c60d3bd42b662cd91dd40be0188de053db61_1681215219.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            decr : "گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام            "  ,
        },
        {
            id:17,
            img : "https://dkstatics-public.digikala.com/digikala-products/7dfba78647a3bafe04f21491954b34f67e15e556_1694264920.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            decr : "پودر ماشین لباسشویی سافتلن سری Gold Selection مدل Perfect And Shine مقدار 500 گرم "
        },
        {
            id:18,
            img : "https://dkstatics-public.digikala.com/digikala-products/7588cc50c925e29b5dcc186901393927dc4269d9_1652622666.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            decr : "  Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت             "  ,
        },
    ]
    
    return(
        <>
            <div className="lg:mx-[140px] dis mt-10 cursor-pointer">
                <div className="flex justify-center items-center flex-row-reverse">
                    <p className="lg:text-xl text-sm lg:font-bold">پرفروش‌ترین کالاها</p>
                    <div className="w-6"><img src="./img/fire1.png" /></div>
                </div>
                
                    <ScrollContainer className="overflow-hidden" >
                <div className=" flex flex-col h-80 flex-wrap ">
                    {data.map((item)=>(

                        <div className=" flex items-center justify-end h-[95px]  text-right ">
                            <div className="lg:w-20 w-16 "><img src={item.img} /></div>
                            <p className="text-cyan-500 lg:text-2xl font-bold pl-1">{item.id}</p>
                            <p className="overflow-hidden w-80 border-b h-full items-center flex lg:text-xs text-[10px]">{item.decr}</p>
                        </div>
                    ))}
                </div>
                </ScrollContainer>
                
            </div>
        </>
    )
}