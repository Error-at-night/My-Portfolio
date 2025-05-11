import { Link } from "react-router-dom"
import { navLinks } from "../utils/navLinks"
import hamburger from "../assets/hamburger.png"
import close from "../assets/close.png"
import chevronRight from "../assets/chevron-right.png"
import logo from "../assets/logo.png"
import { useEffect, useRef, useState } from "react"
import { socialMedia } from "../utils/socialMedia"
import { Link as ScrollLink } from "react-scroll"

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const sidebar = useRef(null)

  useEffect(function() {
    function handleClickOutside(event) {
      if (sidebar.current && !sidebar.current.contains(event.target)) {
        setOpenSidebar(false)
      }
    };

    if (openSidebar) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [openSidebar])

  return (
    <nav className="absolute top-0 w-full py-6 px-8 flex items-center">
      <div className="hidden md:flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[90px] w-[70px]"/>
        </Link>
        <div>
          {navLinks.map((navLink) => (
            <ScrollLink to={navLink.id} key={navLink.title} className="text-white px-8 cursor-pointer font-bold
              hover:scale-110 transition duration-300"
              >
              {navLink.title}
            </ScrollLink>
          ))}
          <Link to="mailto: olayemisuccess7@gmail.com"
            className="mx-auto px-5 pt-3 pb-3 bg-[#298E77] text-white font-extrabold rounded-full cursor-pointer
            shadow-[0_0_10px_#D9D9D9C9] hover:shadow-[0_0_20px_#D9D9D9C9] transition-shadow duration-300"
          >
            Contact me
          </Link>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="flex items-center justify-between w-full md:hidden">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[70px] w-[50px]"/>
        </Link>
        <button className="cursor-pointer" onClick={() => setOpenSidebar(open => !open)}>
          <img src={hamburger} alt="hamburger" className="w-[30px] h-[35px]"/>
        </button>
      </div>
      {openSidebar &&
        <div className="fixed inset-0 z-10">
          <div className="z-10 w-full sm:w-[400px] bg-[#081B17] text-white pt-10 h-full min-h-screen" ref={sidebar}>
            <div className="flex items-center justify-between -mt-7">
              <Link to="/">
                <img src={logo} alt="logo" className="h-[90px] w-[70px] ps-4"/>
              </Link>
              <button onClick={() => setOpenSidebar(open => !open)}
                className="top-10 right-5 sm:left-87 absolute w-[30px] h-[35px] cursor-pointer"  
              >
                <img src={close} alt="close-button" width={30} />
              </button>
            </div>
            <div className="w-full sm:w-[400px] h-full">
              <div className="flex flex-col pt-16 gap-y-12 -mt-5">
                {navLinks.map((navLink) => (
                  <ScrollLink to={navLink.id} key={navLink.title} className="text-white cursor-pointer font-bold
                    flex items-center justify-between px-6"
                    onClick={() => setOpenSidebar(open => !open)}
                  >
                    <span>{navLink.title}</span>
                    <img src={chevronRight} className="w-[20px] h-[25px]"/>
                  </ScrollLink>
                ))}
                <ScrollLink to="contact-me" className="text-white cursor-pointer font-bold
                  flex items-center justify-between px-6"
                  onClick={() => setOpenSidebar(open => !open)}
                >
                  <span>Contact me</span>
                  <img src={chevronRight} alt="chevronRight" className="w-[20px] h-[25px]"/>
                </ScrollLink>
              </div>
              <div className="px-6 pt-12 flex items-center justify-center gap-x-6">
                {socialMedia.map((social) => (
                  <Link to={social.to} key={social.title}>
                    <img src={social.image} alt={social.title} className="w-8 h-8 px-2 bg-white"/>
                  </Link>
                ))}
              </div>
            </div>
          </div> 
        </div>
      }
    </nav>
  )
}

export default Navbar