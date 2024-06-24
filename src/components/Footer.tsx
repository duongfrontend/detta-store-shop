import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 flex-1">
          <Link href="/">
            <Image src="/3.png" alt="" width={130} height={24} />
          </Link>
          <p>Vinhome Smart City, Tây Mỗ, Nam Từ Liêm, Hà Nội</p>
          <span className="font-semibold">
            duong.fullstack.developer@gmail.com
          </span>
          <span className="font-semibold">085.835.8586</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        {/* <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div> */}
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 flex-1">
          <h1 className="font-medium text-lg">ĐĂNG KÝ</h1>
          <p>
            Hãy là người đầu tiên nhận được tin tức mới nhất về xu hướng, chương
            trình khuyến mãi và nhiều hơn nữa!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email của bạn"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">Đăng Ký</button>
          </div>
          <span className="font-semibold">Chấp Nhận Thanh Toán</span>
          <div className="flex justify-between">
            {/* <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} /> */}
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Detta Stack - Đặng Hoàng Dương</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Ngôn ngữ</span>
            <span className="font-medium">Việt Nam</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Tiền tệ</span>
            <span className="font-medium">VND</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
