
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Icons = () => {
    return (
        <div className='flex flex-row justify-center pt-[40px] pb-[30px] gap-8'>
            <a href="https://www.instagram.com/" ><FaInstagram className="bg-white rounded-[5px] text-black  hover:scale-180 transition duration-400 cursor-pointer" /></a>
            <a href="https://www.facebook.com/"><FaFacebookF className='bg-black text-white rounded-xl hover:scale-180 transition duration-300 cursor-pointer' /></a>
            <a href="https://x.com/"><FaTwitter className='bg-sky-600 text-white rounded-[5px] hover:scale-180 transition duration-300 cursor-pointer' /></a>
            <a href="https://www.linkedin.com/in/bharath-k-r-239b16276/"><FaLinkedin className='bg-black text-blue-200 rounded-[3px] hover:scale-180 transition duration-300 cursor-pointer' /></a>
        </div>
    )
}

export default Icons
