import { Link } from "react-router-dom"
import arrow from "../assets/arrow-up-right.png"
import { frameworkAndTechnologies } from "../utils/frameworkAndTechnologies.js"

function AboutMe() {
  return (
    <main className="custom-gradient px-8 pt-3 pb-12" id="about-me">
      <div className="mx-auto max-w-[1200px] mt-6">
        <h1 className="text-[#FFFFFF] font-extrabold text-[1.9rem] sm:text-[2rem] md:text-[2.5rem]">About Me</h1>
        <p className="text-white text-[1rem] sm:text-[1.3rem] mt-2 sm:tracking-wide leading-normal sm:leading-loose">
          My name is Success Olayemi, I'm Frontend Developer that is passionate about developing web applications that solves 
          real problems. With a solid foundation in HTML, CSS, and JavaScript, I specialize in modern frameworks and technologies like 
          NextJs, ReactJs, TypeScript, Redux, React-Query (TanStack), Axios, React-Hook-Form, Supabase, TailwindCSS, ShadcnUI, 
          Bootstrap, and Git.
        </p>
        <p className="text-white text-[1rem] sm:text-[1.3rem] mt-7 sm:tracking-wide leading-normal sm:leading-loose">
          I have had the opportunity to teach and mentor aspiring frontend developers, helping them understand 
          modern web technologies and adopt best practices. I enjoy simplifying complex concepts and guiding others to become 
          better developers. I am also looking forward to expanding my skills into backend development to broaden my expertise 
          and build more robust, full-stack solutions.  I am always open to learning other frameworks and technologies to deliver 
          the best results. Let us connect and build something amazing together.
        </p>
        <div className="mt-5">
          <Link to="mailto: olayemisuccess7@gmail.com" className="max-w-[175px] flex items-center justify-between px-5 pt-3 pb-3 bg-[#298E77] 
            text-white font-extrabold rounded-full cursor-pointer shadow-[0_0_10px_#D9D9D9C9] hover:shadow-[0_0_20px_#D9D9D9C9] 
            transition-shadow duration-300"
          >
            <span>Send an email</span>
            <img src={arrow} alt="arrow" className="mt-1 w-[18px] h-auto"/>
          </Link>
        </div>
        <div className="mt-8 lg:mt-4">
          <h1 className="text-[#FFFFFF] text-center font-bold text-[1.8rem] sm:text-[2rem] md:text-[2rem]">
            My Frameworks / Technologies
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-8 mt-4">
            {frameworkAndTechnologies.map((framework) => (
              <div className="bg-black flex items-center px-3 py-1 rounded-full 
                shadow-[0_0_10px_#298E77] hover:shadow-[0_0_20px_#298E77]" key={framework.title}
              >
                <p className="text-white font-semibold me-2">{framework.title}</p>
                <img src={framework.image} alt={framework.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutMe