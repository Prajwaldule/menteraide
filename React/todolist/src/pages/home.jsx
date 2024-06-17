import Header from '../organisms/home/header'
import About from '../organisms/home/aboutSection'
import ToolsSection from '../organisms/home/toolsSection'
import ContactSection from '../organisms/home/contactSection'
import QuoteSection from '../organisms/home/quoteSection'
import Footer from '../organisms/home/footer'

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