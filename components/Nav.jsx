"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <div className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="PromptAI Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text">PromptAI</p>
      </Link>
      <div className="sm:flex hidden ">{isUserLoggedIn ? <></> : <></>}</div>
    </div>
  );
};

export default Nav;
