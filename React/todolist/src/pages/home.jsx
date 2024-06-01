import Header from '../organisms/header'
import About from '../organisms/aboutSection'
import ToolsSection from '../organisms/toolsSection'
import ContactSection from '../organisms/contactSection'
import QuoteSection from '../organisms/quoteSection'
import Footer from '../organisms/footer'

function home() {
  return (
    <div>
        <Header/>
        <About/>
        <ToolsSection/>
        <ContactSection/>
        <QuoteSection/>
        <Footer/>
    </div>
  )
}

export default home