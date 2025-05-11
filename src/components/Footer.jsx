import { Link } from "react-router-dom"
import footerBackground from "../assets/footer.jpeg"
import { socialMedia } from "../utils/socialMedia"

function Footer(){
  return (
    <footer className="relative" id="contact-me">
      <div>
        <img src={footerBackground} className="w-full h-[60vh] sm:h-[70vh] object-cover" alt="banner"/>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div>
          <p className="text-white font-extrabold text-[1.9rem] mb-2 sm:text-[2.5rem] md:text-[3rem]">Don't be a stranger 😉</p>
          <Link to="mailto: olayemisuccess7@gmail.com" className="text-white
            text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem]"
          >
            Send an email to <span className="underline break-all">olayemisuccess7@gmail.com</span> to get in touch
          </Link>
        </div>
        <div className="flex items-center pt-7">
          {socialMedia.map((social) => (
            <Link to={social.to} key={social.title} className="px-3">
              <img src={social.image} alt={social.title} className="w-10 h-10 px-2 bg-white"/>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer