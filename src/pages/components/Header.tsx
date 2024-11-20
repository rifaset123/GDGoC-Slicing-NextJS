import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-[#23856d] text-white px-4 py-4 flex-col md:flex-row justify-center items-center hidden  sm:flex">
      <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left mx-10 ">
        <span className="flex items-center">
          <IoCallOutline className="mr-2" /> (225) 555-0118
        </span>
        <span className="flex items-center" style={{ fontFamily: "'Montserrat'" }}>
          <IoMailOutline className="mr-2" /> michelle.rivera@example.com
        </span>
      </div>
      <span className="font-bold" style={{ wordSpacing: '0.2em' }}>
        Follow Us and get a chance to win 80% off
      </span>
      <nav className="mt-2 md:mt-0 space-x-4 mx-10">
      <span className="font-bold flex items-center" style={{ wordSpacing: '0.2em' }}>
        Follow Us :
        <Link href="/">
          <FaInstagram className="ml-4" size={20}/>
        </Link>
        <Link href="/">
          <AiOutlineYoutube className="ml-4" size={24} />
        </Link>
        <Link href="/">
          <RiFacebookCircleLine className="ml-4" size={24}/>
        </Link>
        <Link href="/">
          <FiTwitter className="ml-4" size={20} />
        </Link>
      </span>

      </nav>
    </header>
  );
};

export default Header;
