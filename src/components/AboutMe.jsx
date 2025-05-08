import { Link } from "react-router-dom"
import externalLink from "../assets/external-link.png"

function AboutMe() {
  return (
    <main className="custom-gradient px-8 pt-3 pb-12" id="about-me">
      <div className="mx-auto max-w-[1200px] mt-6">
        <h1 className="text-[#FFFFFF] font-extrabold text-[1.9rem] sm:text-[2rem] md:text-[2.5rem]">About Me</h1>
        <p className="text-white text-[1.3rem] mt-2 md:tracking-wide leading-loose">My name is Success Olayemi, I'm Frontend 
          Developer that is passionate about developing web applications that solves real problems. With a solid foundation in 
          HTML, CSS, and JavaScript, I specialize in modern frameworks and tools like NextJs, ReactJs, TypeScript, Redux, 
          React-Query (TanStack), Axios, React-Hook-Form, Supabase, TailwindCSS, ShadcnUI, Bootstrap, and Git. I am also looking 
          forward to expanding my skills into backend development to broaden my expertise and build more robust, full-stack 
          solutions. I am always open to learning new frameworks and technologies to deliver the best results. Let us connect and 
          build something amazing together.
        </p>
        <div className="mt-5 max-w-[180px]">
          <Link to="mailto: olayemisuccess7@gmail.com" className="flex items-center justify-between px-5 pt-2 pb-2 bg-[#298E77] 
            text-white font-extrabold rounded-lg cursor-pointer shadow-[0_0_10px_#D9D9D9C9] hover:shadow-[0_0_20px_#D9D9D9C9] 
            transition-shadow duration-300"
          >
            <span>Send an email</span>
            <img src={externalLink} alt="link" className="w-[25px] h-[25px]"/>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default AboutMe