import { FiSearch } from "react-icons/fi";
import { HiHome, HiUsers } from "react-icons/hi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiMessengerFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
	return (
		<div className="bg-[#272727] border-b border-white/10 flex justify-between items-center px-4 fixed w-full z-10 py-2 lg:py-0">
			<div className="flex gap-2 items-center">
				<div className="w-12 h-full">
					<Image width={100} height={100} priority src="/favicon.svg" alt="Logo Facebook" />
				</div>
				<div className="hidden md:flex bg-[#424242] text-white/60 text-lg w-11 h-11 rounded-full items-center justify-center duration-150 cursor-pointer hover:bg-[#4e4e4e]">
					<FiSearch />
				</div>
			</div>
			<div className="h-full hidden items-center gap-3 md:flex ">
				<div className="text-blue-500 w-full h-full border-b-2 border-blue-500 text-3xl px-8 py-3 cursor-pointer duration-150">
					<HiHome />
				</div>
				<div className="text-white/70 text-3xl px-8 py-2 rounded-md cursor-pointer duration-150 hover:bg-white/10">
					<HiUsers />
				</div>
				<div className="text-white/70 text-3xl px-8 py-2 rounded-md cursor-pointer duration-150 hover:bg-white/10">
					<BsFillCollectionPlayFill />
				</div>
				<div className="text-white/70 text-3xl px-8 py-2 rounded-md cursor-pointer duration-150 hover:bg-white/10">
					<FaUsers />
				</div>
			</div>
			<div className="flex items-center gap-1">
				<div className="bg-[#424242] text-white/90 text-2xl w-11 h-11 rounded-full flex items-center justify-center duration-150 cursor-pointer hover:bg-[#4e4e4e]">
					<AiOutlinePlus />
				</div>
				<div className="bg-[#424242] text-white/90 text-2xl w-11 h-11 rounded-full flex items-center justify-center duration-150 cursor-pointer hover:bg-[#4e4e4e]">
					<RiMessengerFill />
				</div>
				<div className="bg-[#424242] text-white/90 -rotate-12 text-2xl w-11 h-11 rounded-full flex items-center justify-center duration-150 cursor-pointer hover:bg-[#4e4e4e]">
					<IoMdNotifications />
				</div>
				<div className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
					<Image
						width={300}
						height={300}
						priority
						className="w-full h-full object-cover rounded-full"
						src="/profile.jpeg"
						alt="Profile"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
