"use client";
import React from "react";
import { Button } from "../components/ui/MovingBorder";
import Link from 'next/link'
export function Buttons(props) {
  return (
    (<div className="btns flex flex-row gap-5 relative left-[34%]">
      {/* <Link href="/Projects"><Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-violet-900">
        Projects
      </Button></Link> */}
      <div>
      <Link href="/Contact"><Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-violet-900">
        Contact
      </Button></Link>
      </div>
    </div>)
  );
}
