import React from "react";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ScrollContainer from 'react-indiana-drag-scroll'
export default function Brands(){
    const data = [
        {
            id:1,
            img :"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
        },
        {
            id:2,
            img :"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
        },
        {
            id:3,
            img:"./img/king-star.png",
        },
        {
            id:4,
            img : "./img/3518.png",
        },
        {
            id:5,
            img: "./img/hoawei.png",
        },
        {
            id:6,
            img :"https://dkstatics-public.digikala.com/digikala-brands/7857.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
        },
        {
            id:7,
            img:"https://dkstatics-public.digikala.com/digikala-brands/100012423.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
        },
        {
            id:8,
            img:"./img/3280.png",
        },
        {
            id:9,
            img :"https://dkstatics-public.digikala.com/digikala-brands/e2d33dcdd991ae450ef90a6a3510e1cebe1056bb_1684054184.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
        },
        {
            id:10,
            img : "https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
        },
        {
            id:11,
            img : "https://dkstatics-public.digikala.com/digikala-brands/2994.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
        },
        {
            id:12,
            img : "./img/311.png",
        },
        {
            id:13,
            img:"./img/ero.png",
        },
        {
            id:13,
            img:"./img/ero.png",
        },
        {
            id:13,
            img:"./img/ero.png",
        },
        {
            id:13,
            img:"./img/ero.png",
        },
   
    ]
    
        return(
        <>
        <div className="relative">
            <div className=" border mx-2 xl:mx-[150px] mt-10 rounded-2xl ">
                <div className="flex  gap-2 items-center justify-center mb-5">
                    <p className="lg:text-2xl font-bold">محبوب ترین برند ها </p>
                    <img className="w-5 h-5 lg:w-8" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Gold_Star.svg"/>
                </div>
                
                    <ScrollContainer className="scroll-container flex flex-row-reverse overflow-hidden">
                        {data.map((item) =>(
                            <>
                            
                                <img className="cursor-pointer object-contain px-4 border-l" src={item.img} />
                            
                            
                        
                        </>
                        ))}
                    </ScrollContainer>
                
            </div>
            <div className="xl:flex hidden">  
                <div className="border rounded-full p-1 bg-white text-gray-400 absolute top-[45%] left-[1%] mx-[150px]">
                    <KeyboardArrowLeftOutlinedIcon />
                </div>
                <div className="border rounded-full p-1 bg-white text-gray-400 absolute top-[45%] right-[1%] mx-[150px]">
                    <KeyboardArrowRightOutlinedIcon />
                </div>
            </div>
        </div>
        </>
    )
}