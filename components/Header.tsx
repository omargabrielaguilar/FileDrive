import Link from "next/link";
import React, { useState } from "react";
import Navigation from "./Navigation";
import {AiOutlineSearch} from 'react-icons/ai';

type Props = {
  activeItem: number;
};

const Header = ({ activeItem }: Props) => {
  const [active, setactive] = useState(false);

  // Evento de desplazamiento de la ventana (scroll)
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }

  return (
    <div
      className={
        "w-full p-5 border-b min-h-[60px] transition-opacity ${active && 'fixed top-0 left-0 bg-[#00000] z-[9999]'} border-b-[#ffffff32]"
      }
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="text-3xl font-Inter cursor-pointer">
              <span className="text-[#ffb13d]">Prompt</span>Palette
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
        <div className="flex items-center ml-10">
          <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
