
import Achievements from "../organisms/Achievements"
import Contact from "../organisms/Contact"
import Education from "../organisms/Education"
import Introduction from "../organisms/Introduction "
import Projects from "../organisms/Projects"
import Services from "../organisms/Services"
import Skills from "../organisms/Skills"
import Whomi from "../organisms/Whomi"
function Mainpage() {
  return (
    <div>
    <Introduction/>
    <Whomi/>
    <Education/>
    <Skills/>
    <Projects/>
    <Achievements/>
    <Services/>
    <Contact/>
    </div>

  )
}

export default Mainpage