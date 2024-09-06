'use client'
import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/BackgroundBeamsWithCollision";
import { TextGenerateEffectDemo } from "../components/TextGenerateEffectDemo";
import { FloatingDock } from "./ui/FloatingDock";
import { FloatingDockDemo } from "./FloatingDockDemo";
import {Buttons} from "./Buttons";
export function BackgroundBeamsWithCollisionDemo() {
  return (  
    <>
    <BackgroundBeamsWithCollision>
    <div className="flex flex-col">
    <div className="menu">
      <FloatingDockDemo/>
    </div>
      <h2
        className="text-2xl relative z-20 md:text-4xl lg:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Crafting Unique Experience ?{" "} 👋🏻 {" "}
        <div
          className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div
            className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Design With Kunal.</span> 
          </div>
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Design With Kunal.</span> 
          </div>
        </div>
        <div className="flex flex-col gap-5">
        <TextGenerateEffectDemo/>
        <Buttons/>
        </div>
      </h2>
    </div>
    </BackgroundBeamsWithCollision>
    </>
  );
}
