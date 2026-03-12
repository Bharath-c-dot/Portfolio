
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Icons = () => {
    return (
        <div className='flex flex-row justify-center pt-[40px] pb-[30px] gap-8'>
            <FaInstagram className="bg-white rounded-[5px] text-black  hover:scale-180 transition duration-400 cursor-pointer" />
            <FaFacebookF className='bg-black text-white rounded-xl hover:scale-180 transition duration-300 cursor-pointer' />
            <FaTwitter className='bg-sky-600 text-white rounded-[5px] hover:scale-180 transition duration-300 cursor-pointer' />
            <FaLinkedin className='bg-black text-blue-200 rounded-[3px] hover:scale-180 transition duration-300 cursor-pointer' />
        </div>
    )
}

export default Icons
