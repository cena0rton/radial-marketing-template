"use client"

import React, { useState } from "react";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

const Nav = () => {
   
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 20) {
            setIsScrolled(true);
        } else {
                setIsScrolled(false);
            }
        })
    
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <AnimatePresence>
     <motion.div
     animate={{
        maxWidth: isScrolled ? "1220px" : "1280px",
        borderRadius: isScrolled ? "10px" : "0px",
        boxShadow: isScrolled ? "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        marginTop: isScrolled ? "0px" : "0px",
    }}
    transition={{
        duration: 0.3,
        ease: "linear",
    }}
     className={` fixed inset-x-0 mx-0 md:mx-auto z-50 w-full md:max-w-7xl pt-6  ${
       isScrolled 
         ? "bg-neutral-50 dark:bg-neutral-900" 
         : "bg-transparent"
     }`}>
    <div className="flex  items-center justify-between px-8 bg-transparent z-50 -mt-6 py-3">
       
      <Link
        href="/"
        className="text-acc hover:text-acc/80 tracking-tight font-bold transition-colors duration-200"
      >
        <span className="flex items-center justify-center gap-2"><LogoSvg /> Radial..</span>
      </Link>
     
     <div className="lg:flex hidden items-center gap-4 justify-between ml-20">
        { navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-neutral-600 relative dark:text-neutral-400 transition-colors duration-200"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index && (<motion.span layoutId="hovered-span" className="absolute inset-0 bg-red-500 dark:bg-neutral-800  px-2 py-1 rounded-lg"></motion.span>)}
            <span className="text-sm relative px-2 py-1 rounded-lg">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="lg:flex hidden items-center gap-2">
        <Link href="/login">
          <button className="bg-acc/90 cursor-pointer font-medium text-shadow-md hover:bg-acc/70 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200 border border-neutral-400 dark:border-neutral-600 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            Login
          </button>
        </Link>
        <button className="bg-neutral-800 dark:bg-neutral-100 cursor-pointer font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 px-4 py-2 rounded-lg text-sm transition-colors duration-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          SignUp
        </button>
      </div> 
      </div> 
      
    </motion.div>
    </AnimatePresence>
  );
};

export default Nav;

const LogoSvg = () => {
    return(
        <svg
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--twemoji"
            preserveAspectRatio="xMidYMid meet"
            fill="currentColor"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fill="currentColor" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"></path>
                <path fill="currentColor" d="M10.777 9.342c0-1.488.837-2.418 2.388-2.418h5.457c4.775 0 7.72 2.14 7.72 7.007c0 3.411-2.573 5.364-5.736 5.86l5.272 5.644c.433.465.619.93.619 1.364c0 1.209-.961 2.387-2.324 2.387c-.559 0-1.303-.217-1.799-.806l-6.883-8.341h-.062v6.728c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.342zm4.651 7.348h3.193c1.705 0 2.884-1.023 2.884-2.759c0-1.767-1.18-2.729-2.884-2.729h-3.193v5.488z"></path>
            </g>
        </svg>
    )
}

const MenuIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <button onClick={() => setIsOpen(prev => !prev)} className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg>
        </button>
        </> 
    )}
