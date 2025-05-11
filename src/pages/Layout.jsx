import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"
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
      <Footer/>
    </>
  )
}

export default Layout