import React from "react";
import Box1 from "../componentproduct/1";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";
import Combine from "../componentproduct/combine";
import Box5 from "../componentproduct/5";
import Box6 from "../componentproduct/6";
import Box7 from "../componentproduct/7";
import StickyBox from "react-sticky-box";
import Footer from "../components/footer"
export default function Product(){
    return(
        <>
        <div>
        <Navbar /> 
        <Navbar2 /> 
        <Box1 />
        <Combine />
        <Box5 />
        <Box6 />
        <Box7 />
        <Footer />
        
        </div>
        </>
    )
}