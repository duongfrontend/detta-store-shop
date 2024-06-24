"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/">Trang chủ</Link>
          <Link href="/">Giới thiệu</Link>
          <Link href="http://localhost:3000/list?cat=all-products">
            Sản phẩm
          </Link>
          <Link href="https://duongfullstackdeve.wixstudio.io/blog-app">
            Tin tức
          </Link>
          <Link href="/">Liên hệ</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;