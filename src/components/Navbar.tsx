import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" width={15} height={15} alt="search icon" />
        <input type="text" placeholder="Search..." className="w-[200] p-2 bg-transparent outline-none"/>
      </div>
      {/* icons and user  */}
      <div className=" flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="message icon" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="message icon"
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col ">
            <span className="text-xs leading-3 font-medium">userName</span>
            <span className="text-[10px] text-right text-gray-500">Admin</span>
        </div>
        <Image src="/avatar.png" width={36} height={36} alt="user image" className="rounded-full"/>
      </div>
    </div>
  );
};

export default Navbar;
