import React from "react";
import Box2 from "./2";
import Box3 from "./3";
import Box4 from "./4";


export default function Combine(){
    return(
        <>
        <div className=" lg:flex flex-row-reverse lg:mx-1 xl:mr-10">
        <Box2 />
        <Box3 />
        <Box4 />
        </div>
        </>
    )
}