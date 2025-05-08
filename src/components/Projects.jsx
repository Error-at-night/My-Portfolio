import { Link } from "react-router-dom"
import { projects } from "../utils/projects"

function Projects() {
  return (
    <main className="bg-[#040E0C] px-8 pt-3 pb-12" id="projects">
      <div className="max-w-[1200px] mx-auto mt-6">
        <h1 className="text-[#FFFFFF] font-extrabold text-[1.9rem] sm:text-[2rem] md:text-[2.5rem]">My Projects</h1>
        <div className="grid grid-cols-12 sm:gap-x-12 gap-y-10 mt-6">
          {projects.map((project) => (
            <div key={project.title} 
              className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 pb-6 bg-[#1A1A1A] w-full rounded-t-2xl shadow-[0_0_4px_#298E77]"
            >
              <img src={project.image} className="w-full h-[200px] sm:h-[280px] rounded-t-2xl"/>
              <div className="text-white px-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center mt-5">
                    <p className="text-[#D9D9D9C9] font-normal">{project.number}</p>
                    <h2 className="ms-2 text-[1.2rem] md:text-[1.5rem] font-bold">{project.title}</h2>
                  </div>
                  <div className="mt-5">
                    <Link to={project.link} target="_blank">
                      <img src={project.icon} alt="arrow" className="mt-1 w-[25px] h-[25px] md:w-[30px] md:h-[30px] ms-1"/>
                    </Link>
                  </div>
                </div>
                <p className="mt-4 text-[1.1rem] text-[#D9D9D9C9]">{project.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects