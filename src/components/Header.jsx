import Navbar from "./Navbar"
import banner from "../assets/banner.png"
import arrow from "../assets/arrow-up-right.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="relative">
      <div>
      <img src={banner} className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover" alt="Banner"/>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-white text-[1.9rem] sm:text-[2rem] md:text-[3rem] font-extrabold max-w-[700px]">
            Hey, I am a <span className="text-[#298E77]">Frontend</span> Developer. 
            Building your dream <span className="text-[#298E77]">pixel</span> by <span className="text-[#298E77]">pixel</span>!
          </h1>
          <Link className="flex justify-between items-center max-w-[154px] mx-auto mt-6 px-5 pt-2 pb-2 bg-[#298E77]
            text-white font-extrabold rounded-lg cursor-pointer shadow-[0_0_10px_#D9D9D9C9] 
            hover:shadow-[0_0_20px_#D9D9D9C9] transition-shadow duration-300"
            target="_blank"
            to="/assets/SUCCESS-OLAYEMI-RESUME.pdf"
            download="Success Olayemi Resume"
          >
            My Resume
            <img src={arrow} alt="arrow" className="mt-1 w-[18px] h-auto ms-1"/>
          </Link>
        </div>
      </div>
      <Navbar/>
    </header>
  )
}

export default Header