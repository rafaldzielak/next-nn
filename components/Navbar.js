import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Ninja list</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};