import AboutMe from "../components/AboutMe"
import Header from "../components/Header"
import Projects from "../components/Projects"
import ScrollToTopButton from "../components/ScrollToTopButton"

function Layout() {
  return (
    <>
      <Header/>
      <AboutMe/>
      <Projects/>
      <ScrollToTopButton/>
    </>
  )
}

export default Layout