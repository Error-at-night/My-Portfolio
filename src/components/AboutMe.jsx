import { Link } from "react-router-dom"
import arrow from "../assets/arrow-up-right.png"
import { frameworkAndTechnologies } from "../utils/frameworkAndTechnologies.js"

function AboutMe() {
  return (
    <main className="custom-gradient px-8 pt-3 pb-12" id="about-me">
      <div className="mx-auto max-w-[1200px] mt-6">
        <h1 className="text-[#FFFFFF] font-extrabold text-[1.9rem] sm:text-[2rem] md:text-[2.5rem]">About Me</h1>
        <p className="text-white text-[1rem] sm:text-[1.3rem] mt-2 sm:tracking-wide leading-normal sm:leading-loose">
          I am a Software Engineer who builds web applications. With a solid foundation in HTML, CSS, Javascript, I 
          specialize in modern technologies like NextJs, ReactJs, Typescript. I am always open to learning other 
          technologies to deliver the best results. 
        </p>
        <div className="mt-5">
          <Link to="mailto: olayemisuccess7@gmail.com" className="max-w-[148px] flex items-center justify-center px-5 pt-3 pb-3 bg-[#298E77] 
            text-white font-extrabold rounded-full cursor-pointer shadow-[0_0_10px_#D9D9D9C9] hover:shadow-[0_0_20px_#D9D9D9C9] 
            transition-shadow duration-300"
          >
            <span>Send an email</span>
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