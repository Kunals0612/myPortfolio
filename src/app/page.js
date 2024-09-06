'use client'
import Image from "next/image";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { FloatingDockDemo } from "./components/FloatingDockDemo";

export default function Home() {
  return (
      <div className="scrn min-h-screen">
        <BackgroundBeamsWithCollisionDemo/>
      </div>
  );
}
