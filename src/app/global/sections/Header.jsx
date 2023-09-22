"use client";
import React, { useEffect, useRef, useState } from "react";
import Form from "../comps/Form";
import Link from "next/link";

const Header = () => {
  const headerRef = useRef(null);
  let scroll = 0;

  const windowScroll = (e) => {
    scroll = e.target.scrollingElement.scrollTop;
    let head = headerRef.current.style;
    scroll > 0 ? (head.backgroundColor = "black") : (head.backgroundColor = "");
  };

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);
  return (
    <header ref={headerRef}>
      <Link href={"/"}>
        <h1>Film Fusion</h1>
      </Link>
      <Form />
    </header>
  );
};

export default Header;
