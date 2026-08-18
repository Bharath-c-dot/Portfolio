import Girl from './assets/img_girl.jpg';
import { IoIosAirplane } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";

const AboutMe = () => {
    return (

        <div>
        <div className='relative overflow-y-auto  mr-[5vw] text-white top-10 '>

           <p className=' text-center text-[20px]  p-[10px] rounded-[5px] hover:inset-shadow-[0_0_50px_1px_black]  hover:scale-105 transition-all duration-2000'> Hello, I’m Bharath, a B.E. Computer Science graduate and passionate Software Developer. I enjoy building responsive and user-friendly web applications using modern web technologies.</p>
                <p className='mt-[20px] p-[10px] text-[40px] text-start ml-[7vw]'>Skills :</p>
                
                
                <div className="text-[20px] flex gap-[10vw]">

                    <h4>Frontend Development</h4>    
                    <ul className="list-decimal text-start  ml-[15vw] space-y-2">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                    </ul>

                    <h4>Backend Development</h4>
                    <ul start="5" className="list-decimal ml-6 text-start space-y-2">
                        <li>Java</li>
                        <li>REST APIs</li>
                    </ul>

                    <h4>Database</h4>
                    <ul start="5" className="list-decimal ml-6 text-start space-y-2">
                        <li>SQL</li>
                        <li>MySQL</li>
                    </ul>

                    <h4>DevOps & Tools</h4>
                    <ul start="5" className="list-decimal ml-6 text-start space-y-2">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Docker</li>
                        <li>GitHub Actions</li>
                        <li>CI/CD</li>
                        <li>Linux</li>
                    </ul>

                </div>

                <h1 className='text-start text-[40px] mt-[30px]'>What I do ?</h1>
                <p className='mt-[20px] flex text-[20px]'> <IoIosAirplane className='h-[5vh] w-[10vw] ' />  I focus on creating responsive, interactive, and visually appealing web applications using React and Tailwind CSS. I write clean, efficient, and maintainable code.</p>

                <h2 className='text-start text-[40px] mt-[30px]'>My Goal ?</h2>
                <p className='mt-[20px] flex text-[20px]'> <IoIosAirplane className='h-[5vh] w-[10vw] ' /> My goal is to become a professional software developer and contribute to real-world projects while continuously improving my skills.</p>

                <h2 className='text-start text-[40px] mt-[30px]'>Project :</h2>
                <p  className='mt-[20px] flex text-[20px]'><FaHandPointRight className='h-[5vh] w-[10vw] '/>Responsive Portfolio Web Application.</p>
                <p  className='mt-[20px] flex text-[20px]'><FaHandPointRight className='h-[5vh] w-[10vw] '/>AI Futuristic Developer Portfolio.</p>
                <p  className='mt-[20px] flex text-[20px]'><FaHandPointRight className='h-[5vh] w-[10vw] '/>Automated CI/CD Deployment Pipeline.</p>
                <p  className='mt-[20px] mb-[80px]  flex text-[20px]'><FaHandPointRight className='h-[5vh] w-[10vw] '/>2D Fruit Collector Game.</p>


        </div >
        </div>

    )
}

export default AboutMe
