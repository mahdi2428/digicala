import React, { useCallback, useEffect, useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
export default function PageSwitch () {
    const [changeall , setChange] = useState({
        change : true , 
        change1 : false, 
        change2 : false , 
        change3 : false
    })
    const toggleIsExpanded = () => {
        setChange({ change : !changeall.change  ,  change1 : false , change2 : false ,change3 : false});
      }
      const toggleIsExpanded1 = ()=>{

        setChange({ change1 : !changeall.change1  , change : false , change2 : false ,change3 : false});
      }
      const toggleIsExpanded2 = () => {
        setChange({ change2 : !changeall.change2  , change : false ,change1 : false,change3 : false});
      }
      const toggleIsExpanded3= () => {
        setChange({ change3 : !changeall.change3  , change : false ,change1 : false , change2 : false});
      }
    return(
        <>
        <div className="mt-14 lg:hidden ">
            <div className="flex w-full pr-3 flex-row-reverse fixed top-[95.3%] shadow-2xl border-t  z-10 justify-between  bg-white ">
                <div className="flex flex-col items-center text-gray-500 " onClick={toggleIsExpanded}>
                    <div>{changeall.change ? <HomeIcon /> :  <HomeOutlinedIcon /> } </div>
                    <p className="text-[10px]">خانه</p>
                </div>
                <div className="flex flex-col items-center text-gray-500 " onClick={toggleIsExpanded1}>
                    <div>{changeall.change1 ? <CategoryIcon /> : <CategoryOutlinedIcon /> }</div>
                    <p className="text-[10px]">دسته بندی</p>
                </div>
                <div className="flex flex-col items-center text-gray-500 " onClick={toggleIsExpanded2}>
                    <div>{changeall.change2 ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon /> }</div>
                    <p className="text-[10px]">سبد خرید</p>
                </div>
                <div className="flex flex-col items-center text-gray-500 "onClick={toggleIsExpanded3}>
                    <div>{changeall.change3 ? <PersonIcon /> : <PersonOutlineOutlinedIcon /> }</div>
                    <p className="text-[10px]">دیجی کالای من</p>
                </div>
            </div>
        </div>
        </>
    )
}
// export default function PageSwitch () {
//     const [change , setChange] = useState(false)
//     const [change1 , setChange1] = useState(false)
//     const [change2, setChange2] = useState(false)
//     const [change3 , setChange3] = useState(false)
//     const toggleIsExpanded = () => {
//         setChange(change => !change);
//         setChange1(change1 => false);
//         setChange3(change3 => false);
//         setChange2(change2 => false);
//       }
//       const toggleIsExpanded1 = ()=>{
//         setChange1(change1 => !change1);
//         setChange(change => false);
//         setChange3(change3 => false);
//         setChange2(change2 => false);
//       }
//       const toggleIsExpanded2 = () => {
//         setChange2(change2 => !change2);
//         setChange1(change1 => false);
//         setChange(change => false);
//         setChange3(change3 => false);
//       }
//       const toggleIsExpanded3= () => {
//         setChange3(change3 => !change3);
//         setChange1(change1 => false);
//         setChange(change => false);
//         setChange2(change2 => false);
//       }
//     return(
//         <>
//         <div className="mt-14 ">
//             <div className="flex w-full pr-3 flex-row-reverse fixed top-[95.3%] shadow-2xl border-t  z-10 justify-between  bg-white ">
//                 <div className="flex flex-col items-center text-gray-500 " onClick={toggleIsExpanded}>
//                     <div>{change ? <HomeIcon /> :  <HomeOutlinedIcon /> } </div>
//                     <p className="text-[10px]">خانه</p>
//                 </div>
//                 <div className="flex flex-col items-center text-gray-500 " onClick={toggleIsExpanded1}>
//                     <div>{change1 ? <CategoryIcon /> : <CategoryOutlinedIcon /> }</div>
//                     <p className="text-[10px]">دسته بندی</p>
//                 </div>
//                 <div className="flex flex-col items-center text-gray-500 " onClick={toggleIsExpanded2}>
//                     <div>{change2 ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon /> }</div>
//                     <p className="text-[10px]">سبد خرید</p>
//                 </div>
//                 <div className="flex flex-col items-center text-gray-500 "onClick={toggleIsExpanded3}>
//                     <div>{change3 ? <PersonIcon /> : <PersonOutlineOutlinedIcon /> }</div>
//                     <p className="text-[10px]">دیجی کالای من</p>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }