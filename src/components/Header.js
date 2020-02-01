import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <div className="p-3">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Over ons</a>
      </Link>
    </div>
  );
}

export default Header;
