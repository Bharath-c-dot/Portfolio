
import './app.css';
import Image from './Image.jsx';


import Icons from './Icons.jsx';
import Footer from './Footer.jsx';


import Backgroundimg from './Backgroundimg.jsx';
import AboutMe from './AboutMe.jsx';
import { useState } from 'react';
import Welcome from './Welcome.jsx';
import Project from './Project.jsx';
import ContactMe from './ContactMe.jsx';


const App = () => {

  let [show, setshow] = useState(false)

  let [wel,setwel] = useState(false)

  let [project, setproject] = useState(false)

  let [conat,setconat] = useState(false)

  console.log(project)

  function welc(e)
  {
    e.preventDefault
    setshow(false)
    setproject(false)
    setconat(false)
    setwel(false)
    console.log(wel)
  }

  function name(e){
    e.preventDefault
    setwel(true)
    setproject(false)
    setconat(false)
    setshow(true)

  }

  function projectf1(e){
    e.preventDefault
    setwel(true)
    setshow(false)
    setconat(false)
    setproject(true)
  }

  function conta(e)
  {
    e.preventDefault
    setwel(true)
    setshow(false)
    setproject(false)
    setconat(true)
  }




  return (
    <div >
      <Backgroundimg />
      {
        (wel || show || project || conat)?<></>:<Welcome/>
      }
      <div className='relative flex overflow-y ml-[30vw] pr-[5vw] '>{
        show ? <AboutMe /> : <></>
      }
      </div>
      <div className='relative flex overflow-y ml-[30vw] pr-[5vw] '>{

        project ? <Project/> : <></>
      }
      </div>
      <div className='relative overflow-y ml-[30vw] pr[5vw]'>
      {
        conat ? <ContactMe/> : <></>
      }
      </div>





      {/* <div className='absolute bg-pink-800 h-[100vh] w-[20vw] inset-0 inset-x-20'> */}
      <div className='fixed top-0'>
        <div className='absolute bg-pink-800 h-[100vh] w-[20vw] top-0 left-[100px] shadow-[0_0_500px_100px_black] hover:shadow-[0_0_500px_100px_pink] transition-all duration-2000 hover:scale-x-110 duration-1000 '>

          <Image />

          <div className='flex flex-col  justify-content items-center pb-[20px] '>
            <h1 className='text-white text-4xl'>Bharath K R</h1>
            <h2 className='text-[15px] text-gray-200 pt-[5px]'>Full Stack Developer</h2>
          </div>

          <div className='flex flex-col  justify-content border-t-[2px] border-white  items-center'>

              <button className='w-[20vw] h-[8vh] hover:bg-white border-b-[2px] border-white' onClick={(e) => welc(e)}>Home </button>
              <button className='w-[20vw] h-[8vh] hover:bg-white border-b-[2px] border-white' onClick={(e) => name(e)}>About Me</button>
              <button className='w-[20vw] h-[8vh] hover:bg-white border-b-[2px] border-white' onClick={(e) => projectf1(e)}>Projects</button>
              <button className='w-[20vw] h-[8vh] hover:bg-white border-b-[2px] border-white'>My Work</button>
              <button className='w-[20vw] h-[8vh] hover:bg-white border-b-[2px] border-white' onClick={(e)=>conta(e)}>Contact Me</button>

          </div>



          <Icons />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
